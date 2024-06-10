<template>
  <div class="dashmed">
    <aside>
      <img src="../assets/logo.png" alt="logo">
      <ul>
        <li @click="handleProfile" :class="{ 'current': cliked1 }">Profile</li>
        <li @click="handleHistory" :class="{ 'current': cliked2 }">Appointment</li>
        <li @click="handleRating" :class="{ 'current': cliked3 }">Medfiles</li>
        <li @click="handleAppointement" :class="{ 'current': cliked4 }">Schedule</li>
      </ul>
    </aside>
    <ProfileMed v-show="cliked1" :medecinId="medecinId" />
    <AppointementPage v-show="cliked2" :medecinId="medecinId" @backendData="handleBackendData" />
    <MedfilePage v-show="cliked3" :medecinId="medecinId" />
    <SchedUle v-show="cliked4" :medecinId="medecinId" />
  </div>
</template>

<script>
import ProfileMed from './ProfileMed';
import AppointementPage from './AppointementPage.vue';
import MedfilePage from './MedfilePage.vue';
import SchedUle from './SchedUle.vue';
import axios from 'axios';

export default {
  data() {
    return {
      cliked1: true,
      cliked2: false,
      cliked3: false,
      cliked4: false,
      medecinId: null,
      intervalId: null,
    };
  },
  created() {
    this.medecinId = this.$route.params.medecinId;

    // Axios interceptor setup
    axios.interceptors.response.use(
      response => {
        if (response.config.url.includes(`/api/medecin/${this.medecinId}/rendezvous`) && response.data.length > 0) {
          console.log('Backend response:', response.data);
          this.showNotification('The next appointement starts at ');
        }
        return response;
      },
      error => {
        console.error('Error response:', error.response);
        console.error('Error message:', error.message);
        return Promise.reject(error);
      }
    );
  },
  mounted() {
    this.loadDataFromBackend();
    this.setupIntervalForDataRefresh();
  },
  components: { ProfileMed, AppointementPage, MedfilePage, SchedUle },
  methods: {
    handleProfile() {
      this.cliked1 = true;
      this.cliked2 = false;
      this.cliked3 = false;
      this.cliked4 = false;
    },
    handleHistory() {
      this.cliked1 = false;
      this.cliked2 = true;
      this.cliked3 = false;
      this.cliked4 = false;
    },
    handleRating() {
      this.cliked1 = false;
      this.cliked2 = false;
      this.cliked3 = true;
      this.cliked4 = false;
    },
    handleAppointement() {
      this.cliked1 = false;
      this.cliked2 = false;
      this.cliked3 = false;
      this.cliked4 = true;
    },
    loadDataFromBackend() {
      if (!this.medecinId) {
        console.error('medecinId is not defined');
        return;
      }

      axios.get(`http://localhost:8085/api/medecin/${this.medecinId}/rendezvous`)
        .then(response => {
          if (response.data.length > 0) {
            console.log(response.data);
            const nextAppointment = new Date(response.data[0].rdv.startTime);
            nextAppointment.setHours(nextAppointment.getHours() - 1);
            const formattedTime = nextAppointment.toLocaleTimeString();

          this.showNotification(`The next appointment starts at ${formattedTime}`);
          }
        })
        .catch(error => {
          console.error(error);
          this.retryLoadDataFromBackend();
        });
    },
    retryLoadDataFromBackend() {
      setTimeout(() => {
        this.loadDataFromBackend();
      }, 60000); // Retry every minute
    },
    showNotification(message) {
  console.log('Showing notification:', message); // Log to verify method call

  // Create notification container
  const notification = document.createElement('div');
  notification.classList.add('toast-notification');

  // Create and add text to the notification
  const text = document.createElement('span');
  text.textContent = message;

  // Append text to the notification
  notification.appendChild(text);

  // Append notification to the body
  document.body.appendChild(notification);

  // Handle click event on the notification
  notification.addEventListener('click', () => {
    // Navigate to a specific section of the application
    this.handleRating();
   
 
  });

  // Remove notification after 1 minute
  setTimeout(() => {
    notification.remove();
  }, 300000); // Remove after 1 minute (60000 ms)
},

    setupIntervalForDataRefresh() {
      this.intervalId = setInterval(() => {
        this.loadDataFromBackend();
      }, 60000); // Refresh data every minute
    },
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.dashmed,.dashuser {
  display: flex;
}

.dashmed aside,.dashuser aside {
  width: 390px;
  height: 100vh;
  background-color: #03c6c1;
  position: sticky;
  top: 0;
}

.dashmed img[alt="logo"],dashuser img[alt="logo"] {
  width: 185px;
  height: 55px;
  margin-top: 20px;
  margin-left: 50px;
}

.dashmed aside ul,.dashuser aside ul {
  padding-left: 0;
}

.dashmed aside li,.dashuser aside li {
  list-style: none;
  height: 50px;
  color: white;
  font-size: 17px;
  letter-spacing: 0.08em;
  box-sizing: border-box;
  padding-left: 65px;
  padding-top: 12px;
  margin-top: 10px;
  margin-left: 45px;
  margin-bottom: 10px;
}

.dashmed aside li:nth-child(1) {
  background: url(../assets/user1.png) no-repeat;
  background-size: 9%;
  background-position: 15px center;
}

.dashmed aside li:nth-child(2) {
  background: url(../assets/health-insurance-3.png) no-repeat;
  background-size: 9%;
  background-position: 15px center;
}

.dashmed aside li:nth-child(3) {
  background: url(../assets/folder.png) no-repeat;
  background-size: 9%;
  background-position: 15px center;
}

.dashmed aside li:nth-child(4) {
  background: url(../assets/calendar6.png) no-repeat;
  background-size: 9%;
  background-position: 15px center;
}

.dashmed aside li.current {
  background-color: rgba(255, 255, 255, 0.8) !important;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: #03c6c1;
}

.dashmed aside li:nth-child(1).current {
  background-image: url(../assets/user2.png);
}

.dashmed aside li:nth-child(2).current {
  background-image: url(../assets/health-insurance-2.png);
}

.dashmed aside li:nth-child(3).current {
  background-image: url(../assets/file-folder.png);
}

.dashmed aside li:nth-child(4).current {
  background-image: url(../assets/calendar2.png);
}

.toast-notification {
  position: fixed;
  bottom: 20px;
  right: -15px;
  bottom:80%;
  background-color: #03c6c1;
  color: white;
  padding: 15px 20px;
  border-radius: 20px;
  z-index: 999;
  width: 420px;
  height:30px;
  font-weight: 800;
  
  animation: slideInFromRight 0.5s ease forwards;
}
.toast-notification span{
  color:white;
  margin-right: 15px;
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
