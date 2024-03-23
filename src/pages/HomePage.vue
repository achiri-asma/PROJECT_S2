<template>
    <HeaderPage />
    <AppoinTement />
    <div class="second-section">
        <img src="../assets/doctors.png" id="doctors" />
        <div class="right">
            <h3 id="titrre">Streamline Your <br /><span> Appointments Booking <br /> </span> Process With Our <br />
                <span>Convenient System </span>
            </h3>
            <p id="souss-titre">Our comprehensive platform makes it easy to book medical appointments <br /> with
                doctors. Search, schedule and rate your experience all in one place.</p>
            <div class="card">
                <img src="../assets/easy.png" alt="Image 1">
                <div class="card-content">
                    <h4> Process Convenience </h4>
                    <p>Search for doctors <br />based on Specialties, locations, and easily schedule appointments
                        online.</p>
                </div>
            </div>

            <div class="card">
                <img src="../assets/pattern.png" alt="Image 2">
                <div class="card-content">
                    <h4>Seamless Experience</h4>
                    <p>Our user-friendly <br /> interface guides you <br />through the booking <br /> process and
                        accounts management. </p>
                </div>
            </div>

            <div class="card">
                <img src="../assets/filterr.png" alt="Image 3">
                <div class="card-content">
                    <h4>Expertise & Location Filter</h4>
                    <p>Easily narrow down their <br /> search results by <br /> specifying the desired <br /> doctor's
                        expertise level <br /> and preferred location.</p>
                </div>
            </div>

        </div>
    </div>

    <div class="third-section">
        <div class="left">
            <h3 id="titree">Ensuring Trust: <br /><span>Our Rigorous Doctors </span> <br /> Registration </h3>
            <p id="sousss-titre">At our platform, We prioritize the authenticity and the quality Of our medical
                professionals. To ensure trust, we have implemented a rigorous registration and approval process for
                doctors.</p>
        </div>

        <div class="rightt">
            <div class="conteneur">
                <img src="../assets/Group 6.png" alt="Image 1">
                <p>Throughout the verification of doctor’s credentials</p>
            </div>
            <div class="conteneur">
                <img src="../assets/Group 7.png" alt="Image 2">
                <p>Quality assurance of Medical Services provided</p>
            </div>
        </div>
    </div>

    <div class="leftt">
        <p id="sous"> Are You a Doctor Ready to Join Our Medical Network? </p>
        <button @click="register" type="submit">Register Now</button>
    </div>

    <div class="fourth-section">
        <img src="../assets/Group 9.png" alt="image 4">
        <h3 id="titreee"><span>Never Miss </span> <br />An Appointment With Our <br />Confidence Appointment <br />
            <span>Reminders </span>And <span>Rating </span>
        </h3>
        <p id="souss-titree">Our platform sent appointments reminders to ensure you stay <br /> organized and punctual.
            After your appointment, you can rate your <br /> experience with the doctor.</p>
    </div>
    <div class="fifth-section">
        <img src="../assets/patients.png" id="patients" />

        <div class="right1">
            <h3 id="titrre1"><span>Save Time</span> And <span> Easily Access</span> <br /> Quality Healthcare
            </h3>
            <p id="souss-titre">Our platform provided provides a confidence and efficient way for <br /> patients to
                book medical appointments with doctors. With just few <br /> clicks, users can find doctors based on
                their Specialties and location, schedule appointment, and receive reminders.</p>
            <div class="carde">
                <img src="../assets/save-time 1.png" alt="Image 1">

                <p>Save time by easily <br /> searching for doctors online</p>

            </div>

            <div class="carde">
                <img src="../assets/chat 1.png" alt="Image 2">
                <p>Enhance communication <br />and streamlined <br />appointments booking </p>

            </div>
            <div class="button-container1">
                <button id="bt11" type="submit">learn more</button>
                <button id="bt22" @click="registerr" type="submit">sign up</button>
            </div>

        </div>

    </div>
    <div class="sixth-section">
        <h3 id="titrre2">Find <span> Right Doctor </span> <br /> For You Medical <br /> <span>Needs </span></h3>
        <img src="../assets/stethoscope.png" alt="image 5">
        <div class="right4">
            <img src="../assets/Rectangle 48.png" alt="IMAGE 6" id="im">
            <div class="group">
                <div class="carte1">
                    <div class="number">
                        <img src="../assets/un.png" alt="1" id="nombre">
                    </div>
                    <div class="contenu">
                        <h4>Create an account and sign in </h4>
                        <p>Register for an account to access all the features of our platforms. Sign in securely to
                            manage your appointments and medical profile.</p>
                    </div>
                </div>

                <div class="carte2">
                    <div class="number">
                        <img src="../assets/deux.png" alt="2" id="nombre">
                    </div>
                    <div class="contenu">
                        <h4>Search for doctors and schedule appointment </h4>
                        <p> Easily search for doctors by name, specialties, and location. Once you find the right
                            doctor, select a date and time that works for you to book your appointment.</p>
                    </div>
                </div>

                <div class="carte3">
                    <div class="number">
                        <img src="../assets/trois.png" alt="3" id="nombre">
                    </div>
                    <div class="contenu">
                        <h4>Expertise and Location Filter</h4> <br />
                        <p>Narrow down their search results by specifying the desired doctor's expertise years and
                            preferred location.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="seventh-section">
        <h3 id="titree4">Find Your <span> Perfect Doctor </span> Today</h3>
        <p id="sous-titre4">Experience hassle-free medical appointments booking with our user-friendly platform</p>
        <div class="button-container2">
                <button id="bt12" type="submit">learn more</button>
                <button id="bt21" @click="registerr" type="submit">sign up</button>
        </div>

    </div>
    <div class="contact" >
        <h3 id="titre-principale">Contact us</h3>
        <p id="sub-title">get in touch with our support team for any inquiries or assistance.</p>
        <div class="contain">
    <div class="box">
        <img src="../assets/mail.png" alt="Image 1">
        <div class="content">
            <h3>Email</h3>
            <p>We’re here to help you with all your <br/> healthcare needs.</p>
            <p id="underline">info@nom_website.com</p>
        </div>
    </div>
    <div class="box">
        <img src="../assets/phone-call.png" alt="Image 2">
        <div class="content">
            <h3>Phone</h3>
            <p>Begin a conversation with our support team <br/> now.</p>
            <p id="gras">+213 26 21 47 53 </p>
        </div>
    </div>
    <div class="box">
        <img src="../assets/location.png" alt="Image 3">
        <div class="content">
            <h3>Office</h3>
            <p>We’re just a message away from answering  <br/> your questions.</p>
            <p id="gras">BP 73, Bureau de poste EL WIAM  <br/> Sidi Bel Abbés 22016</p>
        </div>
    </div>
