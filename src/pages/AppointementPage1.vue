<template>
    <div class="profileuser">
        <div class="header">
            <ul>
                <router-link :to="{ name: 'LandingPage', params: { userId: userId } }"><li>Home</li></router-link>
                <router-link to="/about-us"><li>About Us</li></router-link>
                <router-link to="/faqs"><li>FAQs</li></router-link>
                <router-link to="/contact"><li>Contact</li></router-link>
            </ul>
            <div class="userImage">
                <img v-if="imageUrl" :src="imageUrl" @click="toggleDropdown">
                <img v-else src="../assets/image3.png" @click="toggleDropdown">
                <div v-if="showDropdown" class="dropdown">
                    <router-link :to="{ name: 'DashUser', params: { userId: userId } }" @click="showDropdown=false"><div>My Profile</div></router-link> 
                    <router-link to="/"><div @click="logOut">Log out <img src="../assets/logout2.png"></div></router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="personinfoooo">
                <div class="search_bar">
                    <select name="choices" id="choice" v-model="selectedOption">
                        <option class="ch" value="today">Today's Appointments</option>
                        <option class="ch" value="future">Future Appointments</option>
                        <option class="ch" value="past">Past Appointments</option>
                        <option class="ch" value="all">All Appointments</option>
                    </select>
                    
                </div>
                <div class="cont">
                <div class="con_tainer" v-for="appointment in filteredAppointments" :key="appointment.id">
                    <div class="c1">
                        <img src="../assets/user.png" alt="calendar">
                        {{ appointment.patientName }}
                    </div>
                    <div class="c2">
                        <img src="../assets/calendar.png" alt="calendar">
                        {{ formatDate(appointment.date) }}
                    </div>
                    <div class="c3" style="margin-top: 15px;">
                        {{ appointment.demandeType }}
                        
                    </div>
                </div>
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
            showDropdown: false,
            selectedOption: 'all',
            appointments: [],
            searchQuery: null,
            imageUrl: '',
            patientName:''
           
        }
    },
    props: ['userId'],
    computed: {
        filteredAppointments() {
            if (this.searchQuery) {
                return this.appointments.filter(appointment =>
                    appointment.patientName.toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            }
            return this.appointments
        }
    },
    mounted() {
        this.fetchAppointments(),
        axios.get(`http://localhost:7777/service-profile/api/PatientInfo/${this.userId}/`)
        .then(async response => {
            this.UserInfo = response.data
            if (this.UserInfo.image) { 
                const response_1 = await axios.get(`http://localhost:7777/service-profile/api/image/${this.UserInfo.image}`, {
                    responseType: 'blob'
                })
                if (response_1.status === 200) {
                    this.imageUrl = URL.createObjectURL(response_1.data)
                } else {
                    throw new Error('Image not found')
                }
            }
        })
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },
        fetchAppointments() {
            let endpoint = ''
            switch (this.selectedOption) {
                case 'today':
                    endpoint = `http://localhost:7777/service-rdv/rendezvous/patient/today/${this.userId}`;
                    break;
                case 'future':
                    endpoint = `http://localhost:7777/service-rdv/rendezvous/patient/future/${this.userId}`;
                    break;
                case 'past':
                    endpoint = `http://localhost:7777/service-rdv/rendezvous/patient/past/${this.userId}`;
                    break;
                case 'all':
                    endpoint = `http://localhost:7777/service-rdv/rendezvous/patient/${this.userId}`;
                    break;
            }

            axios.get(endpoint)
            .then(response => {
                this.appointments = response.data.body
                return Promise.all(this.appointments.map(async appointment => {
                    const res = await axios.get(`http://localhost:7777/service-profile/api/MedecinInfo/${appointment.idMedecin}/`)
                    appointment.patientName = res.data.fullName
                  
                }))
            })
            .catch(error => {
                console.error(error)
            })
        },
        formatDate(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day} (${hours}:${minutes})`;
    }
    },
    watch: {
        selectedOption() {
            this.fetchAppointments()
        }
    }
    
}
</script>

<style>

.profileuser .main{
    display: flex;
    justify-content: space-between;
    margin: 30px 5%;
}

.profileuser .personinfoooo {
    width: 100%;
    height: 570px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}

#choice {
    margin-left: 25px;
    margin-top: 25px;
    width: 320px;
    height: 42.5px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #03c6c1;
    padding-left: 15px;
}

.ch {
    background-color: white;
}

.ch {
    font-family: Poppins;
    font-size: 16px;
    border: 1px solid #03c6c1;
}

.search_container {
    display: flex;
    margin-left: 25px;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 650px;
    margin-left: 50px;
    margin-top: 25px;
}

.search_input {
    border: none;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding: 5px;
}

.search_icon {
    width: 25px;
    height: 25px;
}

.search_icon img {
    width: 100%;
    height: 100%;
}

.search_bar {
    display: flex;
}
.con_tainer {
  display: flex;
  justify-content: space-between;
  width:94.5%;
  height:44px;
  border: #03c6c1 1px solid;
  border-radius: 10px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
}

.c1 {
    border-right: #03c6c1 1px solid;
    width:350px;
    font-size: 14px;
    font-family: Poppins;
}

.c2 {
    border-right: #03c6c1 1px solid;
    width:380px;
    margin-left: 10px;
    font-size: 14px;
    font-family: Poppins;
}

.c3 {
    margin-left: 10px;
    width:350px;
    font-size: 14px;
    font-family: Poppins;
}

.c1 img{
    width:20px;
    height:20px;
    padding-top:10px;
    padding-left: 7px;
}

.c2 img{
    height:20px;
    padding-top: 10px;
}

.c3 img{
    height:20px;
    padding-top: 10px;
    padding-right: 10px;
    float: right;
}
.main .cont{
    width:95%;
    border-radius: 15px;
    border:1px solid #03c6c1;
    height:450px;
    margin-top: 25px;
    margin-left: 25px;
    overflow-y: auto;
    scrollbar-width: thin; 
    scrollbar-color: #03c6c1 #ffffff;
}
</style>