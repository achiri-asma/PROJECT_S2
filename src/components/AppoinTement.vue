<template>
    <div class="background"> 
        <img src="../assets/background03.png" class="background-image">
        <div>
        <h3 id="titre">Schedule Your <span>Appointment</span></h3>
        <div class="search-container">
            <input type="text" placeholder="Name, speciality, office" id="input1" class="with-icon1">
            <input type="text" placeholder="Where?" id="input2" class="with-icon2">
            <input type="text" placeholder="Experience" id="input3" class="with-icon3">
            <button type="submit">search <img src="../assets/next-g.png" id="next"/></button>
        </div>

        <p id="sous-titre">Our Online Appointment Booking System For Doctors Allows You To Easily <br/>Find And Schedule Appointment With Trusted Doctors In Your Area. Sign up  <br/>Now To Experience Convenient And Hassle-Free Healthcare.</p>

        <div class="button-container">
            <button id="bt1" type="submit">learn more</button>
            <button id="bt2" @click="signup" type="submit">sign up</button>
        </div>
    </div>
</div>
</template>

<script>
import router from '@/router';

export default {
    name: 'AppoinTement', 
    methods: {
    signup() {

        router.push({ name: 'SignupPage' ,params:{}});
    },
  },
}
</script>

<style>
.background {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Pour cacher tout dépassement d'image */

}

.background-image {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}


#titre {
    font-family: Poppins;
    margin-left: 85px;
    margin-top: 240px;
    font-weight: 600;
    font-size: 40px;
}

.search-container {
    display: flex;
    align-items: center;
    margin-left: 85px;
    margin-top: 10px;
}

.with-icon1, .with-icon2, .with-icon3 {
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 60px;
    border: 2px solid rgb(224, 222, 222);
    font-size: 18px;
    font-weight: 400;
    color: rgb(114, 112, 112);
}

.with-icon1 {
    background-image: url('../assets/search.png');
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    width: 280px;
    height: 65px;
    background-size: 25px 25px;
}

.with-icon2, .with-icon3 {
    background-image: url('../assets/position.png'); /* Modifier les images ici */
    border-left: none;
    width: 180px;
    height: 65px;
    background-size: 25px 25px;
}

.with-icon3 {
    background-image: url('../assets/filter.png'); /* Modifier les images ici */
    border-right: none;
    background-size: 25px 25px;
}

.search-container button {
    background-color: #03C6C1;
    border: 2px solid white;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    cursor: pointer;
    height: 70px;
    width: 150px;
    color: white;
    font-size: 20px;
    padding-left: -15px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 8px;

}

#sous-titre {
    font-family: Poppins;
    margin-left: 85px;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    margin-top: 75px;
}

.button-container {
    display: flex;
    margin-left: 85px;
    margin-top: 40px;
    margin-bottom: 55px;
}

.button-container button {
    margin-right: 25px;
    width: 179px;
    height: 61px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    color: white;
}

#bt1 {
    background-color: #bbbbbb;
}

#bt2 {
    background-color: #03C6C1;
}

</style>
