<template>
  <div class="background">
    <img src="../assets/background03.png" class="background-image">
    <div>
      <h3 id="titre">Schedule Your <span>Appointment</span></h3>
      <div class="search-container">
        <input type="text" placeholder="Name, speciality, office" id="input1" v-model="search_Input" class="with-icon1">
        <input type="text" placeholder="Where?" id="input2" @focus="showAllResults" v-model="searchInput" @input="filterResults" class="with-icon2">
        <ul v-show="showList" class="suggestions" :style="{ marginTop: suggestionsMarginTop + 'px' }">
          <li v-for="result in displayedResults" :key="result.id" @click="selectSuggestion(result.name)">{{ result.name }}</li>
        </ul>
        <button type="submit" @click="next" v-if="!isLandingPage">search <img src="../assets/next-g.png" id="next" /></button>
        <button type="submit" @click="next1" v-if="isLandingPage">search <img src="../assets/next-g.png" id="next" /></button>
      </div>
      <p id="sous-titre">
        Our Online Appointment Booking System For Doctors Allows You To Easily <br />
        Find And Schedule Appointment With Trusted Doctors In Your Area. Sign up <br />
        Now To Experience Convenient And Hassle-Free Healthcare.
      </p>
      <div class="button-container">
        <button id="bt1" type="submit">learn more</button>
        <button id="bt2" @click="signup" type="submit">sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'

export default {
  name: 'AppoinTement',
  data() {
    return {
      isLandingPage:false,
      search_Input:'',
      searchInput: '',
      queryParam:'',
      wilaya:'',
      results: [
        { id: 0, name: 'Take your current position' },
        { id: 1, name: 'Adrar' },
        { id: 2, name: 'Chlef' },
        { id: 3, name: 'Laghouat' },
        { id: 4, name: 'Oum El Bouaghi' },
        { id: 5, name: 'Batna' },
        { id: 6, name: 'Béjaïa' },
        { id: 7, name: 'Biskra' },
        { id: 8, name: 'Béchar' },
        { id: 9, name: 'Blida' },
        { id: 10, name: 'Bouira' },
        { id: 11, name: 'Tamanrasset' },
        { id: 12, name: 'Tébessa' },
        { id: 13, name: 'Tlemcen' },
        { id: 14, name: 'Tiaret' },
        { id: 15, name: 'Tizi Ouzou' },
        { id: 16, name: 'Alger' },
        { id: 17, name: 'Djelfa' },
        { id: 18, name: 'Jijel' },
        { id: 19, name: 'Sétif' },
        { id: 20, name: 'Saïda' },
        { id: 21, name: 'Skikda' },
        { id: 22, name: 'Sidi Bel Abbès' },
        { id: 23, name: 'Annaba' },
        { id: 24, name: 'Guelma' },
        { id: 25, name: 'Constantine' },
        { id: 26, name: 'Médéa' },
        { id: 27, name: 'Mostaganem' },
        { id: 28, name: 'MSila' },
        { id: 29, name: 'Mascara' },
        { id: 30, name: 'Ouargla' },
        { id: 31, name: 'Oran' },
        { id: 32, name: 'El Bayadh' },
        { id: 33, name: 'Illizi' },
        { id: 34, name: 'Bordj Bou Arréridj' },
        { id: 35, name: 'Boumerdès' },
        { id: 36, name: 'El Tarf' },
        { id: 37, name: 'Tindouf' },
        { id: 38, name: 'Tissemsilt' },
        { id: 39, name: 'El Oued' },
        { id: 40, name: 'Khenchela' },
        { id: 41, name: 'Souk Ahras' },
        { id: 42, name: 'Tipaza' },
        { id: 43, name: 'Mila' },
        { id: 44, name: 'Aïn Defla' },
        { id: 45, name: 'Naâma' },
        { id: 46, name: 'Aïn Témouchent' },
        { id: 47, name: 'Ghardaïa' },
        { id: 48, name: 'Relizane' },
        { id: 49, name: 'El MGhair' },
        { id: 50, name: 'El Menéa' },
        { id: 51, name: 'El Eulma' },
        { id: 52, name: 'Ain El Hadjel' },
        { id: 53, name: 'Ain Touta' },
        { id: 54, name: 'Ain Mlila' },
        { id: 55, name: 'Ain Beida' },
        { id: 56, name: 'Aflou' },
        { id: 57, name: 'Ain Bessem' },
        { id: 58, name: 'Ain El Berd' }
      ],

      showAll: false,
      showList: false,
      suggestionsMarginTop: 267
    }
  },
  mounted() {
    if (this.$route.name === 'LandingPage') {
      this.isLandingPage = true;
    }
   
  },
  computed: {
    displayedResults() {
      if (this.showAll) {
        return this.results;
      } else {
        return this.results.filter(result => {
          return result.name.toLowerCase().startsWith(this.searchInput.toLowerCase());
        });
      }
    }
  },
  methods: {
    signup() {
      router.push({ name: 'SignupPage', params: {} });
    },
    showAllResults() {
      this.showAll = true;
      this.showList = true;
    },
    filterResults() {
      this.showAll = false;
      if (this.searchInput !== '') {
        this.showList = true;

        if (this.displayedResults.length > 3) {
          this.suggestionsMarginTop = 265;
        } else if (this.displayedResults.length === 1 && this.displayedResults[0].name === 'Take Your Current Position') {
          this.handleCurrentPosition();
        } else if (this.displayedResults.length === 2) {
          this.suggestionsMarginTop = 155;
        } else if (this.displayedResults.length === 1) {
          this.suggestionsMarginTop = 110;
        }
        else {
          this.suggestionsMarginTop = 190;
        }
      } else {
        this.showList = false;
        this.suggestionsMarginTop = 265;
      }
    },
    methods: {
      handleCurrentPosition() {
        console.log("Special treatment for current position selected");
      }
    }
    ,
    selectSuggestion(value) {
      this.searchInput = value;
      this.showList = false;
    },
    
    next(){
      const input1=this.search_Input;
     const input2 = this.searchInput;
      const data ={queryParam:input1,
       wilaya:''}
      axios.post('http://localhost:5000/medecin/search',data)
      .then(response => {
            console.log(response.data); 
            const searchData= response.data;
            localStorage.setItem('searchData', JSON.stringify(searchData));
            router.push({name:'SearchPage2' ,params:{input1 , input2}});
          })
          .catch(error => {
            console.log(error);      
          })
     
    },
    next1(){
      const input1=this.search_Input;
      const input2 = this.searchInput;
      const userId = this.$route.params.userId;
      const data ={queryParam:input1,
       wilaya:''}
      axios.post('http://localhost:5000/medecin/search',data)
      .then(response => {
            console.log(response.data); 
            const searchData= response.data;
            localStorage.setItem('searchData', JSON.stringify(searchData));
            router.push({name:'SearchPage1' ,params:{userId,input1 , input2}});

          })
          .catch(error => {
            console.log(error);      
          })
}
  },
}
</script>

