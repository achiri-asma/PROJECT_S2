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
                    <button type="submit" @click="main2 = true, main1 = false, main3 = false">
                        <img src="../assets/plus.png" alt="submit" />
                    </button>
                    <p @click="main2 = true, main1 = false, main3 = false">Add new Medical Folder</p>
                </div>
                <div class="infos_persn main9" v-if="main9">
                    <h3 id="pii">Personal Details</h3>
                    <span class="a1">{{ UserInfos.fullName }}</span>
                    <img v-if="imageUrl" id="pat" :src="imageUrl">
                    <img v-else src="../assets/image3.png" id="pat" />
                    <p class="a">Email: <span>{{ UserInfos.email }}</span></p>
                    <p class="a">Sexe: <span>{{ UserInfos.sexe }}</span></p>
                    <p class="a">Social security number: <span>{{ UserInfos.numSecuriteSociale }}</span></p>
                    <p class="a">Date of birth: <span>{{ UserInfos.dateOfBirth }}</span></p>
                    <p class="a">Phone number: <span>0{{ UserInfos.phone }}</span></p>
                    <select id="states" name="states" v-model="option" @change="editStatus">
                        <option value="passe">PASSE</option>
                        <option value="rate">RATE</option>
                        <option value="en_attente">EN_ATTENTE</option>
                    </select>
                </div>
                <div class="infos_persn main8" v-if="main8">
                    <h3 id="pii" style="margin-left: 40px;">Document Details</h3>

                    <div v-if="selectedDocType === 'Radio'">
                        <img style="margin-top:25px;margin-left:25px;width:300px;height:200px; border-radius: 5px;"
                            :src="imageUrl">
                        <p class="a">Description: <span> {{ infos.description }}</span></p>
                    </div>
                    <div v-else-if="selectedDocType === 'Ordonnance'">
                        <p class="a">Date: <span> {{ formatDate(infos.date) }}</span></p>
                        <p class="a">Description: <span> {{ infos.description }}</span></p>
                        <p class="a">Medicaments:</p>

                        <li v-for="e in medic" :key="e.id" style="margin-left: 45px;">

                            <span> {{ e.medicament.nom }} ({{ e.transcription }}) </span>
                        </li>
                    </div>
                    <div v-else-if="selectedDocType === 'Analyse'">
                        <p class="a">Date: <span> {{ formatDate(infos.date) }}</span></p>
                        <p class="a">Description: <span> {{ infos.description }}</span></p>
                        <p class="a">Test Results:</p>

                        <li v-for="e in medic" :key="e.id" style="margin-left: 45px;">

                            <span> {{ e.testName }} | {{ e.personResult }} | [ {{ e.startNormalRange }}- {{
                                e.endNormalRange }}] </span>
                        </li>
                    </div>
                </div>
                <div class="historique">
                    <p id="histo">Historical Medical Dossier</p>
                    <div class="d">
                        <div v-for="doc in Documents" :key="doc.id">
                            <div class="hs">
                                <span class="img-container"><img src="../assets/clip 1.png" alt="calendar" class="pt">
                                </span>&nbsp; &nbsp;
                                <span class="margin-top:55px;"
                                    @click="main8 = true, main9 = false, getRadio(doc.id, doc.type)">{{ doc.type }}
                                    &nbsp;
                                    &nbsp;&nbsp; &nbsp;
                                    {{ formatDate(doc.date) }}</span>
                                <span class="img-container"> <img src="../assets/pen.png" alt="edit" id="ed"
                                        @click="editDoc(doc.id, doc.type)">
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="personinfooo" v-if="main2">
            <div class="prec">
                <button type="submit" @click="main2 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group 14.png" alt="tete">
            </div>
            <div class="search__container">
                <div class="search__icon" @click="triggerFileInput">
                    <img src="../assets/clip 1.png" alt="Icône d attachement">
                </div>
                <input type="file" ref="imageInput" @change="handleImageUpload" style="display: none;">
                <input type="text" placeholder="Enter detailed description here..." v-model="description"
                    class="search__input">
                <div class="adde">
                    <button type="submit" @click="addRadio">
                        <img src="../assets/plus.png" alt="submit" />
                    </button>
                </div>
            </div>
            <button type="submit" @click="main2 = false, main3 = true" id="nexxt1">Next</button>
        </div>
        <div class="personinfooo" v-if="main3">
            <div class="prec">
                <button type="submit" @click="main3 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group115.png" alt="tete">
            </div>
            <div class="search__container3">

                <input type="text" placeholder="Enter medication..." v-model="nom" class="search1">
                <input type="text" placeholder="Enter transcription..." v-model="transcription" class="search3">
                <input type="text" placeholder="Enter description..." v-model="description1" class="search2">
                <button type="submit" class="added" @click="collectMedic">
                    <img src="../assets/plus.png" alt="submit" />
                </button>
                <div class="adde">
                    <button type="submit" @click="addMedic">
                        <img src="../assets/plus.png" alt="submit" />
                    </button>
                </div>
            </div>
            <button type="submit" @click="main2 = true, main3 = false" id="precc">Back</button>
            <button type="submit" @click="main4 = true, main3 = false" id="nexxt">Next</button>

        </div>
        <div class="personinfooo" v-if="main4">
            <div class="prec">
                <button type="submit" @click="main4 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group116.png" alt="tete">
            </div>
            <div class="search__container3">

                <input type="text" placeholder="Enter test name..." v-model="testName" class="search1">
                <input type="text" placeholder="Enter result..." v-model="personResult" class="search3">
                <input type="text" placeholder="Enter normal range..." v-model="range" class="search3">
                <input type="text" placeholder="Enter description..." v-model="description2" class="search2">
                <button type="submit" class="added" @click="collect_analyse">
                    <img src="../assets/plus.png" alt="submit" />
                </button>
                <div class="adde">
                    <button type="submit" @click="add_analyse">
                        <img src="../assets/plus.png" alt="submit" />
                    </button>
                </div>
            </div>
            <button type="submit" @click="main3 = true, main4 = false" id="precc">Back</button>
            <button type="submit" @click="main4 = false, main1 = true" id="nexxt">Finish</button>
        </div>
        <div class="personinfooo" v-if="main5">
            <div class="prec">
                <button type="submit" @click="main5 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group 14.png" alt="tete">
            </div>
            <div class="search__container2">
                <div class="search__icon2">
                    <img src="../assets/clip 1.png" @click="triggerFileInput" alt="Icône d attachement">
                </div>
                <input type="file" ref="imageInput" @change="handleImageUpload" style="display: none;">
                <input type="text" placeholder="Enter detailed description here..." class="search__input2"
                    v-model="description3">
                <div class="adde2">
                    <button type="submit">
                        <img src="../assets/pen 1.png" alt="submit" @click="updateRadio" />
                    </button>
                </div>
            </div>
            <button type="submit" @click="main5 = false, main6 = true" id="nexxt1">Next</button>
        </div>
        <div class="personinfooo" v-if="main6">
            <div class="prec">
                <button type="submit" @click="main6 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group115.png" alt="tete">
            </div>
            <div class="search__container3">

                <input type="text" placeholder="Enter medications..." v-model="medi" class="search1">

                <input type="text" placeholder="Enter transcription..." v-model="trnc" class="search3">
                <button type="submit" class="added" @click="collectMedic1" style="margin-left: -3px;">
                    <img src="../assets/plus.png" alt="submit" />
                </button>
                <div class="adde3">
                    <button type="submit" @click="updateMedic">
                        <img src="../assets/pen 1.png" alt="submit" />
                    </button>
                </div>
                <input type="text" placeholder="Enter description..." class="search3" v-model="description4">
                <div class="adde3">
                    <button type="submit">
                        <img src="../assets/pen 1.png" alt="submit" @click="editdescription4" />
                    </button>
                </div>
            </div>
            <button type="submit" @click="main5 = true, main6 = false" id="precc">Back</button>
            <button type="submit" @click="main7 = true, main6 = false" id="nexxt">Next</button>

        </div>
        <div class="personinfooo" v-if="main7">
            <div class="prec">
                <button type="submit" @click="main7 = false, main1 = true"><img src="../assets/Rectangle 187.png"
                        alt="prec"></button>
            </div>
            <div class="tete">
                <img src="../assets/Group116.png" alt="tete">
            </div>
            <div class="search__container3">

                <input type="text" placeholder="Enter test name..." v-model="tst" class="search1">
                
                <input type="text" placeholder="Enter result..." v-model="rs" class="search3">
                
                <input type="text" placeholder="Enter normal range..." v-model="rg" class="search3">
                <button type="submit" class="added" @click="collect_analyse1">
                    <img src="../assets/plus.png" alt="submit" />
                </button>
                <div class="adde3">
                    <button type="submit" @click="update_analyse">
                        <img src="../assets/pen 1.png" alt="submit" />
                    </button>
                </div>
                <input type="text" placeholder="Enter description" class="search3" v-model="description5">
                <div class="adde3">
                    <button type="submit">
                        <img src="../assets/pen 1.png" alt="submit" @click="editdescription5" />

                    </button>

                </div>
            </div>
            <button type="submit" @click="main6 = true, main7 = false" id="precc">Back</button>
            <button type="submit" @click="main1 = true" id="nexxt">Finish</button>
        </div>
    </div>




