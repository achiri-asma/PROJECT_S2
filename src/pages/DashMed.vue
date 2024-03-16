<template>
    <div class="dashmed">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li @click="handleProfile" :class="{'current' : cliked}">Profile</li>
                <li>History</li>
                <li>Rating</li>
            </ul>
        </aside>
        <ProfileMed />
    </div>
</template>

<script>
import ProfileMed from './ProfileMed'

export default {
    data() {
        return {
            cliked : false
        }
    },
    components : { ProfileMed },
    methods : {
        handleProfile() {
            this.cliked = true
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
    .dashmed{
        display: flex;
    }
    .dashmed aside{
        width: 260px;
        height: 100vh;
        background-color: #03c6c1;
        position: sticky;
        top: 0;
    }
    .dashmed img[alt="logo"]{
        width: 150px;
        height: 60px;
        margin: 30px 30px 30px 80px;
    }
    .dashmed aside li{
        list-style: none;
        height: 50px;
        color: white;
        font-size: 18px;
        letter-spacing: 0.08em;
        box-sizing: border-box;
        padding-left: 30px;
        margin-left: 130px;
    }
    .dashmed aside li:first-child + li{
        background: url(../assets/backintime.png) no-repeat;
        background-size: 15%;
    }
    .dashmed aside li:last-child{
        background: url(../assets/rating.png) no-repeat;
        background-size: 14%;
    }
    .dashmed aside li.current{
        background-color: rgb(3, 198, 180);
    }
</style>