<style>
.background {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
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

.search-container {
  display: flex;
  align-items: center;
  margin-left: 85px;
  margin-top: 10px;
}

.with-icon1,
.with-icon2,
.with-icon3 {
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 60px;
  border: 2px solid rgb(224, 222, 222);
  font-size: 18px;
  font-weight: 400;
  color: rgb(114, 112, 112);
}

.with-icon1 {
  background-image: url('../assets/search.png');
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 400px;
  height: 65px;
  background-size: 25px 25px;
}

.with-icon2 {
  background-image: url('../assets/position.png');
  border-left: none;
  width: 200px;
  height: 65px;
  background-size: 25px 25px;
}

.search-container button {
  background-color: #03C6C1;
  border: 2px solid white;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
  height: 70px;
  width: 150px;
  color: white;
  font-size: 20px;
  padding-left: -15px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 8px;
}

#sous-titre {
  font-family: Poppins;
  margin-left: 85px;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  margin-top: 75px;
}

.button-container {
  display: flex;
  margin-left: 85px;
  margin-top: 40px;
  margin-bottom: 55px;
}

.button-container button {
  margin-right: 25px;
  width: 179px;
  height: 61px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  color: white;
}

#bt1 {
  background-color: #bbbbbb;
}

#bt2 {
  background-color: #03C6C1;
}

.suggestions {
  position: absolute;
  margin-left: 464px;
  background-color: white;
  list-style-type: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 260px;
  max-height: 200px;
  overflow-y: auto;
}

.suggestions li {
  padding: 10px;
  cursor: pointer;
}

.suggestions li:hover {
  background-color: #f4f4f4;
}
</style>
