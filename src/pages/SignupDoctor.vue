<template>
    <div class="containerr">
        <form class="form2" v-show="currentStep === 1" >
            <p id="title">Welcome</p>
            <p id="subtitle">Join our platform to manage <br /> appointments and connect with patients</p>
            <div class="stepper-wrapper">
                <div class="stepper-item completed">
                    <div class="step-counter"><img src="../assets/one.png" alt="one" /></div>
                    <div class="step-name">Required <br /> Information</div>
                </div>
                <div class="stepper-item active">
                    <div class="step-counter"><img src="../assets/two.png" alt="two" /></div>
                    <div class="step-name">Additional Information <br /> (Optional)</div>
                </div>
                <div class="stepper-item active">
                    <div class="step-counter"><img src="../assets/three.png" alt="three" /></div>
                    <div class="step-name">Office <br /> Information</div>
                </div>

            </div>

            <label for="nom"><img src="../assets/user.png" alt="profil" id="profil"></label>
            <input ref="nomInput" type="text" v-model="nom" name="nom" required minlength="4" placeholder="Full name"
                pattern="[a-zA-Z ]+" @blur="touched = true" id="i1" />
            <div class="controll">
                <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.valueMissing">The full name is
                    required</small>
                <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.tooShort">The full name must have at least
                    4
                    characters</small>
                <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.patternMismatch">The full name must
                    contain only
                    alphabetic characters</small>
            </div>

            <label for="email"><img src="../assets/email.png" alt="email" id="email"></label>
            <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Email"
                pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" @blur="touchedd = true" id="i2" />
            <div class="control">
                <small v-if="touchedd && $refs.emailInput && $refs.emailInput.validity.valueMissing">The email is
                    required</small>
                <small v-if="touchedd && $refs.emailInput && $refs.emailInput.validity.patternMismatch">Enter a valid
                    address
                    email</small>
            </div>

            <label for="password"><img src="../assets/padlock.png" alt="password" id="password"></label>
            <input ref="psInput" type="password" v-model="password" @blur="toucheddd = true" name="password" required
                placeholder="Password" minlength="8" id="i3" />
            <div class="controll">
                <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.valueMissing">The password is
                    required</small>
                <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.tooShort">The password must contain at
                    least 8
                    characters.
                </small>
            </div>

            <label for="nb_soc"><img src="../assets/user-experience.png" alt="nb_soc" id="nb_soc"></label>
            <input ref="nbInput" type="text" v-model="number" name="nb_soc" required
                placeholder="Medical registration number" minlength="10" pattern="[0-9]+" @blur="toucheddddd = true"
                id="i5" />
            <div class="controll">
                <small v-if="toucheddddd && $refs.nbInput && $refs.nbInput.validity.valueMissing">the social security number
                    is
                    required</small>
                <small v-if="toucheddddd && $refs.nbInput && $refs.nbInput.validity.tooShort">The password must contain at
                    least 8 characters
                </small>
            </div>

            <label for="spec"><img src="../assets/registration.png" alt="speciality" id="profil"></label>
            <input ref="spInput" type="text" v-model="spec" name="spec" required minlength="4" placeholder="Speciality"
                pattern="[a-zA-Z ]+" @blur="touch = true" id="i1" />
            <div class="controll">
                <small v-if="touch && $refs.spInput && $refs.spInput.validity.valueMissing">The speciality is
                    required</small>
                <small v-if="touch && $refs.spInput && $refs.spInput.validity.tooShort">The speciality must have at least
                    4 characters</small>
                <small v-if="touch && $refs.spInput && $refs.spInput.validity.patternMismatch">The speciality must
                    contain only alphabetic characters</small>
            </div>

            <label for="date"><img src="../assets/quality.png" alt="experience" id="cl"></label>
            <input ref="dtInput" type="text" v-model="date" name="date" @blur="tou = true" required placeholder="Experience"
                pattern="\d{4}" id="i6" />
            <div class="controll">
                <small v-if="tou && $refs.dtInput && $refs.dtInput.validity.valueMissing">The date is required</small>
                <small v-if="tou && $refs.dtInput && $refs.dtInput.validity.patternMismatch">The date must be in correct
                    format</small>
            </div>

            <button  class="btnn1" @click.prevent="nextStep">Next <img src="../assets/next-g.png" id="next"/></button>
            <div class="inscr">
                <p id="subsubtitle">Already have an account ? <router-link to="/login" id="link">Log in</router-link>
                </p>
            </div>

        </form>

        <form class="form2" v-show="currentStep === 2" >
            <p id="title">Welcome</p>
            <p id="subtitle">Join our platform to manage <br /> appointments and connect with patients</p>
            <div class="stepper-wrapper">
                <div class="stepper-item completed">
                    <div class="step-counter"><img src="../assets/check.png" alt="check" /></div>
                    <div class="step-name">Required <br /> Information</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter"><img src="../assets/2.png" alt="two" /></div>
                    <div class="step-name">Additional Information <br /> (Optional)</div>
                </div>
                <div class="stepper-item active">
                    <div class="step-counter"><img src="../assets/three.png" alt="three" /></div>
                    <div class="step-name">Office <br /> Information</div>
                </div>

            </div>
            <div class="image-upload-container">
                <label for="image" class="lb">
                    Upload Personal Picture
                    <img src="../assets/pointing-to-right.png" alt="hand" id="hand">
                </label>
                <label for="i" class="custom-file-input">
                    <img src="../assets/camera.png" alt="Camera Icon" class="camera-icon">
                </label>
                <input ref="mgInput" type="file" accept=".jpg, .jpeg, .png" @change="handleImageUpload" name="image"
                    required @blur="tou1 = true" id="i" />
                <div class="controll">
                    <small v-if="tou1 && imageUploadError">The image is required</small>
                </div>
            </div>

            <label for="tel"><img src="../assets/telephone.png" alt="telephone" id="tel"></label>
            <input ref="tellInput" type="tel" v-model="telephone" @blur="tou2 = true" name="tel" required
                placeholder="Phone number" pattern="^(07|06|05)[0-9]{8}$" id="i7" />
            <div class="controll">
                <small v-if="tou2 && $refs.tellInput && $refs.tellInput.validity.valueMissing">The phone number is
                    required</small>
                <small v-if="tou2 && $refs.tellInput && $refs.tellInput.validity.tooShort">The phone number must have 10
                    digits
                </small>
                <small v-if="tou2 && $refs.tellInput && $refs.tellInput.validity.patternMismatch">The phone number must be
                    in
                    correct format</small>
            </div>


            <textarea ref="additionalInfoInput" v-model="additionalInfo" name="additionalInfo"
                placeholder="Briefly describe your professional background and any relevant information you'd like to share"
                rows="3" cols="45" @blur="additionalInfoTouched = true" id="ii"></textarea>
            <div class="controll">
                <small v-if="additionalInfoTouched && !additionalInfo.trim()">
                    Additional information is required
                </small>

            </div>
            <div class="but">
            <button  class="btn2" @click.prevent="previousStep"> <img src="../assets/next-d.png" id="next"/> Back  </button>
            <button  class="btn1" @click.prevent="nextStep">Next <img src="../assets/next-g.png" id="next"/> </button>
        </div>
            <div class="inscr">
                <p id="subsubtitle">Already have an account ? <router-link to="/login" id="link">Log in</router-link>
                </p>
            </div>

        </form>

        <form class="form2" v-show="currentStep === 3">
            <p id="title">Welcome</p>
            <p id="subtitle">Join our platform to manage <br /> appointments and connect with patients</p>
            <div class="stepper-wrapper">
                <div class="stepper-item completed">
                    <div class="step-counter"><img src="../assets/check.png" alt="check" /></div>
                    <div class="step-name">Required <br /> Information</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter"><img src="../assets/check.png" alt="check" /></div>
                    <div class="step-name">Additional Information <br /> (Optional)</div>
                </div>
                <div class="stepper-item active">
                    <div class="step-counter"><img src="../assets/3.png" alt="three" /></div>
                    <div class="step-name">Office <br /> Information</div>
                </div>

            </div>
            <div class="image-upload-container">
                <label for="image" class="lb">
                    Upload Office Picture
                    <img src="../assets/pointing-to-right.png" alt="hand" id="hand">
                </label>
                <label for="i" class="custom-file-input">
                    <img src="../assets/camera.png" alt="Camera Icon" class="camera-icon">
                </label>
                <input ref="mgInput" type="file" accept=".jpg, .jpeg, .png" @change="handleImageUpload2" name="image"
                    required @blur="tou1 = true" id="i" />
                <div class="controll">
                    <small v-if="tou1 && imageUploadError">The image is required</small>
                </div>
            </div>

            <label for="telll"><img src="../assets/telephone.png" alt="telephone" id="tel"></label>
            <input ref="telllInput" type="tel" v-model="telephonee" @blur="tou3 = true" name="telll" required
                placeholder="Landline number" pattern="^(0)[0-9]{8}$" id="i7" />
            <div class="controll">
                <small v-if="tou3 && $refs.telllInput && $refs.telllInput.validity.valueMissing">The phone number is
                    required</small>
                <small v-if="tou3 && $refs.telllInput && $refs.telllInput.validity.tooShort">The phone number must have 10
                    digits
                </small>
                <small v-if="tou3 && $refs.telllInput && $refs.telllInput.validity.patternMismatch">The phone number must be
                    in
                    correct format</small>
            </div>

            <div class="address-container">
                <label for="address"><img src="../assets/address.png" alt="address" id="address"></label>
                <input ref="stInput" type="text" v-model="state" @blur="touc = true" name="address" required
                    placeholder="State" minlength="4" pattern="[a-zA-Z ]+" id="i11" />
                <input ref="ctInput" type="text" v-model="city" @blur="touc1 = true" name="address" required
                    placeholder="City" minlength="4" pattern="[a-zA-Z ]+" id="i12" />
                <input ref="sttInput" type="text" v-model="street" @blur="touc2 = true" name="address" required
                    placeholder="Street" minlength="4" pattern="[a-zA-Z ]+" id="i13" />
            </div>

            <div class="controll">
                <small v-if="touc && $refs.stInput && $refs.stInput.validity.valueMissing">The state is required</small>
                <small v-if="touc && $refs.stInput && $refs.stInput.validity.tooShort">The state must contain at least 8
                    characters.
                </small>
                <small v-if="touc && $refs.cstInput && $refs.stInput.validity.patternMismatch">The state must contain only
                    alphabetic characters</small>
                <small v-if="touc1 && $refs.ctInput && $refs.ctInput.validity.valueMissing">The city is required</small>
                <small v-if="touc1 && $refs.ctInput && $refs.ctInput.validity.tooShort">The city must contain at least 8
                    characters.
                </small>
                <small v-if="touc1 && $refs.ctInput && $refs.ctInput.validity.patternMismatch">The city must contain only
                    alphabetic characters</small>
                <small v-if="touc2 && $refs.sttInput && $refs.sttInput.validity.valueMissing">The street is required</small>
                <small v-if="touc2 && $refs.sttInput && $refs.sttInput.validity.tooShort">The street must contain at least 8
                    characters.
                </small>
                <small v-if="touc2 && $refs.sttInput && $refs.sttInput.validity.patternMismatch">The street must contain
                    only
                    alphabetic characters</small>
            </div>

            <div class="terms">
                <input v-model="terms" type="checkbox">
                <label for="terms"> I agree to the <span>terms and conditions</span></label>
            </div>
            <div class="but">
            <button  class="btn2" @click.prevent="previousStep"> <img src="../assets/next-d.png" id="next"/>Back </button>
            <button @click="signup"  class="btn1">Sign up </button>
        </div>
            <div class="inscr">
                <p id="subsubtitle">Already have an account ? <router-link to="/login2" id="link">Log in</router-link>
                </p>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            nom: '',
            email: '',
            password: '',
            number: '',
            spec: '',
            date: '',
            telephone: '',
            telephonee: '',
            additionalInfo:'',
            street: '',
            city: '',
            state: '',
            currentStep: 1,
            stepStatus: ['active', '', ''],
            touched: false,
            touchedd: false,
            toucheddd: false,
            toucheddddd: false,
            touch: false,
            tou: false,
            tou1: false,
            tou2: false,
            touc: false,
            touc1: false,
            touc2: false,
            terms: false
        };
    },
    methods: {
        handleImageUpload(event) {
            // Logique pour le premier champ de fichier
          const  image=event.target.files[0];
          console.log(image);
        },
        handleImageUpload2(event) {
            // Logique pour le deuxième champ de fichier
            const image2= event.target.files[0];
            console.log(image2);
        },
        validateStep1() {
            return (
                this.nom.length >= 4 &&
                this.email.length > 0 &&
                this.email.match(/[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$/) &&
                this.password.length >= 8
            );
        },
        validateStep2() {
            return (
                this.number.length >= 10 &&
                this.number.match(/[0-9]+/) &&
                this.spec.length >= 4 &&
                this.spec.match(/[a-zA-Z ]+/) &&
                this.date.length === 4 &&
                this.date.match(/\d{4}/)

            );
        },
        validateCurrentStep() {
            switch (this.currentStep) {
                case 1:
                    return this.validateStep1();
                case 2:
                    return this.validateStep2();
                default:
                    return true;
            }
        },
        previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    },
        nextStep() {
            if (this.validateCurrentStep()) {
                const previousStep = this.currentStep - 1;
                this.stepStatus[previousStep] = 'completed';
                this.currentStep++;
            }
        },
        signup(){
            if(this.terms){
                const formData = {
        fullname: this.nom,
        email: this.email,
        password: this.password,
        biographie:this.additionalInfo,
        experience:this.date,
        phone:this.telephone,
        speciality:this.spec,
        

      };

      axios.post("http://localhost:7777/service-profile/api/medecinregister", formData)
        .then(() => {
          alert("Enregistré avec succès !");
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement des données :", error);
        });
    
            }
            else{
                alert("signup failed");
            }
        }
    },
};
</script>

