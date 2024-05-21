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
                            <input type="time" id="input1">
                        </div>
                        <div class="input-group">
                            <label for="input2" class="lb2">To:</label>
                            <input type="time" id="input2" >
                        </div>
                        <div class="ad_d">
                            <button type="submit" @click="addWorkHour" >
                                <img src="../assets/plus.png" alt="Add">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="horaires">
                    <span style="color: gray;">Break time :</span>
                    <div class="disp_horaires">{{ breakTime}}</div>
                    <div class="input-container">
                        <div class="input-group">
                            <label for="input3" class="lb1">From:</label>
                            <input type="time" id="input3"  >
                        </div>
                        <div class="input-group">
                            <label for="input4" class="lb2">To:</label>
                            <input type="time" id="input4" >
                        </div>
                        <div class="ad_d">
                            <button type="submit" @click="BreakTime">
                                <img src="../assets/plus.png" alt="Add">
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div class="horaires">
                    <span style="color: gray;">Appointment Duration:</span>
                    <div class="input-container1">
                        <div class="input-group">
                            <label for="input3" class="lb1">Duration:</label>
                            <input type="text" id="input5"  v-model="duration">
                            <label class="lb3">min</label>
                        </div>
                        
                    </div>  
                </div>
                <div class="butts">
                    <button type="reset" id="res" @click="resetInputs">Reset</button>
                    <button @click="confirmDelete" id="sv" type="submit">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            workHours: '00:00 - 00:00',
            breakTime: '00:00 - 00:00',
            initialWorkHours: '00:00 - 00:00',
            duration:'00'
        }
    },
  
    props: ['medecinId'],
    methods: {
        addWorkHour() {
      const startTime = document.getElementById('input1').value;
      const endTime = document.getElementById('input2').value;
      if (startTime && endTime) {
        this.workHours=`${startTime} - ${endTime}`;
      }
    },
    BreakTime() {
      const startTime = document.getElementById('input3').value;
      const endTime = document.getElementById('input4').value;
      if (startTime && endTime) {
      this.breakTime = `${startTime} - ${endTime}`;
    }
    },
    resetInputs() {
      document.getElementById('input1').value = '';
      document.getElementById('input2').value = '';
      document.getElementById('input3').value = '';
      document.getElementById('input4').value = '';
      document.getElementById('input5').value = '';
      this.workHours = this.initialWorkHours;
      this.breakTime = '00:00 - 00:00';
      this.duration='00';
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
   padding-left: 15px;
}
.lb3{
   padding-top: 10px;
   padding-left: 25px;
}
#input5{
    width:50px;
}
.input-container input{
  margin-top: 3px;
  margin-left: 5px;
  width:80px;
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