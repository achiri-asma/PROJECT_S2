<template>
    <div class="profilemed">
        <div class="header">
            <h3>Schedule</h3>
            <router-link to="/">
                <span>Log out</span>&nbsp;
                <img src="../assets/logout.png" alt="Log out">
            </router-link>
        </div>
        <div class="main">
            <div class="personinfoos">
                <h2>Set Your Schedule</h2>
                <div class="horaires">
                    <span style="color: gray;">Work Hours:</span>
                    <div class="disp_horaires">{{ workHours }}</div>
                    <div class="input-container">
                        <div class="input-group">
                            <label for="input1" class="lb1">From:</label>
                            <input type="time" id="input1" v-model="workStart">
                        </div>
                        <div class="input-group">
                            <label for="input2" class="lb2">To:</label>
                            <input type="time" id="input2" v-model="workEnd">
                        </div>
                    </div>
                </div>
                <div class="horaires">
                    <span style="color: gray;">Break time :</span>
                    <div class="disp_horaires">{{ breakTime}}</div>
                    <div class="input-container">
                        <div class="input-group">
                            <label for="input3" class="lb1">From:</label>
                            <input type="time" id="input3" v-model="breakStart">
                        </div>
                        <div class="input-group">
                            <label for="input4" class="lb2">To:</label>
                            <input type="time" id="input4" v-model="breakEnd">
                        </div>
                    </div>
                </div>
                <div class="horaires">
                    <span style="color: gray">Appointment Duration:</span>
                    <div class="input-container1">
                        <div class="input-group">
                            <label for="input5" class="lb3">Duration:</label>
                            <input type="number" id="input5" min="1" max="1440" v-model="duration">
                            <label class="lb3">min</label>
                        </div>
                    </div>  
                </div>
                <div class="butts">
                    <button type="reset" id="res" @click="resetInputs">Reset</button>
                    <button type="submit" id="sv" @click="setSchedule">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            workStart: '',
            workEnd: '',
            breakStart: '',
            breakEnd: '',
            duration: 0,
            workHours: localStorage.getItem('workHours') || '00:00 - 00:00',
            breakTime: localStorage.getItem('breakTime') || '00:00 - 00:00',
            date: new Date()
        }
    },
    props: ['medecinId'],
    methods: {
        resetInputs() {
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
            document.getElementById('input5').value = 0;
        },
        formatTime(time) {
            return `${this.date.getFullYear()}-0${this.date.getMonth()+1}-${this.date.getDate()}T${time}:00`;
        },
        calculateWorkingHours(workStart, workEnd, pauseStart, pauseEnd) {
            const workstart = new Date(`2024-05-22T${workStart}:00`);
            const workend = new Date(`2024-05-22T${workEnd}:00`);
            const pausestart = new Date(`2024-05-22T${pauseStart}:00`);
            const pauseend = new Date(`2024-05-22T${pauseEnd}:00`);
            const result = pauseStart && pauseEnd 
            ? ((workend - workstart)/ (1000 * 60 * 60)) - ((pauseend - pausestart)/ (1000 * 60 * 60))
            : ((workend - workstart)/ (1000 * 60 * 60)) 
            return result;
        },
        setSchedule(e) {
            e.preventDefault()
            if (!this.workStart || !this.workEnd || !this.duration) {
                alert('Please enter all the required fields.')
                return
            }
            if ((this.workStart && !this.workEnd) || (!this.workStart && this.workEnd)) {
                alert('Please enter both work start and end times.')
                return
            }
            if ((this.breakStart && !this.breakEnd) || (!this.breakStart && this.breakEnd)) {
                alert('Please enter both break start and end times.')
                return
            }
            if (this.formatTime(this.workStart) >= this.formatTime(this.workEnd)) {
                alert('Work start time must be earlier than end time.')
                return
            }
            if (this.breakStart && this.breakEnd && this.formatTime(this.breakStart) >= this.formatTime(this.breakEnd)) {
                alert('Break start time must be earlier than end time.')
                return
            }
            if (this.duration < 1 || this.duration > 1440) {
                alert('Duration must be between 1 and 1440 minutes.')
                return
            }
            const scheduleWithPause = {
                dayStart: this.formatTime(this.workStart),
                workingSessionLong: this.duration,
                workingHours: this.calculateWorkingHours(this.workStart, this.workEnd, this.breakStart, this.breakEnd),
                pauseStart: this.formatTime(this.breakStart),
                pauseEnd: this.formatTime(this.breakEnd)
            }
            const scheduleWithoutPause = {
                dayStart: this.formatTime(this.workStart),
                workingSessionLong: this.duration,
                workingHours: this.calculateWorkingHours(this.workStart, this.workEnd, this.breakStart, this.breakEnd),
            }
            const schedule = this.breakStart && this.breakEnd ? scheduleWithPause : scheduleWithoutPause
            const endpoint = this.breakStart && this.breakEnd
            ? `http://localhost:8083/calendrier/medecin/${this.medecinId}/createCreudsWithPause`
            : `http://localhost:8083/calendrier/medecin/${this.medecinId}/createCreudsWithoutPause`
            axios.post(endpoint, schedule)
            .then(response => {
                console.log(response.data)
                if(response.data.body.length==0) {
                    alert('Y\'a un chevauchement enter les horaires')
                } else {
                    this.workHours = `${this.workStart} - ${this.workEnd}`
                    localStorage.setItem('workHours', this.workHours)
                    if (this.breakStart && this.breakEnd) {
                        this.breakTime = `${this.breakStart} - ${this.breakEnd}`
                        localStorage.setItem('breakTime', this.breakTime)
                    }
                }
            })
            .catch(error => {
                console.error('Une erreur est survenue :', error)
            })
        }
    }
}
</script>