<style>
.containerr {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: -8px;
    margin-left: -8px;
    background-image: url("../assets/background2.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.form2 {
    width: 420px;
    height: 650px;
    padding: 20px;
    border: 1px solid rgb(171, 171, 171);
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
    font-family: Poppins;
}

.stepper-wrapper {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.stepper-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    font-family: Poppins;

    @media (max-width: 600px) {
        font-size: 12px;
    }
}

.stepper-item::before,
.stepper-item::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid rgb(171, 171, 171);
    width: 100%;
    top: 20px;
    font-family: Poppins;
}

.stepper-item::before {
    left: -50%;
    z-index: 2;
}

.stepper-item::after {
    left: 50%;
    z-index: 2;
}

.stepper-item .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:  rgb(171, 171, 171);
    margin-bottom: 6px;
    font-family: Poppins;
}

.stepper-item.active {
    font-weight: 500;
}

.stepper-item.completed .step-counter {
    background-color: #03C6C1;
    font-weight: 700;
    font-size: 16px;
}

.stepper-item.completed::after {
    border-bottom: 2px solid #03C6C1;
}

.stepper-item:first-child::before,
.stepper-item:last-child::after {
    content: none;
}

.step-name {
    font-size: 12px;
    color: rgb(99, 97, 97);
    text-align: center;
    font-weight: bold;
}

