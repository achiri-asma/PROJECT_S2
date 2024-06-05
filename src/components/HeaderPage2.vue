<template>
  <div class="head">
    <div class="header3">
      <img src="../assets/logoo.png" alt="logo" id="logo" />
      <nav>
        <RouterLink :to="isLandingPage ? '/landing-page/' + id : '/'" class="li">Home</RouterLink>
        <router-link to="/about-us" class="li">About Us</router-link>
        <router-link to="/faqs" class="li">FAQs</router-link>
        <router-link to="/contact" class="li">Contact</router-link>
      </nav>
      <div v-if="!isLandingPage" class="button-containerr">
        <button id="btt2" @click="login2" type="submit">Log In</button>
      </div>
      <router-link v-if="isLandingPage" :to="{ name: 'DashUser', params: { userId: id } }">
        <img v-if="UserInfo.image" :src="UserInfo.image" id="profile1">
        <img v-else src="../assets/image3.png" alt="profil" id="profile1">
      </router-link>
    </div>
    <div class="search-containerr">
      <input type="text" placeholder="Name, speciality, office" id="input1" class="with-icon1" v-model="search_Input">
      <input type="text" placeholder="Where?" id="input2" @focus="showAllResults" v-model="searchInput"
        @input="filterResults" class="with-icon2">
      <ul v-show="showList" class="suggestion" :style="{ marginTop: suggestionsMarginTop + 'px' }">
        <li v-for="result in displayedResults" :key="result.id" @click="selectSuggestion(result.name)">{{ result.name }}
        </li>
      </ul>
      <button type="submit" @click="isLandingPage ? nextt() : next()">search <img src="../assets/next-g.png" id="next" /></button>
    </div>
  </div>
  <div class="results" v-if="!isDoctorPage">
    <p v-if="input1 && input2"><strong>{{ input1 }}</strong> Near <strong>{{ input2 }}</strong></p>
    <p v-if="input1" id="nbr-rslt">{{ searchDataLength}} Results</p>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'

export default {
  name: 'HeaderPage2',
  data() {
    return {
      isLandingPage: false,
      isDoctorPage: false,
      UserInfo: {
        adresse: {
          wilaya: '',
          commune: '',
          rue: ''
        }
      },
      queryParam:'',
      wilaya:'',
      search_Input: '',
      searchInput: '',
      input1: '',
      input2: '',
      userId: '',
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
      suggestionsMarginTop: 267,
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.name === 'LandingPage' && from.name === 'SearchPage1' && from.params.userId) {
        this.isLandingPage = true;
      } else {
        this.isLandingPage = false;
      }
    }
  },
  mounted() {
    if (this.$route.params.input1 && this.$route.params.input2) {
      this.search_Input = this.$route.params.input1;
      this.searchInput = this.$route.params.input2;
    }
    this.input1 = this.search_Input;
    this.input2 = this.searchInput;
    if (this.$route.name === 'DoctorPage1' || this.$route.name === 'DoctorPage' || this.$route.name === 'LandingPage') {
      this.isDoctorPage = true;
    }
    if ((this.$route.name === 'SearchPage1' || this.$route.name === 'DoctorPage') && this.$route.params.userId) {
      this.isLandingPage = true;
    }
    if (this.isLandingPage) {
      axios.get(`http://localhost:7777/service-profile/api/PatientInfo/${this.id}/`)
      .then(async response => {
        this.UserInfo = response.data
        if (this.UserInfo.image) {
          axios.get(`http://localhost:7777/service-profile/api/image/${this.UserInfo.image}`, {
            responseType: 'blob'
          })
          .then(res => {
            this.UserInfo.image = URL.createObjectURL(res.data)
          })
        }
      })
    }
  },
  props: ['id','searchDataLength'],
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
    login2() {
      router.push({ name: 'LoginPage1', params: {} });
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
    handleCurrentPosition() {
      console.log("Special treatment for current position selected");
    },
    selectSuggestion(value) {
      this.searchInput = value;
      this.showList = false;
    },
    next() {
      const input1 = this.search_Input || this.input1
      const input2 = this.searchInput || this.input2
      const data ={queryParam:input1, wilaya:input2}
      axios.post('http://localhost:5000/medecin/search',data)
      .then(response => {
        const searchData= response.data;
        localStorage.setItem('searchData', JSON.stringify(searchData));
        router.push({name:'SearchPage2' ,params:{input1 , input2}}).then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.log(error)     
      })
    },
    nextt() {
      const input1 = this.search_Input || this.input1
      const input2 = this.searchInput || this.input2
      const userId = this.id
      const data ={queryParam:input1, wilaya:input2}
      axios.post('http://localhost:5000/medecin/search',data)
      .then(response => {
        const searchData= response.data;
        localStorage.setItem('searchData', JSON.stringify(searchData));
        router.push({name:'SearchPage1' ,params:{input1 , input2,userId}}).then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.log(error);      
      })
    },
  }
}
</script>

<style scoped>
.head {
  width: 100%;
  height: 250px;
  background-color: #99FEF2;
  position: relative;
}

.header3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  margin-left: 120px;
}

#logo {
  width: 261px;
  height: 83px;
  margin-top: 16px;
}

nav {
  display: flex;
  gap: 60px;
  margin-left: 150px;
  margin-right: 70px;
}

.li {
  color: gray;
  font-size: 18px;
  text-decoration: none;
  font-family: Poppins;
  margin-top: 10px;
}

.li:hover {
  font-weight: 700;
  color: black;
}

#profile {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 220px;
}

.button-containerr {
  display: flex;
}

.button-containerr button {
  margin-left: 20px;
  width: 160px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid white;
  font-size: 18px;
  color: white;
  margin-top: 10px;
}

#btt2 {
  background-color: #03C6C1;
}

.search-containerr {
  display: flex;
  align-items: center;
  margin-left: 130px;
  padding-top: 120px;
}

.with-icon1,
.with-icon2 {
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
  width: 620px;
  height: 65px;
  background-size: 25px 25px;
}

.with-icon2 {
  background-image: url('../assets/position.png');
  border-left: none;
  width: 325px;
  height: 65px;
  background-size: 25px 25px;
}

.search-containerr button {
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

.suggestion {
  position: absolute;
  margin-left: 680px;
  background-color: white;
  list-style-type: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 390px;
  max-height: 200px;
  overflow-y: auto;
}

.suggestion li {
  padding: 10px;
  cursor: pointer;
}

.suggestion li:hover {
  background-color: #f4f4f4;
}

.results {
  width: 100%;
}

.results p {
  padding-top: 25px;
  margin-left: 130px;
  font-size: 20px;
}

#nbr-rslt {
  margin-top: -20px;
  font-size: 20px;
  color: #03C6C1;
  font-weight: 700;
}

#profile1 {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 130px;
}
</style>