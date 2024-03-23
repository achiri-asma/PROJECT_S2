<template>
    <footer>
      <div class="gauche">
        <img src="../assets/Rectangle 13.png" alt="logo" id="logooo">
        <h4>Address:</h4>
        <p>BP 73, Bureau de poste EL WIAM <br/> Sidi Bel Abbés 22016, Algérie</p>
        <h4 id="contact">Contact:</h4>
        <p>info@nom_website.com</p>
        <div class="social-media">
        <img src="../assets/facebook.png" alt="facebook">
        <img src="../assets/instagram.png" alt="instagram">
        <img src="../assets/twitter.png" alt="twitter">
        <img src="../assets/linkedin.png" alt="linkedin">
        </div>
        <p id="rights">2024 MediSphere, all rights reserved </p>
      </div>
      <div class="droite">
        <div class="links">
        <router-link to="" id="lin">features</router-link>
        <router-link to="" id="lin">about us</router-link>
        <router-link to="" id="lin">book now</router-link>
        <router-link to="" id="lin">find a doctor</router-link>
        <router-link to="" id="lin">contact us</router-link>
        <router-link to="" id="lin">FAQs</router-link>
      </div>
        <div class="bttm">
          <router-link to="" id="l"> privacy policy</router-link>
          <router-link to="" id="l"> term of service </router-link>
          <router-link to="" id="l"> cookies</router-link>
        </div>

      </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterPage',   
}
</script>
<style>

footer {
  margin-top: 80px;
  width: 100%;
  height: 450px;
  background-image: url("../assets/Rectangle\ 58.png");
}
.gauche{
  margin-left: 85px;
}
#logooo{
  width:250px;
  height:70px;
  margin-top: 40px;
  margin-left: -20px;
}
.gauche h4{
  font-size: 20px;
  color: #03C6C1;
}
.gauche p{
  font-size: 18px;
}
#contact{
  margin-top: 40px;

}
.social-media{
  margin-top: 30px;
  
}
.social-media img{
  margin-right: 25px;
}
#rights{
  margin-top: 35px;
  font-size: 16px;
  color:gray;
}
.droite{
  float:right;
  margin-right: 100px;
  margin-top: -310px;

}
#lin{
  display: block;
  font-size: 18px;
  text-decoration: none;
  color:black;
  padding-bottom: 10px;
}
.bttm{
  margin-top: 55px;
}
#l{
  color:gray;
  font-size: 16px;
text-decoration: none;
padding-right: 30px;
}
.links{
  margin-left:250px;
}
</style>


