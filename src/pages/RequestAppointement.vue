<template>
    <div class="reqappoint">
        <div><HeaderPage class="HeaderPage" :id="$route.params.userId"/></div>
        <div>
            <div class="return">
                <img src="../assets/right-arrow.png">&nbsp;
                <span>Return to profile</span>
            </div>
            <div class="doctorprofile">
                <img v-if="image" :src="image"> 
                <img v-else src="../assets/image3.png">
                <p>Dr.{{ fullName }} <br> <small>{{ speciality }}</small></p>
            </div>
            <h3 class="title1">Request An  Appointement</h3>
            <h4 class="title2">This Appointment Is For : </h4>
            <select v-model="demandeType">
                <option value=null style="display: none">New Patient, Returning ...</option>
                <option value="NewPatient">New Patient</option>
                <option value="ReturningPatient">Returning Patient</option>
                <option value="Emergency">Emergency</option>
            </select>
            <h4 class="title2">Select The Day :</h4>
            <div class="schedule">
                <h3>{{ currentMonthName }},&nbsp;&nbsp;{{ currentYear }}</h3>
                <div class="days">
                    <p v-for="(day) in firstSevenDays" :key="day.date">{{ day.dayName }}</p>
                    <p v-for="(day, index) in daysInMonth" 
                        :key="index" 
                        :class="{ selected : selectedDay === index, past: day.isPast}" 
                        @click="day.isPast ? null : selectDay(day.date, index)">
                        {{ day.date }}
                    </p>
                </div>
            </div>
            <h4 class="title2">Select The Time :</h4>
            <div class="hours">
                <div v-for="(schedule, index) in filteredSchedules" 
                    :key="schedule.id"
                    :class="{ selected : selectedIndex === index, disable: schedule.prise }"
                    @click="!schedule.prise ? selectAppointment(schedule, index) : null">
                    {{ schedule.timeString }}
                </div>
                <p v-if="filteredSchedules.length === 0">No available time, doctor not working on this day.</p>
            </div>
            <div class="buttons">
                <button type="button" @click="CancelAppointement">Cancel</button> 
                <button type="submit" @click="RequestAppointement">Finish</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import axios from 'axios'
import router from '@/router'

export default {
    components: { HeaderPage },
    data() {
        return { 
            userId: null,
            medecinId: null,
            fullName: '',
            speciality: '',
            image: '',
            date: new Date(),
            demandeType: null,
            selectedDay: null,
            dateAppointment: null,
            schedules: [],
            formattedCalendriers: [],
            selectedIndex: null,
            timeAppointment: null,
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
        },
        filteredSchedules() {
            return this.schedules
            .filter(schedule => {
                let scheduleDate = null
                const hour=new Date(schedule.startTime).getHours()
                const date=new Date(schedule.startTime)
                if (hour==0) {
                    scheduleDate= new Date(date.getFullYear(), date.getMonth(), date.getDate()+1).toISOString().split("T")[0]
                } else {
                    scheduleDate = new Date(schedule.startTime).toISOString().split("T")[0]
                }
                return scheduleDate === this.dateAppointment
            })
            .map(schedule => {
                const date = new Date(schedule.startTime)
                const ampm = date.getHours() >= 12 ? 'PM' : 'AM'
                const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ampm
                if (date < this.date) {
                    schedule.prise = true
                }
                return {...schedule, timeString}
            })
        },
    },
    mounted() {
        this.userId = this.$route.params.userId
        this.medecinId = this.$route.params.medecinId
        this.selectDay(this.date.getDate(), this.date.getDate()-1)
        if(this.medecinId) {
            axios.get(`http://localhost:7777/service-rdv/FindEntites/medecinWithCalendriers/${this.medecinId}`)
            .then( response => {
                const data = response.data
                this.fullName = data.fullName
                this.speciality = data.speciality
                this.image = data.image
                this.schedules = data.calendriers
                if (this.image) {
                    axios.get(`http://localhost:7777/service-profile/api/image/${this.image}`, {
                        responseType: 'blob'
                    })
                    .then(res => {
                        this.image = URL.createObjectURL(res.data)
                    })
                }
            })
            .catch(error => {
                console.error("There was an error fetching the medecin data!", error);
            })
        }
    },
    methods: {
        CancelAppointement(){
            this.$router.go(-1)
        },
        selectDay(day, index) {
            this.selectedDay = index
            const Month = String(this.currentMonth).padStart(2, '0')
            const Day = String(day).padStart(2, '0')
            this.dateAppointment = `${this.currentYear}-${Month}-${Day}`
        },
        selectAppointment(schedule, index) {
            this.selectedIndex = index;
            this.timeAppointment = schedule.timeString;
        },
        formatTime(date,time) {
            if(date && time) { return `${date}T${time.slice(0,5)}:00` } else return null 
        },
        RequestAppointement() {
            const appointmentData = {
                startTime: this.formatTime(this.dateAppointment, this.timeAppointment),
                demandeType: this.demandeType,
            }
            const appointementdata = {
                fullName: this.fullName,
                dateAppointment: this.dateAppointment,
                timeAppointment: this.timeAppointment,
            }
            if(appointmentData.startTime && appointmentData.demandeType){
                axios.post(`http://localhost:7777/service-rdv/demande_rendezvous/medecin/${this.medecinId}/patient/${this.userId}/demande_rdv`, appointmentData)
                .then(response => {
                    if(response.data.body=='Patient is blocked.') {
                        router.push({ name: 'FailedAppointement', params: {} });
                    } else {
                        localStorage.setItem(`appointmentData_${this.userId}`, JSON.stringify(appointementdata));
                        router.push({ name: 'SuccessAppointement', params: {} });
                    }
                })
                .catch(error => {
                    console.error("There was an error submitting the appointment!", error);
                })
            } else {
                alert('one data at least is missing')
            }
        }
    }
}
</script>

