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

       <router-link :to="{ name: 'DashUser', params: { id: $route.params.userId } }">  <img src="../assets/image3.png" alt="profil" id="profile"></router-link> 


    </header>
  </template>
  
  <script>
  //import router from '@/router';
  export default {
    name: 'HeaderPage',
  };
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
 
  #profile{
   width:50px;
   height:50px;
   border-radius: 50px;
   margin-left: 220px;
  }
  </style>
  