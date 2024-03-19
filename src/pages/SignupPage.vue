<template>
  <div class="container">
    <form @submit.prevent="signup" class="form1">

      <p id="titllle">Welcome </p>
      <p id="subtitllle">Join our community today</p>

      <label for="nom"><img src="../assets/user.png" alt="profil" id="profil"></label>
      <input ref="nomInput" type="text" v-model="fullName" name="nom" required minlength="4" placeholder="Full name"
        pattern="[a-zA-Z ]+" @blur="touched = true" id="i1" />
      <div class="controll">
        <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.valueMissing">The full name is required</small>
        <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.tooShort">The full name must have at least 4
          characters</small>
        <small v-if="touched && $refs.nomInput && $refs.nomInput.validity.patternMismatch">The full name must contain only
          alphabetic characters</small>
      </div>

      <label for="email"><img src="../assets/email.png" alt="email" id="email"></label>
      <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Email"
        pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" @blur="touchedd = true" id="i2" />
      <div class="control">
        <small v-if="touchedd && $refs.emailInput && $refs.emailInput.validity.valueMissing">The email is required</small>
        <small v-if="touchedd && $refs.emailInput && $refs.emailInput.validity.patternMismatch">Enter a valid address
          email</small>
      </div>

      <label for="password"><img src="../assets/padlock.png" alt="password" id="password"></label>
      <input ref="psInput" type="password" v-model="password" @blur="toucheddd = true" name="password" required
        placeholder="Password" minlength="8" id="i3" />
      <div class="controll">
        <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.valueMissing">The password is required</small>
        <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.tooShort">The password must contain at least 8
          characters.
        </small>
      </div>

      <label for="cpassword"><img src="../assets/padlock.png" alt="password" id="password"></label>
      <input ref="pssInput" type="password" v-model="cpassword" @blur="touccheddd = true" name="cpassword" required
        placeholder="Confirm password" minlength="8" id="i3" />
      <div class="controll">
        <small v-if="touccheddd && $refs.pssInput && $refs.pssInput.validity.valueMissing">The confirmation of password is required</small>
        <small v-if="touccheddd && $refs.pssInput && $refs.pssInput.validity.tooShort">The password must contain at least 8
          characters.
        </small>
        <small v-if="touccheddd && !passwordsMatch">The confirmation password does not match.</small>

      </div>

      <label for="sexe"><img src="../assets/gender.png" alt="sexe" id="sexe"></label>
      <select v-model="sexe" name="sexe" @blur="touchedddd = true" required id="i4">
        <option value="" disabled selected hidden style="font-size: 14px;color:gray;">Sexe</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div class="controll">
        <small v-if="touchedddd && !sexe">The sexe is required</small>
      </div>

      <div class="address-container">
        <label for="address"><img src="../assets/address.png" alt="address" id="address"></label>
        <input ref="stInput" type="text" v-model="wilaya" @blur="touc = true" name="address" required placeholder="State"
          minlength="4" pattern="[a-zA-Z ]+" id="i11" />
        <input ref="ctInput" type="text" v-model="commune" @blur="touc1 = true" name="address" required placeholder="City"
          minlength="4" pattern="[a-zA-Z ]+" id="i12" />
        <input ref="sttInput" type="text" v-model="rue" @blur="touc2 = true" name="address" required
          placeholder="Street" minlength="4" pattern="[a-zA-Z0-9 ]+" id="i13" />
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
        <small v-if="touc2 && $refs.sttInput && $refs.sttInput.validity.patternMismatch">The street must contain only
          alphabetic characters</small>
      </div>

      <label for="nb_soc"><img src="../assets/user-experience.png" alt="nb_soc" id="nb_soc"></label>
      <input ref="nbInput" type="text" v-model="numSecuriteSociale" name="nb_soc" required placeholder="Social Security number"
        minlength="10" pattern="[0-9]+" @blur="toucheddddd = true" id="i5" />
      <div class="controll">
        <small v-if="toucheddddd && $refs.nbInput && $refs.nbInput.validity.valueMissing">the social security number is
          required</small>
        <small v-if="toucheddddd && $refs.nbInput && $refs.nbInput.validity.tooShort">The password must contain at least 8
          characters
        </small>
      </div>

      <label for="date"><img src="../assets/calendar.png" alt="calendare" id="cl"></label>
      <input ref="dtInput" type="text" v-model="dateOfBirth" name="date" @blur="touch = true" required
        placeholder="Date of birth yyyy-mm-dd" pattern="\d{4}-\d{2}-\d{2}" id="i6" />
      <div class="controll">
        <small v-if="touch && $refs.dtInput && $refs.dtInput.validity.valueMissing">The date is required</small>
        <small v-if="touch && $refs.dtInput && $refs.dtInput.validity.patternMismatch">The date must be in correct
          format</small>
      </div>

      <label for="tel"><img src="../assets/telephone.png" alt="telephone" id="tel"></label>
      <input ref="telInput" type="tel" v-model="phone" @blur="touche = true" name="tel" required placeholder="Phone number"
        pattern="^(07|06|05)[0-9]{8}$" id="i7" />
      <div class="controll">
        <small v-if="touche && $refs.telInput && $refs.telInput.validity.valueMissing">The phone number is
          required</small>
        <small v-if="touche && $refs.telInput && $refs.telInput.validity.tooShort">The phone number must have 10 digits
        </small>
        <small v-if="touche && $refs.telInput && $refs.telInput.validity.patternMismatch">The phone number must be in
          correct format</small>
      </div>

      <div class="terms">
        <input v-model="terms" type="checkbox">
        <label for="terms"> I agree to the <span>terms and conditions</span></label>
      </div>
      <button type="submit" class="btnn">Signup</button>
      <div class="inscr">
        <p id="subsubtitle">Already have an account ? <router-link to="/login1" id="link">Log in</router-link></p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      sexe: '',
      wilaya: '',
      commune: '',
      rue: '',
      numSecuriteSociale: '',
      dateOfBirth: '',
      phone: '',
      terms: false,
      cpassword: '',
    }
  },
  computed: {
    passwordsMatch() {
      return this.cpassword === this.password;
    }
  },
  methods: {
    signup() {
      if (this.terms) {
        const adresse = {
          wilaya: this.wilaya,
          commune: this.commune,
          rue: this.rue,
        };
        const signupData = {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          dateOfBirth: this.dateOfBirth,
          sexe: this.sexe,
          adresse,
          phone: this.phone,
          numSecuriteSociale: this.numSecuriteSociale,
        };

        axios.post(`http://localhost:7777/service-profile/api/registerUser`, signupData)
        .then((response) => {
          console.log(response.data);
          alert("Registered successfully");
        })
        .catch(error => {
          console.log(error);
          if (error.response && error.response.status === 404) {
        alert("NumSecuriteSociale does not exist");
    } else if (error.response && error.response.status === 500) {
        alert("Email already exist");
    } else {
        alert("An error occurred. Please try again later.");
    } // Affiche l'erreur dans la console pour un débogage supplémentaire
        });
      } else {
        alert('Accept the conditions ');
      }
    }
  }
}
</script>

