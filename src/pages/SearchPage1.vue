<template>
    <HeaderPage2 :id="$route.params.userId" />


    <div class="bar">
        <p>Sort by <img src="../assets/next-g.png" id="dir" alt="signe"></p>
        <button type="submit" id="m--btn" class="m-btn">Distance</button>
        <button type="submit" class="m-btn"> Experience</button>
        <button type="submit" class="m-btn">Rating</button>
        <button type="submit" class="m-btn">Gender</button>
    </div>
    <div class="displayer">
        <img src="../assets/doctors/image1.png" alt="doctor" id="doc">
        <div class="doc-info" @click="isLandingPage ? nextt() : next()">
            <p>Dentist</p>
            <p id="petit"><img src="../assets/rating (2) 2.png" alt="rating" style="vertical-align: middle;"> (02)</p>
            <p>6 Years Experience </p>
            <p>Sidi bel abbes , sidi bel abbes, wiam BP 73 </p>
        </div>
        <div class="doc-cont">
            <button type="submit" id="bt1" v-if="!isLandingPage" @click="next1"><img src="../assets/calendar (1) 1.png"
                    alt="" id="next"> Book
                appointement</button>
            <button type="submit" id="bt1" v-if="isLandingPage" @click="next2"><img src="../assets/calendar (1) 1.png"
                    alt="" id="next"> Book
                appointement</button>
            <button type="submit" id="bt2"><img src="../assets/calendar 4.png" alt="" id="next">(213)
                0745612333</button>
        </div>
    </div>
</template>
<script>
import router from '@/router'
import HeaderPage2 from '../components/HeaderPage2.vue';

export default {
    name: 'SearchPage1',
    components: { HeaderPage2 },
    data() {
        return {
            isLandingPage: false,
        }
    },
    mounted() {
       
        if (this.$route.name === 'LandingPage') {
            this.isLandingPage = true;
        }
        if (this.$route.name === 'SearchPage1' && this.$route.params.userId) {
            this.isLandingPage = true;
        }

    },
    methods: {
        next() {
            const input3 = this.$route.params.input1;
            const input4 = this.$route.params.input2;
            router.push({ name: 'DoctorPage1', params: { input3, input4 } });
        },
        nextt() {
            const input3 = this.$route.params.input1;
            const input4 = this.$route.params.input2;
            const userId = this.$route.params.userId;
            router.push({ name: 'DoctorPage', params: { userId, input3, input4 } });
        },
        next1() {
            router.push({ name: 'LoginPage1', params: {} });
        },
        next2() {
            router.push({ name: 'LoginPage2', params: {} });
        },
    },
}
</script>
<style>
.bar {
    margin-top: 20px;
    width: 100%;
    height: 60px;
    background-color: #03C6C1;
    display: flex;
    align-items: center;
    gap: 5px;
}

.bar p {
    margin-left: 130px;
    font-size: 20px;
    font-weight: 500;
    color: white;
}

.bar #dir {
    width: 19px;
    height: 19px;
    vertical-align: middle;
}

#m--btn {
    margin-left: 380px;
}

.m-btn {
    width: 180px;
    height: 45px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #03C6C1;
    color: rgb(114, 112, 112);
    font-size: 17px;
}

.displayer {
    margin-left: 130px;
    margin-top: 45px;
    width: 1210px;
    height: 180px;
    border-radius: 20px;
    box-shadow: 0 0 7px gray;
}

#doc {
    border: 4px solid #03C6C1;
    border-radius: 80px;
    margin-top: 20px;
    margin-left: 25px;
    width: 120px;
    height: 120px;
}

.doc-info {
    margin-right: 700px;
    margin-top: 18px;
    float: right;
}

.doc-info h4 {
    font-size: 18px;
    font-weight: 400;
    color: black;
}

.doc-info p {
    color: rgb(114, 112, 112);
    font-size: 16px;

}

#petit {
    color: rgb(114, 112, 112);
    font-size: 10px;
    padding-top: -10px;
}

#petit img {
    width: 80px;
    height: 25px;
}

.doc-cont {
    float: right;
    margin-top: -120px;
    margin-right: 40px;
}

.doc-cont button {
    width: 300px;
    height: 50px;
    border-radius: 40px;
}

#bt1 {
    border: 2px solid white;
    background-color: #03C6C1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 16px;
}

#bt2 {
    border: 2px solid #03C6C1;
    background-color: white;
    color: #03C6C1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
}
</style>
