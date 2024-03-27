<template>
    <div class="dashmed">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li @click="handleProfile" :class="{'current' : cliked1}">Profile</li>
                <li @click="handleHistory" :class="{'current' : cliked2}">History</li>
                <li @click="handleRating" :class="{'current' : cliked3}">Rating</li>
            </ul>
        </aside>
        <ProfileMed v-show="cliked1" :medecinId="medecinId"/>
    </div>
</template>

<script>
import ProfileMed from './ProfileMed'

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
    components : { ProfileMed },
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
        width: 260px;
        height: 100vh;
        background-color: #03c6c1;
        position: sticky;
        top: 0;
    }
    .dashmed img[alt="logo"], .dashuser img[alt="logo"]{
        width: 150px;
        height: 60px;
        margin: 30px 30px 30px 80px;
    }
    .dashmed aside li, .dashuser aside li{
        list-style: none;
        height: 50px;
        color: white;
        font-size: 18px;
        letter-spacing: 0.08em;
        box-sizing: border-box;
        padding-left: 80px;
        padding-top: 10px;
        margin-left: 70px;
        margin-bottom: 10px;
    }
    .dashmed aside li:first-child, .dashuser aside li:first-child{
        background: url(../assets/user1.png) no-repeat;
        background-size: 15%;
        background-position: 40px center;
    }
    .dashmed aside li:first-child + li{
        background: url(../assets/backintime.png) no-repeat;
        background-size: 15%;
        background-position: 40px center;
    }
    .dashmed aside li:last-child{
        background: url(../assets/rating.png) no-repeat;
        background-size: 14%;
        background-position: 40px center;
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
        background-image: url(../assets/backintime2.png);
    }
    .dashmed aside li.current:last-child{
        background-image: url(../assets/rating2.png);
    }
</style>