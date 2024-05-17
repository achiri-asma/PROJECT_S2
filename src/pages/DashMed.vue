<template>
    <div class="dashmed">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li @click="handleProfile" :class="{'current' : cliked1}">Profile</li>
                <li @click="handleHistory" :class="{'current' : cliked2}">Appointement</li>
                <li @click="handleRating" :class="{'current' : cliked3}">Medfiles</li>
            </ul>
        </aside>
        <ProfileMed v-show="cliked1" :medecinId="medecinId"/>
        <AppointementPage v-show="cliked2" :medecinId="medecinId"/>
        <MedfilePage v-show="cliked3" :medecinId="medecinId"/>
    </div>
</template>

<script>
import ProfileMed from './ProfileMed'
import AppointementPage from './AppointementPage.vue'
import MedfilePage from './MedfilePage.vue'
export default {
    data() {
        return {
            cliked1 : true,
            cliked2 : false,
            cliked3 : false,
            medecinId : null
        }
    },
    created() {
        this.medecinId = this.$route.params.medecinId
    },
    components : { ProfileMed ,AppointementPage,MedfilePage},
    methods : {
        handleProfile() {
            this.cliked1 = true,
            this.cliked2 = false,
            this.cliked3 = false
        },
        handleHistory() {
            this.cliked1 = false,
            this.cliked2 = true,
            this.cliked3 = false
        },
        handleRating() {
            this.cliked1 = false,
            this.cliked2 = false,
            this.cliked3 = true
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        font-family: Poppins;
    }
    .dashmed, .dashuser{
        display: flex;
    }
    .dashmed aside, .dashuser aside{
        width:390px;
        height: 100vh;
        background-color: #03c6c1;
        position: sticky;
        top: 0;
    }
    .dashmed img[alt="logo"], .dashuser img[alt="logo"]{
        width: 185px;
        height: 55px;
        margin-top: 20px;
        margin-left: 50px;
    }
    .dashmed aside li, .dashuser aside li{
        list-style: none;
        height: 50px;
        color: white;
        font-size: 17px;
        letter-spacing: 0.08em;
        box-sizing: border-box;
        padding-left: 65px;
        padding-top: 012px;
        margin-top: 10px;
        margin-left: 45px;
        margin-bottom: 10px;
    }
    .dashmed aside li:first-child, .dashuser aside li:first-child{
        background: url(../assets/user1.png) no-repeat;
        background-size:9%;
        background-position: 15px center;
    }
    .dashmed aside li:first-child + li{
        background: url(../assets/health-insurance-3.png) no-repeat;
        background-size: 9%;
        background-position: 15px center;
    }
    .dashmed aside li:last-child{
        background: url(../assets/folder.png) no-repeat;
        background-size: 9%;
        background-position: 15px center;
    }
    .dashmed aside li.current{
        background-color: rgba(255, 255, 255, 0.8) !important;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        color: #03c6c1;
    }
    .dashmed aside li.current:first-child{
        background-image: url(../assets/user2.png);
    }
    .dashmed aside li:first-child + li.current{
        background-image: url(../assets/health-insurance-2.png);
    }
    .dashmed aside li.current:last-child{
        background-image: url(../assets/file-folder.png);
    }
</style>