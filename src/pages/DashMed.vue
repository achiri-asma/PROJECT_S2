<template>
    <div class="dashmed">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li @click="handleProfile" :class="{'current' : cliked1}">Profile</li>
                <li @click="handleHistory" :class="{'current' : cliked2}">Appointement</li>
                <li @click="handleRating" :class="{'current' : cliked3}">Medfiles</li>
                <li @click="handleAppointement" :class="{'current' : cliked4}">Schedule</li>
            </ul>
        </aside>
        <ProfileMed v-show="cliked1" :medecinId="medecinId"/>
        <AppointementPage v-show="cliked2" :medecinId="medecinId"/>
        <MedfilePage v-show="cliked3" :medecinId="medecinId"/>
        <SchedUle v-show="cliked4" :medecinId="medecinId"/>
    </div>
    <ToastNotification ref="toast" />
</template>

<script>
import ProfileMed from './ProfileMed'
import AppointementPage from './AppointementPage.vue'
import MedfilePage from './MedfilePage.vue'
import SchedUle from './SchedUle.vue'
import ToastNotification from './ToastNotification.vue';

export default {
    data() {
        return {
            cliked1 : true,
            cliked2 : false,
            cliked3 : false,
            cliked4:false,
            medecinId : null,
        }
    },
    created() {
        this.medecinId = this.$route.params.medecinId
    },
    mounted() {
        this.showErrorToast();
    },
    components : { ProfileMed ,AppointementPage,MedfilePage,SchedUle,ToastNotification},
    methods : {
        handleProfile() {
            this.cliked1 = true,
            this.cliked2 = false,
            this.cliked3 = false,
            this.cliked4=false
        },
        handleHistory() {
            this.cliked1 = false,
            this.cliked2 = true,
            this.cliked3 = false,
            this.cliked4=false
        },
        handleRating() {
            this.cliked1 = false,
            this.cliked2 = false,
            this.cliked3 = true,
            this.cliked4=false
        },
        handleAppointement(){
            this.cliked1 = false,
            this.cliked2 = false,
            this.cliked3 = false,
            this.cliked4=true
        },
      
    showErrorToast() {
      this.$refs.toast.showToast('Une erreur est survenue', 'error');
    }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    font-family: Poppins;
}

.dashmed, .dashuser {
    display: flex;
}

.dashmed aside, .dashuser aside {
    width: 390px;
    height: 100vh;
    background-color: #03c6c1;
    position: sticky;
    top: 0;
}

.dashmed img[alt="logo"], .dashuser img[alt="logo"] {
    width: 185px;
    height: 55px;
    margin-top: 20px;
    margin-left: 50px;
}

.dashmed aside li, .dashuser aside li {
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

</style>