</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            imageInput: '',
            image: '',
            imagesent: '',
            file: '',
            showConfirmDialog: false,
            main1: true,
            main2: false,
            main3: false,
            main4: false,
            main5: false,
            main6: false,
            main7: false,
            description: '',
            description1: '',
            transcription: '',
            medicaments: [],
            nom: '',
            description2: '',
            range: '',
            personResult: '',
            testResultList: [],
            UserInfo: {
                adresse: {
                    wilaya: '',
                    commune: '',
                    rue: ''
                }
            },
            imageUrl: '',
            UserInfos: {},
            userId: '',
            Documents: [],
            dossierId: '',
            selectedDocType: '',
            selectedDocId: '',
            description3: '',
            description4: '',
            description5: '',
            option: '',
            main8: false,
            main9: true,
            infos: {},
            medic: {},
            trnc: '',
            medi: '',
            tst:'',
            rg:'',
            rs:''

        };
    },
    props: [
        'medecinId'

    ],

    mounted() {

        console.log("Mounted lifecycle hook");
        console.log("medecinId from props:", this.medecinId);
        this.dossierId = localStorage.getItem('dossierId');
        this.userId = localStorage.getItem('userId');
        console.log(this.userId);
        if (this.userId == null) {
            console.log("userid est null");
        } else {
            axios.get(`http://localhost:7777/service-profile/api/PatientInfo/${this.userId}/`)
                .then(async response => {
                    this.UserInfos = response.data;
                    console.log(this.UserInfos);
                    if (this.UserInfos.image) {
                        const response_1 = await axios.get(`http://localhost:7777/service-profile/api/image/${this.UserInfos.image}`, {
                            responseType: 'blob'
                        })
                        if (response_1.status === 200) {
                            this.imageUrl = URL.createObjectURL(response_1.data)
                        } else {
                            throw new Error('Image not found')
                        }
                    }
                })



        }
        axios.get(`http://localhost:7777/ms-doss/get/patient/${this.userId}/doctor/${this.medecinId}/dossier`)
            .then(response => {
                console.log(response);
                this.Documents = response.data;
                console.log('Documents:', this.Documents);
            })
            .catch(error => {
                console.error('Error while fetching documents:', error);
                // Handle error cases
            });

    },

    methods: {


        handleImageUpload(event) {
            this.file = event.target.files[0]
            this.imagesent = event.target.files[0].name
            if (this.file) {
                const reader = new FileReader()
                reader.onload = () => {
                    this.image = reader.result
                }
                reader.readAsDataURL(this.file)
            }
        },
        addRadio() {

            this.userId = localStorage.getItem('userId');
            const imageInput = new FormData();
            imageInput.append('file', this.file);

            // Envoyer l'image d'abord
            axios
                .post('http://localhost:7777/service-profile/api/update/upload', imageInput, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })

            console.log('Description:', this.description);
            console.log('Image sent:', this.imagesent);
            const formDatax = {
                description: this.description,
                image: this.imagesent
            };
            this.userId = localStorage.getItem('userId');
            // Envoyer les données de la radio
            const resp = axios.post(
                `http://localhost:7777/ms-doss/create/medecin/${this.medecinId}/patient/${this.userId}/add_radio`,
                formDatax
            );
            console.log("resp: ", resp);
            alert('Success')


        }
        ,
        updateRadio() {

            this.userId = localStorage.getItem('userId');
            const imageInput = new FormData();
            imageInput.append('file', this.file);

            // Envoyer l'image d'abord
            axios
                .post('http://localhost:7777/service-profile/api/update/upload', imageInput, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })

            console.log('Image sent:', this.imagesent);
            const formDataxs = {
                image: this.imagesent
            };

            const resp = axios.put(
                `http://localhost:7777/ms-doss/update/radio/${this.selectedDocId}/image`,
                formDataxs
            );
            console.log("resp: ", resp);


            const dt = { description: this.description3 };
            console.log(dt, this.selectedDocId)
            const res = axios.put(`http://localhost:7777/ms-doss/update/radio/${this.selectedDocId}/description`, dt);
            console.log(res);

            alert('Success')
        },
        async getRadio(docId, docType) {
            this.selectedDocType = docType;
            this.selectedDocId = docId;
            if (this.selectedDocType === "Radio") {
                try {
                    const response = await axios.get(`http://localhost:7777/ms-doss/get/radio/${docId}`);
                    this.infos = response.data.body;
                    console.log('Radio details:', this.infos);

                    // Assurez-vous que l'image existe avant de faire la demande
                    if (this.infos.image) {
                        const response_1 = await axios.get(`http://localhost:7777/service-profile/api/image/${this.infos.image}`, {
                            responseType: 'blob'
                        });
                        if (response_1.status === 200) {
                            this.imageUrl = URL.createObjectURL(response_1.data);
                        } else {
                            throw new Error('Image not found');
                        }
                    }
                } catch (error) {
                    console.error("Error fetching radio details or image:", error);
                }
            }
            else if (this.selectedDocType === "Ordonnance") {
                const response = await axios.get(`http://localhost:7777/ms-doss/get/ordonnace/${docId}`);
                this.infos = response.data.body;
                this.medic = response.data.body.medicamentsOrdonnances;
                console.log('Radio details:', this.infos);
            }
            else if (this.selectedDocType === "Analyse") {
                const response = await axios.get(`http://localhost:7777/ms-doss/get/analyse/${docId}`);
                this.infos = response.data.body;
                this.medic = response.data.body.testResults;
                console.log('Radio details:', this.infos);
            }
        }
        ,
        collectMedic() {

            this.medicaments.push({
                nom: this.nom,
                transcription: this.transcription
            });
            // Réinitialiser le formulaire après l'ajout
            this.nom = '';
            this.transcription = '';

            console.log(this.medicaments);
        },
        collectMedic1() {

            this.medicaments.push({
                nom: this.medi,
                transcription: this.trnc
            });
            // Réinitialiser le formulaire après l'ajout
            this.medi = '';
            this.trnc = '';

            console.log(this.medicaments);
        },
        updateMedic() {
            const formDatax2 =this.medicaments;
            console.log(formDatax2);

            axios.put(
                `http://localhost:7777/ms-doss/update/ordonnance/${this.selectedDocId}/medicaments`,
                formDatax2
            );
            alert('Success')
        },
        update_analyse() {
            const formDatax22 =this.testResultList;
            console.log(formDatax22);

            axios.put(
                `http://localhost:7777/ms-doss/update/analyse/${this.selectedDocId}/testResults`,
                formDatax22
            );
            alert('Success')
        },
        addMedic() {
            const formDatax1 = {
                description: this.description1,
                medicaments: this.medicaments
            };
            console.log(formDatax1);
            this.userId = localStorage.getItem('userId');
            axios.post(
                `http://localhost:7777/ms-doss/create/medecin/${this.medecinId}/patient/${this.userId}/create_ordonnace`,
                formDatax1
            );
            alert('Success')
        },
        formatDate(value) {
            const date = new Date(value);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');

            return `${year}-${month}-${day} (${hours}:${minutes})`;
        },
        triggerFileInput() {
            this.$refs.imageInput.click();
        },
        collect_analyse() {
            const parts = this.range.split('-');


            this.testResultList.push({
                testName: this.testName,
                personResult: this.personResult,
                startNormalRange: parts[0],
                endNormalRange: parts[1]
            });
            // Réinitialiser le formulaire après l'ajout
            this.testName = '';
            this.personResult = '';
            this.range = '';

            console.log(this.testResultList);
        },
        collect_analyse1() {
            const parts = this.rg.split('-');


            this.testResultList.push({
                testName: this.tst,
                personResult: this.rs,
                startNormalRange: parts[0],
                endNormalRange: parts[1]
            });
            // Réinitialiser le formulaire après l'ajout
            this.tst = '';
            this.rs = '';
            this.rg = '';

            console.log(this.testResultList);
        },
        editdescription4() {

            const dt = { description: this.description4 };
            console.log(dt, this.selectedDocId)
            const res = axios.put(`http://localhost:7777/ms-doss/update/ordonnance/${this.selectedDocId}/description`, dt);
            console.log(res);

        }
        , editdescription5() {

            const dt = { description: this.description5 };
            console.log(dt, this.selectedDocId)
            const res = axios.put(`http://localhost:7777/ms-doss/update/analyse/${this.selectedDocId}/description`, dt);
            console.log(res);

        }
        ,
        editDoc(docId, docType) {
            this.selectedDocId = docId;
            this.selectedDocType = docType;

            if (this.selectedDocType === "Radio") {
                this.main5 = true;
                this.main1 = false;



            } else if (this.selectedDocType === "Ordonnance") {
                this.main6 = true;
                this.main1 = false;

            } else if (this.selectedDocType === "Analyse") {
                this.main7 = true;
                this.main1 = false;

            }
        },
        editStatus() {
            const idRdv = localStorage.getItem('idRdv');
            const status = { status: this.option }
            const rs = axios.put(`http://localhost:7777/service-rdv/rendezvous/medecin/${this.medecinId}/rendezvous/${idRdv}/setstatus`, status);
            console.log(rs);
        },
        add_analyse() {
            const data = {
                description: this.description2,
                testResultList: this.testResultList
            }
            console.log(data);
            this.userId = localStorage.getItem('userId');
            axios.post(
                `http://localhost:7777/ms-doss/create/medecin/${this.medecinId}/patient/${this.userId}/add_analyse`, data);
                alert('Success')
        }
    },
    display() {
        this.userId = localStorage.getItem('userId');
        if (this.userId == null) { console.log("userid est null"); }

        else {
            axios.get(`http://localhost:7777/service-profile/api/PatientInfo/${this.userId}/`)
                .then(async response => {
                    this.UserInfos = response.data;
                    this.UserInfo = this.UserInfos.adresse;
                    console.log(this.UserInfos);

                })
        }
    }



};
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

