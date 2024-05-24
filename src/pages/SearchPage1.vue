<template>
  <HeaderPage2 :id="$route.params.userId" :searchDataLength="searchDataLength" />
  <div class="bar">
    <p>Sort by <img src="../assets/next-g.png" id="dir" alt="signe"></p>
    <button type="submit" v-if="!showLowExperienceButton" id="m--btn" class="m-btn" @click="Highexperience()">High Experience</button>
    <button type="submit" v-if="showLowExperienceButton" id="m--btn" class="m-btn" @click="Lowexperience()">Low Experience</button>
    <button type="submit" v-if="!showFemaleButton" @click="Female()" class="m-btn">Female Gender</button>
    <button type="submit" v-if="showFemaleButton" @click="Male()" class="m-btn">Male Gender</button>
  </div>
  <div v-for="(result, index) in searchDataa" :key="index" class="displayer">
    <img :src="require(`@/assets/${result.image}`)" alt="doctor" id="doc">
    <div class="doc-info" @click="isLandingPage ? nextt(index) : next(index)">
      <h4>{{ result.fullName }}</h4>
      <p>{{ result.speciality }} </p>
      <p id="petit"><img src="../assets/rating (2) 2.png" alt="rating" style="vertical-align: middle"> (02)</p>
      <p>{{ calculateYearsSinceExperience - result.experience }} Years Experience </p>
      <p>{{ result.wilaya }}, {{ result.commune }}, {{ result.rue }} </p>
    </div>
    <div class="doc-cont">
      <button type="submit" id="bt1" v-if="!isLandingPage" @click="next1(result.id)">
        <img src="../assets/calendar (1) 1.png" id="next"> 
        Book appointement
      </button>
      <button type="submit" id="bt1" v-if="isLandingPage" @click="next2(result.id)">
        <img src="../assets/calendar (1) 1.png" id="next"> 
        Book appointement
      </button>
      <button type="submit" id="bt2">
        <img src="../assets/calendar 4.png" id="next">
        (213) 0{{ result.phone }} 
      </button>
    </div>
  </div>
</template>
<script>
import HeaderPage2 from '../components/HeaderPage2.vue'
import axios from 'axios'
import router from '@/router'

