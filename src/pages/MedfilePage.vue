<template>
    <div class="profilemed">
        <div class="header">
            <h3>Medfiles</h3>
            <router-link to="/">
                <span>Log out</span>&nbsp;
                <img src="../assets/logout.png">
            </router-link>
        </div>
        <div class="main">
            <div class="personinfoooo" v-if="main1">
                <div class="add">
                    <button type="submit"  @click="main2 = true,main1=false,main3=false">
                        <img src="../assets/plus.png" alt="submit"/>
                    </button>
                    <p>Add new Medical Dossier</p>
                </div>
                <div class="infos_persn">
                  <h3 id="pii">Personal Details</h3>
                  <span class="a1">Full name</span>
                  <img src="../assets/image0.png" id="pat" alt="patient">
                  <p class="a">Email: <span>example@gmail.com</span></p>
                  <p class="a">Sexe: <span>Female</span></p>
                  <p class="a">Address: <span>Sidi bel abbes , sidi bel abbes, wiam BP 73</span></p>
                  <p class="a">Social security number: <span>0987g4djxp3</span></p>
                  <p class="a">Date of birth: <span>11-07-1995</span></p>
                  <p class="a">Phone number: <span>0799567439</span></p>
                </div>
                 <div class="historique">
                    <p id="histo">Historical Medical Dossier</p>
                    <div class="hs">
                        <img src="../assets/calendar.png" alt="calendar" class="pt"> &nbsp; &nbsp;
                        date / time 
                        <img src="../assets/pen.png" alt="edit" id="ed" class="bm" >
                        <img src="../assets/bin.png" alt="delete" class="bm" @click="showConfirmDialog = true">
                    </div>
                 </div>
            </div>
            
        </div>
        <div v-if="showConfirmDialog" class="confirm-dialog">
            <div class="confirm-dialog-content">
                <h3>Confirm Deletion</h3>
                <p>Are you sure you want to delete this medical file? <br/> This action cannot be undone.</p>
                <div class="confirm-dialog-buttons">
                    <button @click="cancelDelete" id="del" >Cancel</button>
                    <button @click="confirmDelete" id="dell">Delete <img src="../assets/bin1.png" alt="bin"></button>
                </div>
            </div>
        </div>

        <div class="personinfooo" v-if="main2">
            <div class="prec">
                <button type="submit"  @click="main2 = false,main1=true"><img src="../assets/Rectangle 187.png" alt="prec"></button>
            </div>
            <div class="tete">
               <img src="../assets/Group 14.png" alt="tete">
            </div>
            <div class="search__container">
                        <div class="search__icon">
                            <img src="../assets/clip 1.png" alt="Icône d attachement">
                        </div>
                        <input type="text" placeholder="Enter detailed description here..." class="search__input">
                        <div class="adde">
                    <button type="submit"  @click="main2 = true,main1=false,main3=false">
                        <img src="../assets/plus.png" alt="submit"/>
                    </button>
                </div>
            </div>
            <button type="submit"  @click="main2 = false,main1=false,main3=true" id="nexxt">Next</button>         
        </div>
        <div class="personinfooo" v-if="main3">
            <div class="prec">
                <button type="submit"  @click="main2 = false,main1=true"><img src="../assets/Rectangle 187.png" alt="prec"></button>
            </div>
            <div class="tete">
               <img src="../assets/Group 14.png" alt="tete">
            </div>
            <div class="search__container">
                        <div class="search__icon">
                            <img src="../assets/clip 1.png" alt="Icône d attachement">
                        </div>
                        <input type="text" placeholder="Enter detailed description here..." class="search__input">
                        <div class="adde">
                    <button type="submit"  @click="main2 = true,main1=false,main3=false">
                        <img src="../assets/plus.png" alt="submit"/>
                    </button>
                </div>
            </div>
           
        </div>
    </div>
   

    

</template>
<script>
//import axios from 'axios'


export default {
    data() {
        return {
            showConfirmDialog: false,
            main1:true,
            main2:false,
            main3:false,
        }
    },


    props: ['medecinId'],
    methods: {
        confirmDelete() {
            // Exécuter le code de suppression ici
            console.log('Élément supprimé')
            this.showConfirmDialog = false
    
        },
        cancelDelete() {
            this.showConfirmDialog = false
        },

    }
}
</script>