.img-container {
    display: inline-block;
    vertical-align: middle;
}

.img-container img {
    vertical-align: middle;
}

.profilemed .personinfoooo {
    width: 100%;
    height: 570px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
}

.add button {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px dotted;
    margin-top: 25px;
    margin-left: 25px;
}

.add button img {
    width: 20px;
    height: 20px;
}

.add p {
    margin-top: -40px;
    margin-left: 95px;
    color: #03c6c1;
    text-decoration: underline;
}

.infos_persn {
    border-radius: 15px;
    border: 1.5px solid #03c6c1;
    width: 400px;
    height: 500px;
    margin-left: 640px;
    margin-top: -30px;
}

.infos_persn h3 {
    font-size: 20px;
    font-weight: 600;
    color: rgb(135, 135, 135);
    margin-left: 35px;
    margin-top: 15px;

}

.a {
    margin-left: 35px;
    font-weight: 400;
    padding-top: 18px;
}

.a1 {
    margin-left: 35px;
    font-weight: 400;
    margin-top: -40px;
}

.infos_persn p {
    font-size: 17px;
    color: rgb(135, 135, 135);
}

#pat {
    width: 90px;
    height: 90px;
    border: #03c6c1 3.5px dotted;
    border-radius: 100px;
    margin-left: 150px;
}