.image-upload-container {
    display: flex;
    align-items: center;
    margin-top: 45px;
}

.lb {
    text-decoration: underline;
    margin-left: 35px;
    font-size: 14px;
    color: rgb(99, 97, 97);
}

#hand {
    margin-left: 10px;
    width: 19px;
    height: 19px;
}

#i {
    display: none;
}

.custom-file-input {
    display: inline-block;
    cursor: pointer;
    color: #fff;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: 2px dashed rgb(99, 97, 97);
    margin-left: 65px;
}

.camera-icon {
    width: 50px;
    height: 50px;
    margin-left: 15px;
    margin-top: 15px;
}

#ii {
    margin-left: 35px;
    margin-top: 45px;
    background-color: transparent;
    border-radius: 14px;
    padding-left: 16px;
    padding-top: 12px;
    color: rgb(99, 97, 97);
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #8e8e8e;
    font-size: 14px;
    font-family: Poppins;
    width: 320px;
}
.but {
    display: flex;
    justify-content: space-between;
    width:350px;
    margin-left: 35px;
}

.btn1, .btn2 {
    width: 115px;
    height: 50px;
    border-radius: 20px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 700;
    border:none;
    
}

.btn1 {
    background-color: #03C6C1;
    border: none;
    color: white;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
    display:flex;
    gap: 8px;
    padding-left: 15px;

}

.btn2 {
    background-color: white;
    color: rgb(99, 97, 97);
    margin-top: 34px;
    padding-left: -15px;
    align-items: center;
    justify-content: center;
    display:flex;
    gap:8px;
}
.btnn1{
    width: 115px;
    height: 50px;
    border-radius: 20px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 700;
    background-color: #03C6C1;
    border: none;
    color: white;
    margin-top: 35px;
    margin-left: 265px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; /* Adjust the gap as needed */
    padding-left: 15px;
}
#next{
    width:25px;
    height:25px;
}
</style>