<style>
.profilemed,
.profileuser {
    background-color: rgba(3, 198, 193, 0.2);
    width: 100%;
}

.profilemed .header,
.profileuser .header {
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

.profilemed .header h3 {
    color: #03c6c1;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-left: 30px;
}

.profilemed .header a {
    text-decoration: none;
}

.profilemed .header img {
    width: 20px;
    height: 20px;
    margin-right: 30px;
}

.profilemed .main,
.profileuser .main {
    display: flex;
    justify-content: space-between;
    margin: 30px 5%;
}

.profilemed .personinfoooo {
    width: 100%;
    height: 570px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}
.add button{
    width:50px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px dotted;
    margin-top: 25px;
    margin-left:25px;
}
.add button img{
    width:20px;
    height: 20px;
}
.add p {
    margin-top: -40px;
    margin-left: 95px;
    color: #03c6c1 ;
    text-decoration: underline;
}
.infos_persn{
    border-radius: 15px;
    border:1.5px solid #03c6c1;
    width:400px ;
    height:500px;
    margin-left: 670px;
    margin-top: -30px;
}
.infos_persn h3{
    font-size: 20px;
    font-weight: 600;
    color:rgb(135, 135, 135);
    margin-left: 35px;
    margin-top: 15px;

}
.a{
    margin-left: 35px;
    font-weight: 400;
    padding-top: 20px;
}
.a1{
    margin-left: 35px;
    font-weight: 400;
   margin-top: -55px;
}
.infos_persn p{
    font-size: 17px;
    color:rgb(135, 135, 135);
}

#pat{
width:90px;
height:90px;
border: #03c6c1 3.5px dotted;
border-radius: 100px;
margin-left: 150px;
}
.historique{
    margin-top: -400px;
    margin-left: 25px;
}
#histo{
color:gray;
font-size: 16px;
}
.hs{
    width:450px;
    height:58px;
    border: #03c6c1 solid 1px;
    font-size: 16px;
    margin-top: 25px;
    border-radius: 15px;
}
.hs .pt{
    width:24px;
    height:24px;
    padding-left: 10px;
}
.hs .bm{
    width:30px;
    height:30px;
    padding-top: 10px;
}
#ed{
    margin-left: 215px;
    margin-right: 10px;
}
.confirm-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.confirm-dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  text-align: center;
  width:500px;
  height:200px;
}
.confirm-dialog-content h3{
color:rgb(68, 67, 67);
font-size: 32px;

}

.confirm-dialog-content p{
color:gray;
font-size: 18px;
font-weight: 400;
padding-top: 20px;
}
 
.confirm-dialog-buttons {
  margin-top: 20px;
}

.confirm-dialog-buttons button {
  margin: 0 10px;
}
#del{
    color:black;
    width:100px;
    height:45px;
    border:none;
    font-size: 15px;
    border-radius: 10px;
  
}
#dell{
    background-color: #FF0000;
    color:white;
    width:100px;
    height:45px;
    border:none;
    font-size: 15px;
    border-radius: 10px;
    margin-left: 180px;
}
#dell img{
    width:15px;
    height:15px;
}
.profilemed .personinfooo {
    width: 90%;
    height: 570px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    margin-left: 60px;
   
}
.prec button{
    background-color: white;
   
    margin-left:25px ;
    margin-top: 25px;
    border: none ;
}
.prec button img{
   width:35px;
   height: 35px;
}
.tete img{
    margin-left: 220px;
    height: 100px;
}
.search__container {
    display: flex;
    margin-left: 25px;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 700px;
    height: 50px;
    margin-left: 180px;
    margin-top: 70px;
}

.search__input {
    border: none;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding: 5px;
}

.search__icon {
    width: 35px;
    height: 35px;
    padding: 5px;
}

.search__icon img {
    width: 100%;
    height: 100%;
}
.adde button{
    width:50px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px dotted;
    margin-left:25px;
}
.adde button img{
    width:20px;
    height: 20px;
}
#nexxt{
    margin-left: 800px;
    margin-top: 50px;
    width:100px;
    height:40px;
    color:white;
    background-color: #03c6c1;
    border-radius: 10px;
    border:none;
    font-size: 16px;
}
</style>