.historique {
    margin-top: -400px;
    margin-left: 25px;
}

#histo {
    color: gray;
    font-size: 16px;
}

.hs {
    width: 500px;
    height: 40px;
    border: #03c6c1 solid 1px;
    font-size: 14px;
    margin-top: 15px;
    border-radius: 15px;
    margin-left: 5px;



}

.hs .pt {
    width: 24px;
    height: 24px;
    padding-left: 10px;
    margin-top: 10px;
}



#ed {
    width: 30px;
    height: 30px;
    margin-left: 450px;
    margin-top: -55px;


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
    width: 500px;
    height: 200px;
}

.confirm-dialog-content h3 {
    color: rgb(68, 67, 67);
    font-size: 32px;

}

.confirm-dialog-content p {
    color: gray;
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

#del {
    color: black;
    width: 100px;
    height: 45px;
    border: none;
    font-size: 15px;
    border-radius: 10px;

}

#dell {
    background-color: #FF0000;
    color: white;
    width: 100px;
    height: 45px;
    border: none;
    font-size: 15px;
    border-radius: 10px;
    margin-left: 180px;
}

#dell img {
    width: 15px;
    height: 15px;
}

.profilemed .personinfooo {
    width: 90%;
    height: 570px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 2px rgba(217, 217, 217, 0.707);
    margin-left: 60px;

}