</div>

    </div>

<FooterPage/>
</template>
<script>
import router from '@/router';
import AppoinTement from '../components/AppoinTement.vue';
import HeaderPage from '../components/HeaderPage.vue';
import FooterPage from '../components/FooterPage.vue';
export default {
    name: 'HomePage',
    components: { AppoinTement, HeaderPage ,FooterPage},
    methods: {
        register() {
            router.push({ name: 'SignupDoctor', params: {} });
        },
        registerr() {
            router.push({ name: 'SignupPage', params: {} });
        }
    }

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

.left {
    margin-left: 85px;
    float: left;
}

.right1 {
    margin-left: 950px;
    float: right;
}

.right4 {
    margin-left: 580px;
    margin-top: -310px;
    float: right;
}


#titrre {
    font-family: Poppins;
    margin-top: 40px;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
}

#titrre1 {
    font-family: Poppins;
    margin-top: -515px;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
}

#titrre2 {
    font-family: Poppins;
    margin-top: 50px;
    margin-left: 85px;
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

.third-section {
    display: flex;
    height: 550px;
    width: 100%;
    margin-top: 50px;
    background-image: url("../assets/third section.png");
    background-repeat: no-repeat;
    background-size: cover;

}

span {
    color: #03C6C1;
}

#titree {
    color: white;
    font-family: Poppins;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    margin-top: 80px;
}


#sousss-titre {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    width: 610px;
    color: white;
    margin-top: 70px;
}

.rightt {
    margin-top: 260px;
    margin-left: 80px;
    float: right;
}

.conteneur img,
.conteneur p {
    display: inline;
    vertical-align: middle;
}

.conteneur p {
    font-size: 18px;
    padding-left: 10px;
    color: white;
}

.conteneur img {
    width: 50px;
    height: 50px;
}

.leftt {
    margin-top: -100px;
    margin-left: 590px;
    display: flex;
}

