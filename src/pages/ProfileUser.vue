<template>
    <div class="profileuser">
        <div class="header">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
            <img src="../assets/image3.png">
        </div>
        <div class="main">
            <div class="personinfo">
                <h5>Personnel Information :</h5>
                <div class="infos">
                    <img src="../assets/image3.png">
                    <div>
                        <div class="fullname">
                            <p>Dr.Full name</p> 
                            <img src="../assets/editing.png" @click="EditProfil3">
                        </div>
                        <label>Email: </label><span>exemple@gmail.com</span><br>
                        <label>Sexe: </label><span>Female</span><br>
                        <label>Address: </label><span>Sidi bel abbes , sidi bel abbes, wiam BP 73</span><br>
                        <label>Social security number: </label><span>0987g4djxp3</span><br>
                        <label>Date of birth: </label><span>11-07-1995</span><br>
                        <label>Phone number: </label><span>0799567439</span>
                    </div>
                </div>
            </div>
            <div class="contact">
                <img src="../assets/logo3.png" alt="logo2"><br>
                <label>Address: </label>
                <p>BP 73, Bureau de poste EL WIAM <br> Sidi Bel Abbés 22016, Algérie</p>
                <label>Contact: </label><br><br>
                <span>info@nom_website.com</span><br><br>
                <img src="../assets/facebook.png" alt="facebook">&nbsp;&nbsp;
                <img src="../assets/instagram.png" alt="instagram">&nbsp;&nbsp;
                <img src="../assets/twitter.png" alt="twitter">&nbsp;&nbsp;
                <img src="../assets/linkedin.png" alt="linkedin">
            </div>
        </div>
        <EditProfil3 v-show="showEditProfil3" @edit-profile="EditProfil3"/>
    </div>
</template>

<script>
import EditProfil3 from './EditProfile3'

export default {
    data() {
        return {
            showEditProfil3 : false
        }
    },
    components : { EditProfil3 },
    methods : {
        EditProfil3() {
            this.showEditProfil3 = !this.showEditProfil3
        }
    }
}
</script>

<style>
    .profileuser .header img{
        width: 50px;
        height: 50px;
        border: 2px solid #03c6c1;
        border-radius: 50px;
        margin-right: 30px;
    }
    .profileuser .header ul{
        width: 50%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-left: 100px;
    }
    .profileuser .personinfo h5{
        margin-left: 100px;
    }
    .profileuser .fullname{
        margin-bottom: 60px;
    }
    .profileuser .infos > div span{
        margin-bottom: 20px;
    }
    .profileuser .contact{
        height: 550px;
        background-color: white;
        border-radius: 30px;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
        box-sizing: border-box;
        padding: 60px;
    }
    .profileuser .contact img:first-child{
        margin-bottom: 30px;
    }
    .profileuser .contact p{
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .profileuser .contact span{
        color: black;
    }
</style>