.prec button {
    background-color: white;

    margin-left: 25px;
    margin-top: 25px;
    border: none;
}

.prec button img {
    width: 35px;
    height: 35px;
}

.tete img {
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

.search__container1 {
    display: flex;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 780px;
    height: 50px;
    margin-left: 140px;
    margin-top: 70px;
}

.search__container3 {
    display: flex;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 850px;
    height: 50px;
    margin-left: 140px;
    margin-top: 70px;
}

.search__container3 {
    display: flex;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 980px;
    height: 50px;
    margin-left: 50px;
    margin-top: 70px;
}

.search__input {
    border: none;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding: 5px;
    font-size: 15px;
    color: gray;
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

.adde button {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px dotted;
    margin-left: 20px;
}

.adde button img {
    width: 20px;
    height: 20px;
}

.added {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 15px;
    border: #03c6c1 3px solid;
    margin-left: 20px;
    margin-top: 10px;
}

.added img {

    width: 10px;
    height: 10px;
}

#nexxt {
    margin-left: 580px;
    margin-top: 50px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #03c6c1;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}

#nexxt1 {
    margin-left: 800px;
    margin-top: 50px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #03c6c1;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}

.search1 {
    border: 1px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding-left: 10px;
    margin-right: 5px;
    font-size: 15px;
    color: gray;
}

.search2 {
    border: 1px solid gray;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding-left: 10px;
    font-size: 15px;
    color: gray;
}

.search3 {
    border: 1px solid gray;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding-left: 10px;
    width: 100px;
    margin-right: 5px;
    font-size: 15px;
    color: gray;
}

.d {
    width: 50%;
    border-radius: 15px;
    border: 1px solid #03c6c1;
    height: 400px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #03c6c1 #ffffff;
}

#precc {

    margin-left: 150px;
    margin-top: 50px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: gray;
    border-radius: 10px;
    border: none;
    font-size: 16px;

}


.search__container2 {
    display: flex;
    border: #03c6c1 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    width: 740px;
    height: 50px;
    margin-left: 160px;
    margin-top: 70px;
}

.search__input2 {
    border: none;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding: 5px;
    font-size: 15px;
    color: gray;
}

.search__icon2 {
    width: 35px;
    height: 35px;
    padding: 5px;
}

.search__icon2 img {
    width: 100%;
    height: 100%;
}

.adde2 button {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    background-color: transparent;
    border: none;
}

.adde2 button img {
    width: 40px;
    height: 40px;
}

.adde3 button {
    width: 50px;
    height: 50px;
    margin-left: 0px;
    background-color: transparent;
    border: none;
}

.adde3 button img {
    width: 40px;
    height: 40px;
}

#states {
    margin-left: 35px;
    width: 300px;
    height: 35px;
    font-family: Poppins;
    font-size: 16px;
    background-color: #03c6c1;
    color: white;
    border-radius: 05px;
    border: #03c6c1 1px solid;
    margin-top: 35px;
    padding-left: 15px;
}

#states option {
    border-radius: 05px;
    font-family: Poppins;
    font-size: 16px;
    color: rgb(134, 134, 134);
}
</style>