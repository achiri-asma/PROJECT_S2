<template>
  <header class="header">
    <img src="../assets/logoo.png" alt="logo" id="logo"/>
    <nav>
      <RouterLink to="/" class="li">Home</RouterLink>
      <RouterLink to="/about-us" class="li">About Us</RouterLink>
      <RouterLink to="/features" class="li">Features</RouterLink>
      <RouterLink to="/faqs" class="li">FAQs</RouterLink>
      <RouterLink to="/contact" class="li">Contact</RouterLink>
    </nav>
    <div class="button-containerr">
      <button id="btt1" @click="login1" type="submit">A Doctor?</button>
      <button id="btt2" @click="login2" type="submit">Log In</button>
    </div>
  </header>
</template>

<script>
import router from '@/router';
export default {
  name: 'HeaderPage',
  methods: {
    login1() {
      router.push({ name: 'LoginPage2' ,params:{}});
    },
    login2() {
      router.push({ name: 'LoginPage1' ,params:{}});
    }
  }
};
</script>

<style scoped>
/* Styles pour le header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 999;
  margin-left: 70px;
 
}

/* Styles pour le logo */
#logo {
  width: 261px;
  height: 83px;
  margin-top: 16px;
}

/* Styles pour la navigation */
nav {
  display: flex;
  gap: 60px;
  margin-left: 150px;
  margin-right: 70px;
}

/* Styles pour les liens de navigation */
.li {
  color: gray;
  font-size: 18px;
  text-decoration: none;
  font-family: Poppins;
  margin-top: 10px;
}

/* Styles pour les liens de navigation au survol */
.li:hover {
  font-weight: 700;
  color: black;
}

/* Styles pour le conteneur des boutons */
.button-containerr {
  display: flex;

}

/* Styles pour les boutons */
.button-containerr button {
  margin-left: 20px;
  width: 160px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid white;
  font-size: 18px;
  color: white;
  margin-top: 10px;
}

/* Styles pour le bouton "A Doctor?" */
#btt1 {
  background-color: #03C6C1;
}

/* Styles pour le bouton "Log In" */
#btt2 {
  background-color: #03C6C1;
}
</style>