<style>
.form1 {
  width: 420px;
  height: 660px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  margin-top: 5px;

}
#titllle {
    font-family: Poppins;
    text-align: center;
    font-size: 40px;
    margin-top: -15px;
}

#subtitllle {
    font-family: Poppins;
    text-align: center;
    font-size: 16px;
    margin-top: -10px;
    color: gray;
}

#profil {
  margin-top: 25px;
  width: 19px;
  height: 19px;
  margin-left: 35px;
}

#sexe {
  margin-top: 25px;
  width: 19px;
  height: 19px;
  margin-left: 35px;
}

#tel {
  margin-top: 25px;
  width: 19px;
  height: 19px;
  margin-left: 35px;
}


#nb_soc {
  margin-top: 25px;
  width: 19px;
  height: 19px;
  margin-left: 35px;
}

#cl {
  margin-top: 25px;
  width: 18px;
  height: 18px;
  margin-left: 35px;
}

#i1,
#i2,
#i3,
#i5,
#i6,
#i7 {
  border: none;
  border-bottom: 0.5px solid rgb(99, 97, 97);
  background-color: transparent;
  width: 310px;
  margin-left: 35px;
  margin-top: -24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: rgb(99, 97, 97);
  padding-left: 30px;
}

#i4 {
  border: none;
  border-bottom: 0.5px solid rgb(99, 97, 97);
  background-color: transparent;
  width: 340px;
  margin-left: 35px;
  margin-top: -24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: rgb(99, 97, 97);
  padding-left: 30px;
  background: rgba(255, 255, 255, 0.5);
}

#i11,
#i12,
#i13 {
  border: none;
  border-bottom: 0.5px solid rgb(99, 97, 97);
  font-size: 16px;
  margin-top: 24px;
  color: rgb(99, 97, 97);
background-color: transparent;
}

#i11 {
  margin-left: -30px;
  width: 80px;
  padding-left: 30px;
}

#i12 {
  margin-left: 15px;
  width: 95px;
}

#i13 {
  margin-left: 15px;
  width: 95px;
}

#address {
  width: 19px;
  height: 19px;
  margin-left: 35px;
  margin-right: 10px;
}


option {
  font-size: 14px;
  color: gray;

}

.terms {
  margin-left: 35px;
  margin-top: 25px;
  font-family: Poppins;
  font-size: 14px;
  color: gray;
}


span {
  color: #03C6C1;
}

.controll small {
  color: red;
  font-size: 14px;
  font-family: Poppins;
  margin-left: 35px;
}

.btnn {
  width: 340px;
  height: 56px;
  margin-top: 30px;
  margin-left: 35px;
  border-radius: 20px;
  border: none;
  background-color: #03C6C1;
  color: white;
  font-size: 16px;
  font-family: Poppins;
}
</style>
