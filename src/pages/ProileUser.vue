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
                <div class="info">
                    <img src="../assets/image3.png">
                    <div>
                        <div class="fullname">
                            <p>Dr.Full name</p> 
                            <img src="../assets/editing.png" @click="EditProfil3">
                        </div>
                        <label>Email: </label><span>exemple@gmail.com</span><br>
                        <label>Sexe: </label><span>Female</span><br>
                        <label>Phone number: </label><span>0799567439</span>
                    </div>
                </div>
            </div>
            <div class="contact">
                <img src="../assets/logo2.png" alt="logo2"><br>
                <label>Contact: </label><br>
                <span>info@nom_website.com</span>
                <img src="../assets/facebook.png" alt="facebook">
                <img src="../assets/instagram.png" alt="instagram">
                <img src="../assets/twitter.png" alt="twitter">
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
    .profileuser .contact{
        height: 550px;
        background-color: white;
        border-radius: 30px;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    }
</style>