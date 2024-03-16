<template>
    <div class="container">
        <form @submit.prevent="login" class="form">

            <p id="title">Welcome back</p>
            <p id="subtitle">Log in to your account to continue</p>

            <label for="email"><img src="../assets/email.png" alt="email" id="email"></label>
            <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Email"
                pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" @blur="touched = true" id="i1" />
            <div class="control">
                <small v-if="touched && $refs.emailInput && $refs.emailInput.validity.valueMissing">The email is required
                </small>
                <small v-if="touched && $refs.emailInput && $refs.emailInput.validity.patternMismatch">Enter a valid addres
                    email</small>
            </div>

            <label for="password"><img src="../assets/padlock.png" alt="password" id="password"></label>
            <input ref="passwordInput" type="password" v-model="password" name="password" required minlength="8"
                placeholder="Password" @blur="touchedd = true" id="i2" />
            <div class="control">
                <small v-if="touchedd && $refs.passwordInput && $refs.passwordInput.validity.valueMissing">The password is
                    required</small>
                <small v-if="touchedd && $refs.passwordInput && $refs.passwordInput.validity.tooShort">Enter a valid
                    password </small>
            </div>

            <div class="remember_me">
                <input type="checkbox" v-model="rememberMe" />
                <label for="rememberMe" id="rememberMe">Remember Me</label>
                <router-link to="/fg-pass1" id="link">Forgot password ?</router-link>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="inscr">
                <p id="subsubtitle">Don't have an account ? <router-link to="/signup" id="link">Sign up</router-link></p>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false,
        };

    },
    mounted() {
        if (localStorage.getItem('rememberData')) {
            const savedData = JSON.parse(localStorage.getItem('rememberData'));
            this.email = savedData.email;
            this.password = savedData.password;
            this.rememberMe = savedData.rememberMe;
        }
    },
    methods: {
        login() {
            if (this.rememberMe) {
                const dataToSave = {
                    email: this.email,
                    password: this.password,
                    rememberMe: this.rememberMe,
                };
                localStorage.setItem('rememberData', JSON.stringify(dataToSave));
            } else {
                localStorage.removeItem('rememberData');
            }

            const data={
                email:this.email,
                password:this.password
            }
            axios.get('http://localhost:7777/service-profile/api/patient/signin', data)
  .then(response => {
    const result = response.data; // Récupérer les données renvoyées par l'API
    console.log('Résultat de l\'API:', result);

    // Afficher un message d'alerte pour indiquer que la connexion a réussi
    alert("Connexion réussie");
  })
  .catch(error => {
    // Gérer les erreurs
    console.error('Erreur lors de la requête:', error);
    alert(error); // Afficher l'erreur dans une alerte
  });


        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: -8px;
    margin-left: -8px;
    background-image: url("../assets/background1.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    width: 420px;
    height: 395px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
}

#title {
    font-family: Poppins;
    text-align: center;
    font-size: 40px;
    margin-top: 10px;
}

#subtitle {
    font-family: Poppins;
    text-align: center;
    font-size: 16px;
    margin-top: -45px;
    color: gray;
}

#email {
    margin-top: 25px;
    width: 19px;
    height: 19px;
    margin-left: 35px;
}

#password {
    margin-top: 25px;
    width: 19px;
    height: 19px;
    margin-left: 35px;

}

#i1,
#i2 {
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

.remember_me {
    margin-left: 35px;
    margin-top: 25px;
    font-family: Poppins;
    font-size: 14px;
}

#rememberMe {
    margin-right: 85px;
    color: gray;

}

.control small {
    color: red;
    font-size: 14px;
    font-family: Poppins;
    margin-top: 0px;
    margin-left: 35px;
}

.btn {
    width: 340px;
    height: 56px;
    margin-top: 25px;
    margin-left: 35px;
    border-radius: 20px;
    border: none;
    background-color: #03C6C1;
    color: white;
    font-size: 16px;
    font-family: Poppins;
}

.inscr {
    margin-left: 90px;
    color: gray;
}

#subsubtitle {
    font-size: 14px;
    font-family: Poppins;
}

#link {
    color: #03C6C1;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    .form {
        width: 80%;
    }
}
</style>
