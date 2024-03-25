<template> 
    <router-link :to="{ name: 'DashUser', params: { id: $route.params.userId } }"><HeaderPage /></router-link>
    <AppoinTement />
    <div class="second-section">
        <img src="../assets/doctors.png" id="doctors"/>
        <div class="right">
        <h3 id="titrre">Streamline Your <br/><span> Appointments Booking <br/> </span> Process With Our <br/> <span>Convenient System </span></h3>
        <p id="souss-titre">Our comprehensive platform makes it easy to book medical appointments  <br/> with doctors. Search, schedule  and rate your experience all in one place.</p>
        <div class="card">
        <img src="../assets/easy.png" alt="Image 1">
        <div class="card-content">
            <h4> Process Convenience </h4>
            <p>Search for doctors  <br/>based on Specialties, locations, and easily schedule appointments online.</p>
        </div>
    </div>
    
    <div class="card">
        <img src="../assets/pattern.png" alt="Image 2">
        <div class="card-content">
            <h4>Seamless Experience</h4>
            <p>Our user-friendly <br/> interface guides you  <br/>through the booking <br/> process and accounts management. </p>
        </div>
    </div>
    
    <div class="card">
        <img src="../assets/filterr.png" alt="Image 3">
        <div class="card-content">
            <h4>Expertise & Location Filter</h4>
            <p>Easily narrow down their <br/> search results by <br/> specifying the desired <br/> doctor's expertise level  <br/> and preferred location.</p>
        </div>
    </div>
    
       </div>
    </div>
    
    </template>
    <script>
    import AppoinTement from '../components/AppoinTement.vue';
    import HeaderPage from '../components/HeaderPage.vue';
    
    export default {
        name: 'LandingPage',
        components:{AppoinTement,HeaderPage},
    }
    </script>
    <style>
        .second-section {
            display: flex;
        }
    
        #doctors {
            width: 550px;
            height: 550px;
            margin-left: 85px;
            margin-top: 50px;
        }
    
        .right {
            margin-left: 50px;
            float: right;
        }
    
        #titrre {
            font-family: Poppins;
            margin-top: 40px;
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
        }
    
        #souss-titre {
            font-family: Poppins;
            font-size: 18px;
            font-weight: 400;
            margin-top: 40px;
            width: 700px;
        }
    
        .card {
            display: inline-block;
            width: 30%;
            margin-top: 30px;
            margin-right: 20px;
            text-align: left;
        }
    
        .card h4 {
            font-size: 17px;
            margin-bottom: 15px;
        }
    
        .card p {
            font-size: 17px;
            color: gray;
        }
    
        .card img {
            width: 45px;
            height: 45px;
            margin-left: 70px;
            margin-bottom: 10px;
        }
    
        
    </style>
    