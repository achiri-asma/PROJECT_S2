<template>
    <HeaderPage2 />
    <div classe="parts">
        <div class="part-one">
        </div>
        <div class="part-two">
            <img src="../assets/doctors/image1.png" alt="doctor" id="docc">
            <div class="doc-infos">
                <h4>Dr.Sara Anttoine</h4>
                <p>Dentist</p>
                <p id="petit"><img src="../assets/rating (2) 2.png" alt="rating" style="vertical-align: middle;"> (02)
                </p>
                <p> <img src="../assets/part-time.png" alt="experience"
                        style="vertical-align: middle;width:25px;height:25px;"> 6 Years Experience </p>
                <p> <img src="../assets/maps-and-flags.png" alt="experience"
                        style="vertical-align: middle; width:25px;height:25px;"> Sidi bel abbes , sidi bel abbes, wiam
                    BP 73 </p>
                <p id="biographie"> <img src="../assets/writer 1.png" alt="experience"
                        style="vertical-align: middle; width:20px;height:25px;"> “As a passionate dentist, I've
                    dedicated my career to crafting smiles that radiate confidence. With over a decade of experience,
                    I merge precision with compassion, transforming dental visits into positive experiences. Outside the
                    clinic, I enjoy exploring new dental technologies and volunteering for community oral health
                    initiatives.” </p>
            </div>
            <div class="doc-contt">
                <button type="submit" id="bt1" @click="next"><img src="../assets/calendar (1) 1.png" alt="" id="next">
                    Book
                    appointement</button>
                <button type="submit" id="bt2"><img src="../assets/calendar 4.png" alt=""
                        id="next">(213) 0745612333</button>
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
    components: { HeaderPage2},
    data() {
        return {

            mapData: {
                lat: 20,
                lng: 20
            }

        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {

            this.map = L.map('map').setView([51.505, -0.09], 13);


            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(this.map);

            const marker = L.marker([51.505, -0.09]).addTo(this.map);
            marker.bindPopup('A sample popup!').openPopup();
        },
        next() {
            router.push({ name: 'LoginPage1', params: {} });

        }
    }
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
    margin-top: -315px;
    margin-right: 40px;
}

#map {
    float: right;
    margin-top: -180px;
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