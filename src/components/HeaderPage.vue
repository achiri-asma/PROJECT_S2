<template>
  <header class="header">
    <img src="../assets/logoo.png" alt="logo" id="logo" />
    <nav>
      <RouterLink to="/" class="li">Home</RouterLink>
      <RouterLink to="/about-us" class="li">About Us</RouterLink>
      <RouterLink to="/features" class="li">Features</RouterLink>
      <RouterLink to="/faqs" class="li">FAQs</RouterLink>
      <RouterLink to="/contact" class="li">Contact</RouterLink>
    </nav>
    <div class="button-containerr">
      <button id="btt1" @click="login1" type="submit">A Doctor?</button>
      <button id="btt1" @click="login2" type="submit">Log In</button>
    </div>
    <router-link v-if="isLandingPage" :to="{ name: 'DashUser', params: { userId: id } }"> 
      <img src="../assets/image3.png" alt="profil" id="profile">
    </router-link>
  </header>
</template>

<script>
import router from '@/router'

export default {
  name: 'HeaderPage',
  data() {
    return {
      isLandingPage: false, 
    }
  },
  mounted() {
    if (this.$route.name === 'LandingPage') {
      this.isLandingPage = true;
    }
  },
  props : [ 'id' ],
  methods: {
    login1() {
      router.push({ name: 'LoginPage2', params: {} })
    },
    login2() {
      router.push({ name: 'LoginPage1', params: {} })
    }
  }
}
</script>

<style scoped>
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

#logo {
  width: 261px;
  height: 83px;
  margin-top: 16px;
}

nav {
  display: flex;
  gap: 60px;
  margin-left: 150px;
  margin-right: 70px;
}

.li {
  color: gray;
  font-size: 18px;
  text-decoration: none;
  font-family: Poppins;
  margin-top: 10px;
}

.li:hover {
  font-weight: 700;
  color: black;
}

.button-containerr {
  display: flex;
}

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

#btt1 {
  background-color: #03C6C1;
}

#profile {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 220px;
}
</style>
