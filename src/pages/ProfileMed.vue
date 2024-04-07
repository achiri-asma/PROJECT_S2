<template>
    <div class="profilemed">
        <div class="header">
            <h3>Profile</h3>
            <router-link to="/"> 
                <span>Log out</span>&nbsp;
                <img src="../assets/logout.png">
            </router-link>
        </div>
        <div class="main">
            <div class="personinfo">
                <h5>Personnel Information :</h5>
                <div class="infos">
                    <img v-if="imageUrl" :src="imageUrl">
                    <img v-else src="../assets/image3.png"/>
                    <div>
                        <div class="fullname">
                            <p>Dr.{{ medecinInfo.fullName }}</p> 
                            <img src="../assets/editing.png" @click="EditProfil1">
                        </div>
                        <label>Email: </label><span>{{ medecinInfo.email }}</span><br>
                        <!--<label>Sexe: </label><span>{{ medecinInfo.sexe }}</span><br>-->
                        <label>Speciality: </label><span>{{ medecinInfo.speciality }}</span><br>
                        <label>Experience: </label><span>{{ medecinInfo.experience }}</span><br>
                        <label>Medical Registration Number: </label><span>{{ medecinInfo.numOrdre }}</span><br>
                        <!--<label>Date of birth: </label><span>{{ medecinInfo.dateOfBirth }}</span><br>-->
                        <label>Phone number: </label><span>{{ "0"+medecinInfo.phone }}</span>
                        <fieldset>
                            <legend>Biography:&nbsp;&nbsp;&nbsp;</legend>
                            <p>{{ medecinInfo.biographie }}</p>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div>
                <div class="officeinfo">
                    <h5>Office informations :</h5>
                    <div class="offimg">
                        <img src="../assets/image2.png">
                        <img src="../assets/editing.png" @click="EditProfil2">
                    </div>
                    <label>Address: </label>
                    <span>Sidi bel abbes, sidi bel abbes, wiam BP 73</span><br>
                    <label>Phone number: </label>
                    <span>04399567439</span>
                </div>
                <div class="contact">
                    <div>
                        <img src="../assets/logo2.png" alt="logo2"><br>
                        <label>Contact: </label><br>
                        <span>info@nom_website.com</span>
                    </div>
                    <div>
                        <img src="../assets/facebook.png" alt="facebook">
                        <img src="../assets/instagram.png" alt="instagram">
                        <img src="../assets/twitter.png" alt="twitter">
                        <img src="../assets/linkedin.png" alt="linkedin">
                    </div>
                </div>
            </div>
        </div>
        <EditProfil1 v-show="showEditProfil1" @edit-profile="EditProfil1" @medecin-profile-updated="updateMedecinInfo" :medecinId="medecinId" :medecinInfo="medecinInfo"/>
        <EditProfil2 v-show="showEditProfil2" @edit-profile="EditProfil2" :medecinId="medecinId"/>
    </div>
</template>

<script>
import EditProfil1 from './EditProfile1'
import EditProfil2 from './EditProfile2'
import axios from 'axios'

export default {
    data() {
        return {
            showEditProfil1 : false,
            showEditProfil2 : false,
            medecinInfo : '',
            imageUrl : ''
        }
    },
    components : { EditProfil1, EditProfil2},
    props : [ 'medecinId' ],
    methods : {
        EditProfil1() {
            this.showEditProfil1 = !this.showEditProfil1
        },
        EditProfil2() {
            this.showEditProfil2 = !this.showEditProfil2
        },
        updateMedecinInfo(updatedMedecinInfo) {
            this.medecinInfo = updatedMedecinInfo
            if (this.medecinInfo.image) {
                axios.get(`http://localhost:7777/service-profile/api/image/${this.medecinInfo.image}`, {
                    responseType: 'blob'
                })
                .then(response => {
                    if (response.status === 200) {
                        this.imageUrl = URL.createObjectURL(response.data)
                    } else {
                        throw new Error('Image not found')
                    }
                })
            }
        }
    },
    mounted() {
        axios.get(`http://localhost:7777/service-profile/api/MedecinInfo/${this.medecinId}/`)
        .then(response => {
            this.medecinInfo = response.data
            if (this.medecinInfo.image) { 
                return axios.get(`http://localhost:7777/service-profile/api/image/${this.medecinInfo.image}`, {
                    responseType: 'blob'
                })
                .then(response => {
                    if (response.status === 200) {
                        this.imageUrl = URL.createObjectURL(response.data)
                    } else {
                        throw new Error('Image not found')
                    }
                })
            }
        })
    }
}
</script>

