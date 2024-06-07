<template>
     <HeaderPage />
     <div class="background">
        <img src="../assets/Group 31.png" class="background-image">
        <div>
            <h3 id="titre">FAQs</h3>
            <p id="sous-titre1">
                Frequently asked question,
            </p>
            <p id="sous-titre1">
                Here is some common questions about about medisphere.  
            </p>

        </div>
    </div>
    
    <div class="prtt">
        
        <p style="padding-top: 35px;">How do I register as a user on the platform? <img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p>How do I register as a user on the platform? <img src="../assets/plus.png"  alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        <hr>
        <p> How do I register as a user on the platform?<img src="../assets/plus.png" alt="plus"></p>
        
    </div>
    <div class="background2">
        <img src="../assets/doctor-filling-up-life-insurance-form 2.png" class="background-image">
        <div>
            <h5 id="titre2">Still need <span>help?</span>send us a note! </h5>
            <p id="sous-titre1">
                For any quetsions, please write us here 
            </p>
        </div>
        <button @click="contact" id="cn">Contact</button>
    </div>
     <FooterPage />

</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import FooterPage from '../components/FooterPage.vue'
export default {
    name: 'FaqsPage',
    components: { HeaderPage, FooterPage },
    methods: {
    contact() {
      this.$router.push('/contact');
    }
  }
}

</script>
<style>
#titre2{
    font-family: Poppins;
    margin-left: 85px;
    margin-top: 240px;
    font-size: 30px;
}
#cn{
    width:200px;
    height: 50px;
    margin-top: 420px;
    margin-left: 100px;
    border:none;
    background-color: #03C6C1;
    font-size: 20px;
    color:white;
    border-radius: 10px;
}
.prtt{
    width:850px;
    height:570px;
    margin-top: -150px;
    background-color: white;
    border: #03C6C1 1px solid;
    border-radius: 15px;
    margin-left: 85px;
}
hr{
    color: #03C6C1;
    margin-left: 15px;
    margin-right: 35px;
   
}
.prtt p{
    margin-left: 15px;
    margin-top: 10px;
    color:gray;
    margin-right: 40px;
    padding-bottom: 10px;
}
.prtt p img{
    margin-left: 428px;
    width:15px;
    height:15px;
}
.background2{
    position: relative;
    display: flex;
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin-top: -150px;
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
</style>