<style>
.profilemed,
.profileuser {
    background-color: rgba(3, 198, 193, 0.2);
    width: 100%;
}

.profilemed .header,
.profileuser .header {
    width: 90%;
    height: 90px;
    background-color: white;
    border-top: none;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}

.profilemed .header h3 {
    color: #03c6c1;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-left: 30px;
}

.profilemed .header a {
    text-decoration: none;
}

.profilemed .header img {
    width: 20px;
    height: 20px;
    margin-right: 30px;
}

.profilemed .main,
.profileuser .main {
    display: flex;
    justify-content: space-between;
    margin: 30px 5%;
}

.profilemed .personinfoos,
.profileuser .personinfoos {
    width: 100%;
    height: 550px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}

.input-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.input-container1 {
    display: flex;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: row;
}

.horaires {
    display: flex;
}

.personinfoos h2{
    text-align: center;
    font-size: 30px;
    margin-top: 25px;
    color:gray;
    font-weight: 500;
}

.horaires{
    margin-left: 120px;
    margin-top: 50px;
    font-size:18px;
    color:gray;
    font-weight: 550;
}

.disp_horaires{
    width:150px;
    height:40px;
    background-color:#90f4f0;
    border: #03c6c1 2px solid;
    margin-left: 25px;
    border-radius: 15px;
    margin-top: -10px;
    padding-top: 10px;
    padding-left: 20px;
}

.input-container{
    width:450px;
    height:50px;
    border: rgb(155, 155, 155) 2px solid;
    margin-left: 30px;
    margin-top: -10px;
    border-radius: 20px;
}

.input-container1{
    width:280px;
    height:50px;
    border: rgb(155, 155, 155) 2px solid;
    margin-left: 125px;
    margin-top: -10px;
    border-radius: 20px;
}

.lb1{
   padding-top: 10px;
}

.lb3{
   padding-top: 10px;
   padding-left: 25px;
}

#input5{
    width: 55px;
    box-sizing: border-box;
}

#input5::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input-container input{
  margin-top: 3px;
  margin-left: 5px;
  width:85px;
  height:40px;
  font-size: 18px;
  color:#03c6c1;
  font-weight: 550;
  padding-left: 20px;
}

.input-container1 input{
  margin-top: 3px;
  margin-left: 5px;
  width:80px;
  height:40px;
  font-size: 18px;
  color:#03c6c1;
  font-weight: 550;
  padding-left: 20px;
}

.lb2{
    padding-top: 10px;
}

.ad_d button{
    width:40px;
    height: 40px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px dotted;
    margin-top: 05px;
    margin-left:50px;
}

.ad_d button img{
    width:20px;
    height: 20px;
}

.butts{
    margin-top: 90px;
    margin-left: 120px;
}

#res{
    margin-right: 590px;
    width:100px;
    height:40px;
    background-color: rgb(161, 161, 161);
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color:white;
}

#sv{
    width:100px;
    height:40px;
    background-color: #03c6c1;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color:white;
}
</style>