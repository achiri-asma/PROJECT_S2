<template>
    <HeaderPage class="HeaderPage" :id="$route.params.userId"/>
    <AppoinTement class="AppoinTement"/>
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
                <p>Throughout the verification of doctor's credentials</p>
            </div>
            <div class="conteneur">
                <img src="../assets/Group 7.png" alt="Image 2">
                <p>Quality assurance of Medical Services provided</p>
            </div>
        </div>
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
    <div class="contact">
        <h3 id="titre-principale">Contact us</h3>
        <p id="sub-title">get in touch with our support team for any inquiries or assistance.</p>
        <div class="contain">
            <div class="box">
                <img src="../assets/mail.png" alt="Image 1">
                <div class="content">
                    <h3>Email</h3>
                    <p>We're here to help you with all your <br /> healthcare needs.</p>
                    <p id="underline">info@nom_website.com</p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/phone-call.png" alt="Image 2">
                <div class="content">
                    <h3>Phone</h3>
                    <p>Begin a conversation with our support team <br /> now.</p>
                    <p id="gras">+213 26 21 47 53 </p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/location.png" alt="Image 3">
                <div class="content">
                    <h3>Office</h3>
                    <p>We're just a message away from answering <br /> your questions.</p>
                    <p id="gras">BP 73, Bureau de poste EL WIAM <br /> Sidi Bel Abbés 22016</p>
                </div>
            </div>
        </div>
    </div>
    <FooterPage />
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import AppoinTement from '../components/AppoinTement.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
    name: 'LandingPage',
    components: { HeaderPage, AppoinTement, FooterPage },
    data() {
    return {
      isLandingPage: true, 
    }
  }
}
</script>

<style>
.HeaderPage .button-containerr, .AppoinTement #bt1, .AppoinTement #bt2 {
    display: none;
}

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