export default {
  name: 'SearchPage1',
  components: { HeaderPage2 },
  data() {
    return {
      isLandingPage: false,
      input1: '',
      input2: '',
      searchDataa: [],
      showLowExperienceButton: false,
      showFemaleButton: false
    }
  },
  mounted() {
    this.loadState();
    this.loadType();
    if (this.$route.name === 'LandingPage') {
      this.isLandingPage = true;
    }
    if (this.$route.name === 'SearchPage1' && this.$route.params.userId) {
      this.isLandingPage = true;
    }
    this.input1 = this.$route.query.input1;
    this.input2 = this.$route.query.input2;
    const searchDataString = localStorage.getItem('searchData');
    if (searchDataString) {
      this.searchDataa = JSON.parse(searchDataString);
      console.log(this.searchDataa);
      console.log(this.searchDataLength);
    }
  },
  computed: {
    searchDataLength() {
      return this.searchDataa.length;
    },
    calculateYearsSinceExperience() {
      const currentYear = new Date().getFullYear();
      return currentYear;
    }
  },
  methods: {
    saveState() {
      const state = {
        showLowExperienceButton: this.showLowExperienceButton
      };
      localStorage.setItem('state', JSON.stringify(state));
    },
    loadState() {
      const stateString = localStorage.getItem('state');
      if (stateString) {
        const state = JSON.parse(stateString);
        this.showLowExperienceButton = state.showLowExperienceButton;
      }
    },
    saveType() {
      const type = {
        showFemaleButton: this.showFemaleButton
      };
      localStorage.setItem('type', JSON.stringify(type));
    },
    loadType() {
      const typeString = localStorage.getItem('type');
      if (typeString) {
        const type = JSON.parse(typeString);
        this.showFemaleButton = type.showFemaleButton;
      }
    },
    next(index) {
      const input3 = this.$route.params.input1;
      const input4 = this.$route.params.input2;
      const indeex = index;
      router.push({ name: 'DoctorPage1', params: { input3, input4, indeex } });
    },
    nextt(index) {
      const input3 = this.$route.params.input1;
      const input4 = this.$route.params.input2;
      const userId = this.$route.params.userId;
      const indeex = index;
      router.push({ name: 'DoctorPage', params: { userId, input3, input4, indeex } });
    },
    next1(medecinId) {
      localStorage.setItem('medecin_id', medecinId);
      router.push({ name: 'LoginPage1', params: {} });
    },
    next2(medecinId) {
      router.push({ name: 'RequestAppointement', params: { medecinId } });
    },
    Highexperience() {
      this.input1 = this.$route.params.input1; 
      this.input2 = this.$route.params.input2; 
      const dataaa = {
        queryParam: this.input1,
        wilaya: this.input2
      };
      axios.post(`http://localhost:5000/medecin/order-desc`, dataaa)
      .then(response => {
        localStorage.removeItem('searchData');
        localStorage.setItem('searchData', JSON.stringify(response.data));
        const searchDatanew = localStorage.getItem('searchData');
        this.searchDataa = JSON.parse(searchDatanew);
        this.showLowExperienceButton = true;
        this.saveState();
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
    },
    Lowexperience() {
      this.input1 = this.$route.params.input1; 
      this.input2 = this.$route.params.input2; 
      const dataaa = {
        queryParam: this.input1,
        wilaya: this.input2
      };
      axios.post(`http://localhost:5000/medecin/order-asc`, dataaa)
      .then(response => {
        localStorage.removeItem('searchData');
        localStorage.setItem('searchData', JSON.stringify(response.data));
        const searchDatanew = localStorage.getItem('searchData');
        this.searchDataa = JSON.parse(searchDatanew);
        this.showLowExperienceButton = false;
        this.saveState();
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
    },
    Male() {
      this.input1 = this.$route.params.input1; 
      this.input2 = this.$route.params.input2; 
      const dataaa = {
        queryParam: this.input1,
        wilaya: this.input2
      };
      axios.post(`http://localhost:5000/medecin/homme`, dataaa)
      .then(response => {
        localStorage.removeItem('searchData');
        localStorage.setItem('searchData', JSON.stringify(response.data));
        const searchDatanew = localStorage.getItem('searchData');
        this.searchDataa = JSON.parse(searchDatanew);
        this.showFemaleButton = false;
        this.saveType();
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
    },
    Female() {
      this.input1 = this.$route.params.input1; 
      this.input2 = this.$route.params.input2; 
      const dataaa = {
        queryParam: this.input1,
        wilaya: this.input2
      };
      axios.post(`http://localhost:5000/medecin/femme`, dataaa)
      .then(response => {
        localStorage.removeItem('searchData');
        localStorage.setItem('searchData', JSON.stringify(response.data));
        const searchDatanew = localStorage.getItem('searchData');
        this.searchDataa = JSON.parse(searchDatanew);
        this.showFemaleButton = true;
        this.saveType();
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
    },
  }
}
</script>
<style>
.bar {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  background-color: #03C6C1;
  display: flex;
  align-items: center;
  gap: 5px;
}

.bar p {
  margin-left: 130px;
  font-size: 20px;
  font-weight: 500;
  color: white;
}

.bar #dir {
  width: 19px;
  height: 19px;
  vertical-align: middle;
}

#m--btn {
  margin-left: 745px;
}

.m-btn {
  width: 180px;
  height: 45px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #03C6C1;
  color: rgb(114, 112, 112);
  font-size: 17px;
}

.displayer {
  margin-left: 130px;
  margin-top: 45px;
  width: 1210px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 0 7px gray;
}

#doc {
  border: 4px solid #03C6C1;
  border-radius: 80px;
  margin-top: 20px;
  margin-left: 25px;
  width: 120px;
  height: 120px;
}

.doc-info {
  margin-right: 730px;
  margin-top: 28px;
  float: right;
  width: 310px;
}

.doc-info h4 {
  font-size: 18px;
  font-weight: 400;
  color: black;
}

.doc-info p {
  color: rgb(114, 112, 112);
  font-size: 16px;
}

#petit {
  color: rgb(114, 112, 112);
  font-size: 10px;
  padding-top: -10px;
}

#petit img {
  width: 80px;
  height: 25px;
}

.doc-cont {
  float: right;
  margin-top: -120px;
  margin-right: 40px;
}

.doc-cont button {
  width: 300px;
  height: 50px;
  border-radius: 40px;
}

#bt1 {
  border: 2px solid white;
  background-color: #03C6C1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
  font-size: 16px;
}

#bt2 {
  border: 2px solid #03C6C1;
  background-color: white;
  color: #03C6C1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
}
</style>
