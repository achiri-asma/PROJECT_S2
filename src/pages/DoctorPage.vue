<template>
    <HeaderPage2 :id="$route.params.userId" />
    <div classe="parts">
        <div class="part-one">
        </div>
        <div  class="part-two">
            <img src="../assets/image1.png" alt="doctor" id="docc">
            <div class="doc-infos">
                <h4  v-if="searchDataa[index]">Dr.{{ searchDataa[index].fullName }}</h4>
                <p v-if="searchDataa[index]">{{ searchDataa[index].speciality }}</p>
                <p id="petit"><img src="../assets/rating (2) 2.png" alt="rating" style="vertical-align: middle;"> (02)
                </p>
                <p v-if="searchDataa[index]"> <img src="../assets/part-time.png" alt="experience"
                        style="vertical-align: middle;width:25px;height:25px;"> {{  calculateYearsSinceExperience  -searchDataa[index].experience}} Years Experience </p>
                <p> <img src="../assets/maps-and-flags.png" alt="experience"
                        style="vertical-align: middle; width:25px;height:25px;"> Sidi bel abbes , sidi bel abbes, wiam
                    BP 73 </p>
                <p  v-if="searchDataa[index]" id="biographie"> <img src="../assets/writer 1.png" alt="experience"
                        style="vertical-align: middle; width:20px;height:25px;"> “ {{searchDataa[index].biographie}}” </p>
            </div>
            <div class="doc-contt">
                <button type="submit" id="bt1" v-if="!isLandingPage" @click="next1"><img
                        src="../assets/calendar (1) 1.png" alt="" id="next">
                    Book
                    appointement</button>
                <button type="submit" id="bt1" v-if="isLandingPage" @click="next2"><img
                        src="../assets/calendar (1) 1.png" alt="" id="next"> Book
                    appointement</button>
                <button type="submit" id="bt2"><img src="../assets/calendar 4.png" alt="" id="next">(213)
                    0745612333</button>
            </div>

            <div id="map">
                <div style="height: 300px; width: 100%">
                    <div style="height: 200px; overflow: auto;">
                        <p>First marker is placed at {{ mapData.lat }}, {{ mapData.lng }}</p>
                        <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
                        <button>
                            Toggle long popup
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import HeaderPage2 from '../components/HeaderPage2.vue';

export default {
    name: 'DoctorPage',
    components: { HeaderPage2 },
    data() {
        return {
            isLandingPage: false,
            searchDataa: '',
            index:'',
            map: null,
            mapData: {
                lat: 20,
                lng: 20
            }
        }
    },
    computed: {

    calculateYearsSinceExperience() {
      const currentYear = new Date().getFullYear();
      return currentYear ;
    } 
  
  },
    mounted() {
        if (this.$route.name === 'SearchPage1' && this.$route.params.userId) {
            this.isLandingPage = true;
        }
        if (this.$route.name === 'DoctorPage' && this.$route.params.userId) {
            this.isLandingPage = true;
        }
        const searchDataString = localStorage.getItem('searchData');
        const index = this.$route.params.indeex;
        this.index = index;
        console.log(this.index);

        if (searchDataString) {
            this.searchDataa = JSON.parse(searchDataString);
            console.log(this.searchDataa);
            console.log(this.searchDataLength);
        }

        // Initialize map
        this.initMap();
    },
    methods: {
        initMap() {
            // Check if the map container exists
            const mapContainer = document.getElementById('map');
            if (!mapContainer) {
                console.error('Map container not found');
                return;
            }

            this.map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(this.map);

            const redIcon = new L.Icon({
                iconUrl: require('@/assets/marker-icon.png'),
                iconSize: [25, 25],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            L.marker([51.505, -0.09], { icon: redIcon }).addTo(this.map);
        },
        next() {
            const input3 = this.$route.params.input1;
            const input4 = this.$route.params.input2;
            router.push({ name: 'DoctorPage1', params: { input3, input4 } });
        },
        next1() {
            router.push({ name: 'LoginPage1', params: {} });
        },
        next2() {
            router.push({ name: 'LoginPage2', params: {} });
        },
    },
}
</script>




<style>
#docc {
    border: 4px solid #03C6C1;
    border-radius: 80px;
    margin-top: -55px;
    margin-left: 30px;
    width: 120px;
    height: 120px;
}

.part-one {
    margin-left: 130px;
    width: 1210px;
    height: 80px;
    background-color: #03C6C1;
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 0 7px rgb(188, 188, 188);
}

.part-two {
    margin-left: 130px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 1210px;
    height: 480px;
    box-shadow: 0 0 7px rgb(188, 188, 188);
}

.doc-infos {
    margin-right: 500px;
    margin-top: 18px;
    float: right;
}

.doc-infos h4 {
    font-size: 18px;
    font-weight: 400;
    color: black;
}

.doc-infos p {
    color: rgb(114, 112, 112);
    font-size: 16px;
    padding-top: 10px;

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

.doc-contt {
    float: right;
    margin-top: -250px;
    margin-right: 40px;
}

#map {
    float: right;
    margin-top: -100px;
    margin-right: 40px;
    width: 300px;
    height: 300px;
}

.doc-contt button {
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

#biographie {
    width: 500px;
}
</style>