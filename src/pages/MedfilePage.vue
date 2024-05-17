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
            <div class="personinfoooo">
                <div class="add">
                    <button type="submit">
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
                        <img src="../assets/pen.png" alt="edit" id="ed" class="bm">
                        <img src="../assets/bin.png" alt="delete" class="bm" @click="showConfirmDialog = true">
                    </div>
                 </div>
            </div>
        </div>

    </div>
    <div v-if="showConfirmDialog" class="confirm-dialog">
            <div class="confirm-dialog-content">
                <h3>Confirmation de suppression</h3>
                <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
                <div class="confirm-dialog-buttons">
                    <button @click="confirmDelete">Supprimer</button>
                    <button @click="cancelDelete">Annuler</button>
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
        }
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
  border-radius: 5px;
  text-align: center;
}

.confirm-dialog-buttons {
  margin-top: 20px;
}

.confirm-dialog-buttons button {
  margin: 0 10px;
}
</style>