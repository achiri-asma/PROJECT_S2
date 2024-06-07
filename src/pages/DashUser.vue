<template>
    <div class="dashuser">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li @click="handleProfile" :class="{'current' : cliked1}">Profile</li>
                <li @click="handleHistory" :class="{'current' : cliked2}">Appointement</li>
            </ul>
        </aside>
        <ProfileUser v-show="cliked1" :userId="userId"/>
        <AppointementPage1 v-show="cliked2" :userId="userId"/>
    </div>
</template>

<script>
import ProfileUser from './ProfileUser'
import AppointementPage1 from './AppointementPage1.vue'
export default {
    components : { ProfileUser,AppointementPage1 },
    data() {
        return {
            userId: null,
            cliked1 : true,
            cliked2:false
        }
    },
    created() {
        this.userId = this.$route.params.userId
    },
    methods : {
        handleProfile() {
            this.cliked1 = true,
            this.cliked2 = false}
            ,
            handleHistory() {
            this.cliked1 = false,
            this.cliked2 = true}
        }
}
</script>
<style>
.dashuser aside li:nth-child(1) {
    background: url(../assets/user1.png) no-repeat;
    background-size: 9%;
    background-position: 15px center;
}
.dashuser aside li:nth-child(2) {
    background: url(../assets/health-insurance-3.png) no-repeat;
    background-size: 9%;
    background-position: 15px center;
}


.dashuser aside li.current {
    background-color: rgba(255, 255, 255, 0.8) !important;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    color: #03c6c1;
}

.dashuser aside li:nth-child(1).current {
    background-image: url(../assets/user2.png);
}
.dashuser aside li:nth-child(2).current {
    background-image: url(../assets/health-insurance-2.png);
}



</style>