<style>
    .profilemed, .profileuser{
        background-color: rgba(3, 198, 193, 0.2);
        width: 100%;
    }
    .profilemed .header, .profileuser .header{
        width: 90%;
        height: 90px;
        background-color: white;
        border-top: none;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    }
    .profilemed .header h3{
        color: #03c6c1;
        font-weight: 600;
        letter-spacing: 0.05em;
        margin-left: 30px;
    }
    .profilemed .header a{
        text-decoration: none;
    }
    .profilemed .header img{
        width: 20px;
        height: 20px;
        margin-right: 30px;
    }
    .profilemed .main, .profileuser .main{
        display: flex;
        justify-content: space-between;
        margin: 30px 5%;
    }
    .profilemed .personinfo, .profileuser .personinfo{
        width: 55.55%;
        height: 550px;
        background-color: white;
        border-radius: 30px;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    }
    .profilemed .personinfo h5, .profileuser .personinfo h5{
        color: #03c6c1;
        font-size: 16px;
        font-weight: 100;
        margin: 30px;
    }
    .profilemed .infos, .profileuser .infos{
        display: flex;
    }
    .profilemed .infos > img, .profileuser .infos > img{
        width:100px;
        height: 100px;
        border: 2px solid #03c6c1;
        border-radius: 50px;
        margin: 0 30px;
    }
    .profilemed .infos > div, .profileuser .infos > div{
        margin-right: 30px;
    }
    .profilemed .fullname, .profileuser .fullname{
        display: flex;
        justify-content: space-between;
        color: #03c6c1;
        margin-bottom: 30px;
    }
    .profilemed .fullname img, .profilemed .officeinfo .offimg img:last-child, .profilemed .fullname img{
        width: 20px;
        height: 20px;
    }
    .profilemed .infos > div label, .profilemed legend, .profilemed .officeinfo label, .profileuser .infos > div label, .profileuser .contact label, .profileuser .contact p, .profileuser .contact span, .profileuser .header ul{
        opacity: 0.5;
        letter-spacing: 0.05em;
    }
    .profilemed .infos > div span, .profilemed .officeinfo span, .profileuser .infos > div span{
        color: #03c6c1;
        box-sizing: border-box;
        padding-left: 10px;
        display: inline-block;
        margin-bottom: 10px;
    }
    .profilemed .infos fieldset{
        height: 200px;
        border-color: rgb(0, 0, 0, 0.5);
        border-radius: 10px;
        border-top-left-radius: 15px;
        overflow: hidden;
    }
    .profilemed .infos fieldset p{
        opacity: 0.8;
        letter-spacing: 0.02em;
        margin: 0 10px 20px 10px;
        display: -webkit-box;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .profilemed .personinfo + div, .profileuser .contact{
        width: 42%;
    }
    .profilemed .officeinfo{
        height: 380px;
        background-color: white;
        border-radius: 30px;
        margin-bottom: 20px;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    }
    .profilemed .officeinfo h5{
        color: #03c6c1;
        font-size: 16px;
        font-weight: 100;
        box-sizing: border-box;
        padding: 30px;
    }
    .profilemed .officeinfo .offimg{
        display: flex;
        justify-content: space-between;
        margin: 0 30px;
        margin-bottom: 50px;
    }
    .profilemed .officeinfo .offimg img:first-child{
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
    .profilemed .officeinfo label{
        display: inline-block;
        margin-left: 30px;
        margin-bottom: 30px;
    }
    .profilemed .contact{
        height: 150px;
        background-color: white;
        border-radius: 30px;
        box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 30px;
    }
    .profilemed .contact div:first-child{
        margin-bottom: 50px;
    }
    .profilemed .contact div:first-child label, .profilemed .contact div:first-child span{
        opacity: 0.5;
        letter-spacing: 0.05em;
        margin-left: 20px;
    }
    .profilemed .contact div:last-child img{
       margin-right: 5px; 
    }
</style>