<style>
.reqappoint {
    background: url(../assets/medical-banner.png) no-repeat;
    background-size: 100% 100%;
    padding-bottom: 25px;
}
.reqappoint > div:first-child, .success > div:first-child {
    height: 100px;
    background-color: #99FEF2;
}
.reqappoint > div:last-child {
    width: 60%;
    background-color: white;
    margin: 50px auto;
    padding-bottom: 40px;
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.reqappoint .return img {
    width: 15px;
    height: 15px;
    margin-left: 30px;
    margin-top: 30px;
}
.reqappoint .return span {
    opacity: 70%;
}
.reqappoint .doctorprofile {
    width: 18%;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.reqappoint .doctorprofile img {
    width: 70px;
    height: 70px;
    border: 2px solid #03c6c1;
    border-radius: 50px;
}
.reqappoint .doctorprofile small {
    opacity: 70%;
}
.reqappoint .title1 {
    color: white;
    background-color: #03C6C1;
    text-align: center;
    font-weight: 100;
    padding: 20px 0;
    margin-bottom: 50px;
}
.reqappoint .title2 {
    font-weight: 500;
    margin-left: 15%;
    margin-bottom: 10px;
}
.reqappoint select {
    width: 70%;
    margin-left: 15%;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    border-color: rgb(128, 128, 128, 0.7);
    border-radius: 10px;
    opacity: 70%;
}
.reqappoint input {
    width: 53%;
    margin-left: 23%;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    border-color: rgb(0, 0, 0, 0.3);
    border-radius: 10px;
    opacity: 0.7;
}
.reqappoint .schedule {
    width: 53%;
    margin: 0 auto;
    margin-bottom: 30px;
    box-shadow: none;
}
.reqappoint .days {
    width: 400px;
}
.reqappoint .hours {
    width: 53%;
    background-color: white;
    border: 1px solid rgb(128, 128, 128, 0.5);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px 20px;
    padding-bottom: 0;
}
.reqappoint .hours div {
    width: 90px;
    display: inline-block;
    text-align: center;
    color: #03C6C1;
    border: 1px solid #03C6C1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-inline: 10px;
    cursor: pointer;
}
.reqappoint .hours div.selected {
    color: white;
    background-color: #03C6C1;
}
.reqappoint .hours div.disable {
    pointer-events: none;
    color: white;
    border: none;
    background-color: rgb(0, 0, 0, 0.2);
}
.reqappoint .hours p {
    color: #03C6C1;
    text-align: center;
    padding-bottom: 10px;
}
.reqappoint .buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.reqappoint .buttons button {
    color: white;
    letter-spacing: 0.08em;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px 25px;
}
.reqappoint .buttons button:first-child {
    background-color: rgb(0, 0, 0, 0.2);
}
.reqappoint .buttons button:last-child {
    background-color: #03C6C1;
}
</style>