.leftt p {
    font-size: 20px;
    font-weight: 500;
    color: white;
}

.leftt button {
    width: 150px;
    height: 45px;
    margin-left: 50px;
    font-weight: 600;
    font-size: 15px;
    color: white;
    border-radius: 10px;
    border: 2px solid white;
    background-color: #03C6C1;
}

.fourth-section {
    margin-top: 80px;
}

.fourth-section img {
    display: flex;
    height: 100%;
    width: 90%;
    margin-left: 85px;

}

#titreee {
    font-family: Poppins;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    margin-top: -430px;
    margin-left: 120px;
}

#souss-titree {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    margin-top: 45px;
    margin-left: 120px;

}

.fifth-section {
    margin-top: 150px;
}

#patients {
    width: 670px;
    height: 500px;
    margin-left: 85px;
    margin-top: 50px;
}

.carde {
    display: inline-block;
    width: 30%;
    margin-top: 30px;
    margin-right: 120px;
    margin-left: -20px;
}

.carde img {
    width: 45px;
    height: 45px;
    margin-left: 80px;
}

.carde p {
    font-size: 16px;
    width: 100%;
    text-align: center;
    color: gray;
}

.button-container1 {
    display: flex;
    margin-top: 40px;
    margin-bottom: 55px;
}

.button-container1 button {
    margin-right: 25px;
    width: 135px;
    height: 51px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: white;
}

#bt11 {
    background-color: #bbbbbb;
}

#bt22 {
    background-color: #03C6C1;
}

#im {
    width: 950px;
    height: 220px;
    margin-top: -115px;
}

.right4 .group {
    display: flex;
    position: relative;
    margin-left:-20px;
}

.carte1,
.carte2,
.carte3 {
    margin-top: -170px;
    margin-left: 32px;
    display: inline-block;
    text-align: left;
}

.carte1 {
    width: 27%;
}

.carte2 {
    width: 35%;
}

.carte3 {
    width: 27%;

}

.carte2 .number {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: white;
    margin-left: 110px;
    border: 1px solid #bbbbbb;
    position: absolute;

}

.number {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: white;
    margin-left: 90px;
    border: 1px solid #bbbbbb;
    margin-top: 20px;
    position: absolute;
}

#nombre {
    width: 50px;
    padding-top: 15px;
    padding-left: 15px;
}

.carte1 .contenu,
.carte3 .contenu {

    background-color: white;
    padding: 20px;
    height: 230px;
    text-align: center;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    margin-top: 65px;
    z-index: 1;
}

.carte2 .contenu {
    z-index: 1;
    margin-top: 65px;
    background-color: white;
    padding: 20px;
    height: 230px;
    text-align: center;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
}

.contenu p {
    color: gray;
    padding-top: 20px;
}

.contenu h4 {
    font-weight: 400;
    padding-top: 25px;
}
.seventh-section {
    display: flex;
    height: 550px;
    width: 100%;
    margin-top: 50px;
    background-image: url("../assets/seventh.png");
    background-repeat: no-repeat;
    background-size: cover;

}

#titree4 {
    font-family: Poppins;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    margin-left: 85px;
    margin-top: 100px;
    color:white;
}
#sous-titre4 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    margin-top: 250px;
    width: 700px;
    float:left;
    margin-left:-465px;
    color:white;
}

.button-container2 {
    display: flex;
    margin-top: 410px;
    margin-left: -700px;
    margin-bottom: 55px;
}

.button-container2 button {
    margin-right: 25px;
    width: 135px;
    height: 51px;
    border-radius: 20px;
    font-size: 16px;
    color: white;
    border:1px solid white;
}

#bt12 {
    background-color: transparent;
}

#bt21 {
    background-color: #03C6C1;
}
#titre-principale{
    color:#03C6C1;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px
}
#sub-title{
    text-align: center;
    margin-top: 15px;
    font-size: 18px;
}
.contain {
    display: flex;
}

.box {
    width: 33.33%; 
    margin-top: 40px;
    margin-left: -10px;
    box-sizing: border-box;
    text-align: center;
}

.box img {
    max-width: 100%;
}
.box h3{
    padding-top: 30px;
    color:#03C6C1;
    font-size: 25px;
}
.box p{
    padding-top:30px;
}
#underline{
    text-decoration:underline;
    font-weight: 600;
}
#gras{
    font-weight: 600;
}

</style>
