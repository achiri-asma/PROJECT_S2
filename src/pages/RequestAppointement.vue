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
            <input type="date" v-model="dateAppointment">
            <h4 class="title2">Select The Time :</h4>
            <div class="hours">
                <div v-for="(calendrier, index) in formattedCalendriers" 
                    :key="calendrier.id"
                    :class="{ selected: selectedIndex === index, disable: calendrier.prise }"
                    @click="!calendrier.prise ? selectAppointment(calendrier, index) : null">
                    {{ calendrier.timeString }}
                </div>
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
            demandeType: null,
            dateAppointment: null,
            calendriers: [],
            formattedCalendriers: [],
            selectedIndex: null,
            timeAppointment: null
        }
    },
    mounted() {
        this.userId = this.$route.params.userId
        this.medecinId = this.$route.params.medecinId
        if(this.medecinId) {
            axios.get(`http://localhost:8083/FindEntites/medecinWithCalendriers/${this.medecinId}`)
            .then( response => {
                const data = response.data
                this.fullName = data.fullName
                this.speciality = data.speciality
                this.image = data.image
                this.calendriers = data.calendriers
                if (this.image) {
                    axios.get(`http://localhost:7777/service-profile/api/image/${this.image}`, {
                        responseType: 'blob'
                    })
                    .then(res => {
                        this.image = URL.createObjectURL(res.data)
                    })
                }
                this.formattedCalendriers = this.calendriers.map(cal => {
                    const date = new Date(cal.startTime);
                    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
                    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}) + ampm;
                    return { ...cal, timeString };
                })
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
        selectAppointment(calendrier, index) {
            this.selectedIndex = index;
            this.timeAppointment = calendrier.timeString;
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
                axios.post(`http://localhost:8083/demande_rendezvous/medecin/${this.medecinId}/patient/${this.userId}/demande_rdv`, appointmentData)
                .then(response => {
                    if(response.data.body=='Patient is blocked.') {
                        router.push({ name: 'FailedAppointement', params: {} });
                    } else {
                        localStorage.setItem('appointmentData', JSON.stringify(appointementdata));
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
.reqappoint{
    background: url(../assets/medical-banner.png) no-repeat;
    background-size: 100% 100%;
    padding-bottom: 25px;
}
.reqappoint > div:first-child, .success > div:first-child{
    height: 100px;
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
    width: 18%;
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
.reqappoint input{
    width: 53%;
    margin-left: 23%;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    border-color: rgb(0, 0, 0, 0.3);
    border-radius: 10px;
    opacity: 0.7;
}
.reqappoint .hours{
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
.reqappoint .hours div{
    width: 90px;
    display: inline-block;
    opacity: 0.5;
    text-align: center;
    border: 1px solid rgb(0, 0, 0, 0.7);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-inline: 10px;
    cursor: pointer;
}
.reqappoint .hours div.selected{
    color: #03C6C1;
    opacity: 100%;
    border: 2px solid #03C6C1;
}
.reqappoint .hours div.disable {
    pointer-events: none;
    color: red;
    border-color: red;
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