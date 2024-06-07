<template>
    <HeaderPage />
    <div class="background">
        <img src="../assets/Group 20.png" class="background-image">
        <div>
            <h3 id="titre">Contact Us</h3>
            <p id="sous-titre1">
                Kindly reach us to get necessary information u want
            </p>

        </div>
    </div>
    <div class="deuxx">
        <div class="trois-gauche">
            <div class="emaill">
                <div class="cercle"><img src="../assets/Group 23.png" alt="mail"></div>
                <h3 class="tt">Email</h3>
                <p class="para">We’re here to help you with all <br> your healthcare needs.</p>
                <p class="paraa">medi.sphere.dz@gmail.com</p>
            </div>
            <div class="phonee">
                <div class="cercle"><img src="../assets/Group 24.png" alt="phone"></div>
                <h3 class="tt">Phone</h3>
                <p class="para">Begin a conversation with our <br> support team now.</p>
                <p class="paraa">+213 26 21 47 53 </p>
            </div>
            <div class="officee">
                <div class="cercle"><img src="../assets/Group 25.png" alt="office"></div>
                <h3 class="tt">Office</h3>
                <p class="para">We’re just a message away from answering your questions.</p>
                <p class="paraa">BP 73, Bureau de poste EL WIAM Sidi Bel Abbés 22016</p>
            </div>
        </div>
        <div class="un-droite">
            <h2>Send Message</h2>
            <div class="input-group">
                <label for="nom"><img src="../assets/user.png" alt="profil" id="ic"></label>
                <input ref="nomInput" type="text" name="nom" placeholder="Full name" id="i133" />
                <label for="tel"><img src="../assets/telephone.png" alt="telephone" id="ic"></label>
                <input ref="telInput" type="tel" placeholder="Phone Number" name="tel" id="i133" />
            </div>
            <div class="input-group">
                <label for="email"><img src="../assets/email.png" alt="email" id="ic"></label>
                <input ref="emailInput" type="email" name="email" placeholder="Email" id="i133" />
                <label for="nb_soc"><img src="../assets/tag 1.png" alt="nb_soc" id="ic"></label>
                <input ref="nbInput" type="text" name="subject" placeholder="Subject" id="i133" />
            </div>
            <textarea name="message" id="message" cols="50" rows="10" placeholder="Message"></textarea>
            <button id="sendm">
                Send message
            </button>
        </div>
    </div>

    <FooterPage />
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import FooterPage from '../components/FooterPage.vue'
export default {
    name: 'ContactPage',
    components: { HeaderPage, FooterPage },
}
</script>
<style>
.background {
    position: relative;
    display: flex;
    width: 100%;
    height: 600px;
    overflow: hidden;
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

#sous-titre1 {
    font-family: Poppins;
    margin-left: 85px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 25px;
    color: gray;
}

.deuxx {
    margin-top: 45px;
}

.trois-gauche {
    float: left;
    margin-left: 100px;
    margin-top: -120px;


}

.trois-gauche .emaill {
    background-color: white;
    width: 390px;
    height: 200px;
    margin-bottom: 25px;
    border-radius: 10px;
    border: 1px solid #03C6C1;
    box-shadow: 0 0 5px 5px #a6f7f5;

}

.trois-gauche .phonee {
    background-color: white;
    width: 390px;
    height: 200px;
    margin-bottom: 25px;
    border-radius: 10px;
    border: 1px solid #03C6C1;
    box-shadow: 0 0 5px 5px #a6f7f5;

}

.trois-gauche .officee {
    background-color: white;
    width: 390px;
    height: 220px;
    margin-bottom: 35px;
    border-radius: 10px;
    border: 1px solid #03C6C1;
    box-shadow: 0 0 5px 5px #a6f7f5;

}

.cercle img {
    width: 80px;
    height: 80px;
    margin-top: 50px;
    margin-left: 20px;
    display: flex;
}

.tt {
    color: #03C6C1;
    font-size: 25px;
    margin-left: 80px;
    margin-top: -100px;
    text-align: center;
}

.para {
    margin-left: 110px;
    text-align: center;
    width: 250px;
}

.paraa {
    margin-left: 100px;
    text-align: center;
    margin-top: 15px;
    font-weight: 600;
    width: 250px;
}

.un-droite {
    float: right;
    width: 800px;
    height: 675px;
    background-color: white;
    border-radius: 10px;
    border: #03C6C1 solid 1px;
    margin-top: -122px;
    margin-right: 170px;
    box-shadow: 0 0 5px 5px #a6f7f5;

}

.un-droite h2 {
    margin-left: 35px;
    margin-top: 30px;
}
#i133{
  border: none;
  border-bottom: 0.5px solid rgb(99, 97, 97);
  background-color: transparent;
  width: 310px;
  margin-left: -20px;
  margin-top: -5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: rgb(99, 97, 97);
  padding-left: 30px;
  padding-top: 10px;


}
#ic {
  margin-top: 20px;
  width: 19px;
  height: 19px;
  margin-left: 35px;
}
.input-group{
    margin-bottom: 30px;
}
#message{
    border-radius: 10px;
    border: 1px solid gray;
    margin-left: 35px;
    padding-left: 15px;
    padding-top: 20px;
    margin-top: 30px;
    
} 
#sendm{
    float:right;
    margin-right: 30px;
    width: 250px;
    height: 50px;
    background-color: #03C6C1;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    margin-top: 30px;

}
</style>