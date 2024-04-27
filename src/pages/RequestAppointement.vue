<template>
    <div class="reqappoint">
        <div><!--<HeaderPage class="HeaderPage"/>--></div>
        <div>
            <div class="return">
                <img src="../assets/right-arrow.png">&nbsp;
                <span>Return to profile</span>
            </div>
            <div class="doctorprofile">
                <img src="../assets/image1.png">
                <p>Dr.Sara Anttoine <br> <small>Dentist</small></p>
            </div>
            <h3 class="title1">Request An  Appointement</h3>
            <h4 class="title2">This Appointment Is For : </h4>
            <select>
                <option style="display: none;">New Patient, Returning ...</option>
                <option>New Patient</option>
                <option>Returning Patient</option>
                <option>Emergency</option>
            </select>
            <h4 class="title2">Available Time :</h4>
            <div class="agenda">
                <h3>{{ currentMonthName }}, {{ currentYear }}</h3>
                <div class="days">
                    <p v-for="day in daysInMonth" :key="day.date">{{ day.dayName }} <br> <span>{{ day.date }}</span> </p>
                    <img src="../assets/play-button.png">
                </div>
                <div class="hours">
                    <div>
                        <div>8:00 AM</div>
                        <div>8:00 AM</div>
                        <div>8:00 AM</div>
                        <div>8:00 AM</div>
                        <div>8:00 AM</div>
                    </div>
                    <div>
                        <div>9:00 AM</div>
                        <div>9:00 AM</div>
                        <div>9:00 AM</div>
                        <div>9:00 AM</div>
                        <div>9:00 AM</div>
                    </div>
                    <div>
                        <div>10:00 AM</div>
                        <div>10:00 AM</div>
                        <div>10:00 AM</div>
                        <div>10:00 AM</div>
                        <div>10:00 AM</div>
                    </div>
                    <div>
                        <div>11:00 AM</div>
                        <div>11:00 AM</div>
                        <div>11:00 AM</div>
                        <div>11:00 AM</div>
                        <div>11:00 AM</div>
                    </div>
                    <div>
                        <div>12:00 AM</div>
                        <div>12:00 AM</div>
                        <div>12:00 AM</div>
                        <div>12:00 AM</div>
                        <div>12:00 AM</div>
                    </div>
                    <div>
                        <div>13:00 AM</div>
                        <div>13:00 AM</div>
                        <div>13:00 AM</div>
                        <div>13:00 AM</div>
                        <div>13:00 AM</div>
                    </div>
                </div>
                <div><button type="button"><b>View more</b></button></div>
            </div>
            <div class="buttons">
                <button type="button">Cancel</button>
                <RouterLink to="/SuccessAppointement"><button type="submit">Finish</button></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
/*import HeaderPage from '../components/HeaderPage.vue'*/

export default {
    /*components: { HeaderPage },*/
    data() {
        return {
            isLandingPage: true, 
            date: new Date()
        }
    },
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
        daysInMonth() {
            const days = [];
            const daysInCurrentMonth = new Date(this.currentYear, this.currentMonth, 0).getDate()
            for (let i = 1; i <= daysInCurrentMonth; i++) {
                const dayDate = new Date(this.currentYear, this.currentMonth - 1, i)
                days.push({
                    date: i,
                    dayName: dayDate.toLocaleString('en-US', { weekday: 'long' }).slice(0, 3)
                })
            }
            return days;
        }
    }
}
</script>

<style>
.reqappoint{
    background: url(../assets/medical-banner.png) no-repeat;
    background-size: 100% 100%;
    padding-bottom: 25px;
}
.reqappoint > div:first-child, .success > div:first-child{
    height: 50px;
    background-color: #99FEF2;
}
.reqappoint > div:last-child{
    width: 60%;
    background-color: white;
    margin: 50px auto;
    padding-bottom: 40px;
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.reqappoint .return img{
    width: 15px;
    height: 15px;
    margin-left: 30px;
    margin-top: 30px;
}
.reqappoint .return span{
    opacity: 70%;
}
.reqappoint .doctorprofile{
    width: 25%;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.reqappoint .doctorprofile img{
    width: 70px;
    height: 70px;
    border: 2px solid #03c6c1;
    border-radius: 50px;
}
.reqappoint .doctorprofile small{
    opacity: 70%;
}
.reqappoint .title1{
    color: white;
    background-color: #03C6C1;
    text-align: center;
    font-weight: 100;
    padding: 20px 0;
    margin-bottom: 50px;
}
.reqappoint .title2{
    font-weight: 500;
    margin-left: 15%;
    margin-bottom: 10px;
}
.reqappoint select{
    width: 70%;
    margin-left: 15%;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    border-color: rgb(128, 128, 128, 0.7);
    border-radius: 10px;
    opacity: 70%;
}
.reqappoint .agenda{
    width: 70%;
    margin: 0 auto;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 40px;
    background-color: rgb(153, 254, 242, 0.2);
    border: 1px solid rgb(128, 128, 128, 0.5);
    border-radius: 10px;
}
.reqappoint .agenda h3{
    text-align: center;
}
.reqappoint .agenda .days{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}
.reqappoint .agenda .days p{
    letter-spacing: 0.1em;
    box-sizing: border-box;
    padding: 0 40px;
}
.reqappoint .agenda .days p span{
    color: black;
    display: flex; 
    justify-content: center;
}
.reqappoint .agenda .hours{
    width: 98%;
    height: 260px;
    background-color: white;
    border: 1px solid rgb(128, 128, 128, 0.5);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 15px;
    box-sizing: border-box;
    padding: 20px 30px;
    overflow: auto;
}
.reqappoint .agenda .hours::-webkit-scrollbar{
    width: 15px;
}
.reqappoint .agenda .hours::-webkit-scrollbar-thumb{
    background: rgba(176, 176, 176, 0.64);
    border: 1px solid rgb(0, 0, 0, 0.7);
    border-radius: 10px;
}
.reqappoint .agenda .hours > div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.reqappoint .agenda .hours > div div{
    color: #03C6C1;
    border: 1px solid #03C6C1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px;
}
.reqappoint .agenda div:last-child{
    display: flex;
    justify-content: center;
}
.reqappoint .agenda button{
    color: white;
    letter-spacing: 0.1em;
    background-color: #03C6C1;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 3px 25px;
}
.reqappoint .buttons{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.reqappoint .buttons button{
    color: white;
    letter-spacing: 0.08em;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px 25px;
}
.reqappoint .buttons button:first-child{
    background-color: rgb(0, 0, 0, 0.2);
}
.reqappoint .buttons button:last-child{
    background-color: #03C6C1;
}
</style>