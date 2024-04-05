<template>
    <div class="profileuser">
        <div class="header">
            <ul>
                <router-link :to="{ name: 'LandingPage', params: { userId: userId } }"><li>Home</li></router-link>
                <router-link to="/about-us"><li>About Us</li></router-link>
                <router-link to="/features"><li>Features</li></router-link>
                <router-link to="/faqs"><li>FAQs</li></router-link>
                <router-link to="/contact"><li>Contact</li></router-link>
            </ul>
            <div class="userImage">
                <img v-if="UserInfo.image" :src="UserInfo.image" @click="toggleDropdown">
                <img v-else src="../assets/image3.png" @click="toggleDropdown">
                <div v-if="showDropdown" class="dropdown">
                    <router-link :to="{ name: 'DashUser', params: { userId: userId } }" @click="showDropdown=false"><div>My Profile</div></router-link> 
                    <router-link to="/"><div @click="logOut">Log out <img src="../assets/logout2.png"></div></router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="personinfo">
                <h5>Personnel Information :</h5>
                <div class="infos">
                    <img v-if="UserInfo.image" :src="UserInfo.image">
                    <img v-else src="../assets/image3.png"/>
                    <div>
                        <div class="fullname">
                            <p>{{ UserInfo.fullName }}</p> 
                            <img src="../assets/editing.png" @click="EditProfil3">
                        </div>
                        <label>Email: </label><span>{{ UserInfo.email }}</span><br>
                        <label>Sexe: </label><span>{{ UserInfo.sexe }}</span><br>
                        <label>Address: </label><span>{{ UserInfo.adresse.wilaya }}, {{ UserInfo.adresse.commune }}, {{ UserInfo.adresse.rue }}</span><br>
                        <label>Social security number: </label><span>{{ UserInfo.numSecuriteSociale }}</span><br>
                        <label>Date of birth: </label><span>{{ UserInfo.dateOfBirth }}</span><br>
                        <label>Phone number: </label><span>{{ "0"+UserInfo.phone }}</span>
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
        <EditProfil3 v-show="showEditProfil3" @edit-profile="EditProfil3" @user-profile-updated="updateUserInfo" :userId="userId" :userInfo="UserInfo"/>
    </div>
</template>

<script>
import EditProfil3 from './EditProfile3'
import axios from 'axios'

export default {
    data() {
        return {
            showEditProfil3 : false,
            showDropdown: false,
            UserInfo: {
                adresse: {
                    wilaya: '',
                    commune: '',
                    rue: ''
                }
            }
        }
    },
    components : { EditProfil3 },
    props : [ 'userId' ],
    methods : {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },
        EditProfil3() {
            this.showEditProfil3 = !this.showEditProfil3
        },
        updateUserInfo(updatedUserInfo) {
            this.UserInfo = updatedUserInfo
        }
    },
    mounted() {
        axios.get(`http://localhost:7777/service-profile/api/PatientInfo/${this.userId}/`)
        .then(response => {
            this.UserInfo = response.data
        })
    }
}
</script>

<style >
    .profileuser .header ul{
        width: 50%;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        margin-left: 100px;
    }
    .profileuser .header a {
        text-decoration: none;
        color: inherit;
    }
    .profileuser .userImage {
        position: relative;
    }
    .profileuser .userImage > img{
        width: 50px;
        height: 50px;
        border: 2px solid #03c6c1;
        border-radius: 50px;
        margin-right: 30px;
    }
    .profileuser .dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        width: 135px;
        background-color: white;
        border: 1px solid #cccccc;
        border-radius: 15px;
        text-align: center;
        padding: 10px 0;
        z-index: 1;
    }
    .profileuser .dropdown div {
        box-sizing: border-box;
        padding: 5px 10px;
        cursor: pointer;
    }
    .profileuser .dropdown div:hover{
        background-color: rgb(217, 217, 217, 0.5);
    }
    .profileuser .dropdown img{
        width: 15px;
        height: 15px;
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
</style>