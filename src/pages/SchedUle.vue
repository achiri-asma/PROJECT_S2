<template>
    <div class="profilemed">
        <div class="header">
            <h3>Schedule</h3>
            <router-link to="/">
                <span>Log out</span>&nbsp;
                <img src="../assets/logout.png" alt="Log out">
            </router-link>
        </div>
        <div class="schedulemain">
            <h5>Set Your Schedule</h5>
            <div class="main">
                <div class="schedule">
                    <h3>{{ currentMonthName }},&nbsp;&nbsp;{{ currentYear }}</h3>
                    <div class="days">
                        <p v-for="(day) in firstSevenDays" :key="day.date">{{ day.dayName }}</p>
                        <p v-for="(day, index) in daysInMonth" 
                            :key="index" 
                            :class="{ selected : isSelected(day.date), past: day.isPast}" 
                            @click="day.isPast ? null : toggleDaySelection(day.date)">
                            {{ day.date }}
                        </p>
                    </div>
                </div>
                <div class="horaires">
                    <div>
                        <p>Work Hours:</p>
                        <div class="input-container1">
                            <label for="input1">From</label>&nbsp;&nbsp;
                            <input type="time" id="input1" v-model="workStart">&nbsp;&nbsp;
                            <label for="input2">To</label>&nbsp;&nbsp;
                            <input type="time" id="input2" v-model="workEnd">
                        </div>
                    </div>
                    <div>
                        <p>Break time:</p>
                        <div class="input-container1">
                            <label for="input3">From</label>&nbsp;&nbsp;
                            <input type="time" id="input3" v-model="breakStart">&nbsp;&nbsp;
                            <label for="input4">To</label>&nbsp;&nbsp;
                            <input type="time" id="input4" v-model="breakEnd">
                        </div>
                    </div>
                    <div>
                        <p>Appointment Duration:</p>
                        <div class="input-container1">
                            <input type="number" id="input5" min="1" max="1440" v-model="duration">&nbsp;&nbsp;
                            <label>min</label>&nbsp;&nbsp;
                        </div>
                    </div>
                </div>  
            </div>
            <div class="buttons">
                <button type="reset" class="reset" @click="resetInputs">Reset</button>
                <button type="submit" class="save" @click="setSchedule">Save</button>
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
            selectedDays: [],
            date: new Date()
        }
    },
    props: ['medecinId'],
    computed: {
        currentMonth() {
            return this.date.getMonth() + 1
        },
        currentYear() {
            return this.date.getFullYear()
        },
        currentMonthName() {
            return this.date.toLocaleString('en-US', { month: 'long' })
        },
        formatTime(time) {
            return `2024-05-22T${time}:00`;
        },
        firstSevenDays() {
            const days = [];
            for (let i = 1; i <= 7; i++) {
                const dayDate = new Date(this.currentYear, this.currentMonth - 1, i)
                days.push({
                    dayName: dayDate.toLocaleString('en-US', { weekday: 'long' }).slice(0, 2)
                })
            }
            return days;
        },
        daysInMonth() {
            const days = [];
            const daysInCurrentMonth = new Date(this.currentYear, this.currentMonth, 0).getDate()
            const todayDateOnly = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
            for (let i = 1; i <= daysInCurrentMonth; i++) {
                const date = new Date(this.currentYear, this.currentMonth - 1, i);
                const isPastDay = date < todayDateOnly;
                days.push({
                    date: i,
                    isPast: isPastDay
                })
            }
            return days;
        }
    },
    methods: {
        resetInputs() {
            document.getElementById('input1').value = ''
            document.getElementById('input2').value = ''
            document.getElementById('input3').value = ''
            document.getElementById('input4').value = ''
            document.getElementById('input5').value = 0
        },
        toggleDaySelection(day) {
            const index = this.selectedDays.indexOf(day);
            if (index > -1) {
                this.selectedDays.splice(index, 1);
            } else {
                this.selectedDays.push(day);
            }
        },
        isSelected(day) {
            return this.selectedDays.includes(day);
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
            if (!this.workStart || !this.workEnd || !this.duration || !this.selectedDays) {
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
            if (this.duration < 1 || this.duration > 1440) {
                alert('Duration must be between 1 and 1440 minutes.')
                return
            }
            const scheduleWithPause = {
                dayStart: `${this.workStart}:00`,
                workingSessionLong: this.duration,
                workingHours: this.calculateWorkingHours(this.workStart, this.workEnd, this.breakStart, this.breakEnd),
                pauseStart: `${this.breakStart}:00`,
                pauseEnd: `${this.breakEnd}:00`,
                days: this.selectedDays,
                month: this.currentMonth,
                year: this.currentYear
            }
            console.log(scheduleWithPause)
            const scheduleWithoutPause = {
                dayStart: `${this.workStart}:00`,
                workingSessionLong: this.duration,
                workingHours: this.calculateWorkingHours(this.workStart, this.workEnd, this.breakStart, this.breakEnd),
                days: this.selectedDays,
                month: this.currentMonth,
                year: this.currentYear
            }
            const schedule = this.breakStart && this.breakEnd ? scheduleWithPause : scheduleWithoutPause
            const endpoint = this.breakStart && this.breakEnd
            ? `http://localhost:7777/service-rdv/calendrier/medecin/${this.medecinId}/updateMonthCreudsWithPause`
            : `http://localhost:7777/service-rdv/calendrier/medecin/${this.medecinId}/updateMonthCreudsWithoutPause`
            axios.put(endpoint, schedule)
            .then(response => {
                console.log(response.data)
                if(response.data.body.length==0) {
                    alert('Try again')
                } else {
                    alert('Schedule created successfully')
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
.schedulemain {
    width: 90%;
    height: 550px;
    background-color: white;
    border-radius: 30px;
    margin: 30px auto;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}
.schedulemain h5 {
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    padding-top: 30px;
}
.schedulemain .main {
    display: flex;
}
.schedulemain .main::before {
    content: "";
    position: absolute;
    top: 240px;
    bottom: 170px;
    left: 60%;
    border-left: 2px solid rgb(0, 0, 0, 0.15);
}
.schedulemain .schedule, .reqappoint .schedule {
    width: 430px;
    text-align: center;
    border: 2px solid rgb(0, 0, 0, 0.15);
    border-radius: 20px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    box-sizing: border-box;
    padding: 20px;
    margin-top: 20px;
}
.schedulemain .days, .reqappoint .days {
    width: 350px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    background-color: rgb(3, 198, 193, 0.2);
    border: 2px solid rgba(217, 217, 217, 0.707);
    border-radius: 20px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
    margin-top: 10px;
}
.schedulemain .days p, .reqappoint .days p {
    width: 30px;
    height: 30px;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
.schedulemain .days p.selected, .reqappoint .days p.selected {
    color: #03c6c1;
    background-color: white;
    border-color: #03c6c1;
    border-radius: 50%;
}
.schedulemain .days p.past, .reqappoint .days p.past {
    color: gray;
    opacity: 0.5;
}
.schedulemain .main .horaires {
    width: 430px;
    margin-top: 20px;
    padding-top: 50px;
}
.schedulemain .horaires > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
.schedulemain .horaires > div:last-child {
    justify-content: initial;
}
.schedulemain .horaires p {
    font-size: 18px;
    font-weight: 400;
}
.schedulemain .input-container1 {
    height: 50px;
    opacity: 0.7;
    border: 2px solid rgba(217, 217, 217);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 2px 2px 2px 10px;
}
.schedulemain .horaires > div:last-child .input-container1 {
    margin-left: 15px;
}
.schedulemain .input-container1 input {
    width: 90px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    color: #03c6c1;
    text-align: center;
    border: 1px solid rgba(217, 217, 217);
    outline: none;
}
.schedulemain #input2, .schedulemain #input4 {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.schedulemain input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
}
.schedulemain #input5 {
    width: 150px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-left: -8px;
    box-sizing: border-box;
   
}
.schedulemain #input5::-webkit-inner-spin-button {
    display: none;
}
.schedulemain .buttons{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 200px;
}
.schedulemain .buttons button {
    width:100px;
    height:40px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color:white;
}
.schedulemain .reset{
    background-color: rgb(161, 161, 161, 0.5);
}
.schedulemain .save{
    background-color: #03c6c1;
}
</style>