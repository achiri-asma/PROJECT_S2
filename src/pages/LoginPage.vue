<template>
    <div class="container">
        <form @submit.prevent="login" class="form">

            <p id="title">Welcome back</p>
            <p id="subtitle">Log into your account to continue</p>

            <label for="email"><img src="../assets/email.png" alt="email" id="email"></label>
            <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Email"
                pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" id="i1" />
            <div class="control">
                <small v-if="$refs.emailInput && $refs.emailInput.validity.valueMissing">The email is required </small>
                <small v-if="$refs.emailInput && $refs.emailInput.validity.patternMismatch">Enter a valid addres
                    email</small>
            </div>

            <label for="password"><img src="../assets/padlock.png" alt="password" id="password"></label>
            <input ref="passwordInput" type="password" v-model="password" name="password" required minlength="8"
                placeholder="Password" id="i2" />
            <div class="control">
                <small v-if="$refs.passwordInput && $refs.passwordInput.validity.valueMissing">The password is
                    required</small>
                <small v-if="$refs.passwordInput && $refs.passwordInput.validity.tooShort">Enter a valid password </small>
            </div>

            <div class="remember_me">
                <input type="checkbox"  v-model="rememberMe" />
                <label for="rememberMe" id="rememberMe">Remember Me</label>
                <router-link to="/fg-pass" id="link">Forgot password ?</router-link>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="inscr">
                <p id="subsubtitle">Don't have an account ? <router-link to="/signup" id="link">Sign up</router-link></p>
            </div>

        </form>
    </div>
</template>

<script>
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
    background-image: url('https://s3-alpha-sig.figma.com/img/19cd/1208/83c421e7c6825c17baa765bef915491e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NSvRA-LorJK7lUoMKudhsxWsKTDLVNe3wrhuTcQsmEYENGdi-LJ16ch2~vY1kccHmJZo7Exw5QM1ctwFd7I5IGT55EpbpPHvPjULUgNiNYToKWESRvsv79cuqTM5YecbKDg99oZRbyImDIgECHFsIAR3u7oFx2eRtQHUyGKtXkFiviweFoWy3Rr2q2rmAOJTU1ysTI8ZMFzIDBMBzfsc4ohw1w-RIgXZUKvp9EnCF6v8eFtBIaHwf5pwF1AFOrPlbFHbVt5Z-dDp3V2INcNk3ynYGcNry7ic9zQq3BX0ivevU-P5TkqkzMj8c41EOPS~MhAN-4bApk9oFcIFIQfCWA__');
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    width: 420px;
    height: 425px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
}

#title {
    font-family: Poppins;
    text-align: center;
    font-size: 40px;
    margin-top: 18px;
}

#subtitle {
    font-family: Poppins;
    text-align: center;
    font-size: 16px;
    margin-top: -45px;
    color: gray;
}
#email{
    margin-top: 25px;
    width:19px;
    height:19px;
    margin-left:35px;
}
#password{
    margin-top: 25px;
    width:19px;
    height:19px;
    margin-left:35px;

}

#i1,
#i2 {
    border: none;
    border-bottom: 0.5px solid;
    background-color: transparent;
    width: 340px;
    margin-left: 35px;
    margin-top: -24px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: rgb(75, 74, 74);
    padding-left: 30px;
}
.remember_me{
    margin-left: 35px;
    margin-top: 25px;
    font-family: Poppins;
    font-size: 4;
}
#rememberMe{
    margin-right: 55px;
    color:gray;

}
.control small{
    color:red;
    font-size: 14px;
    font-family: Poppins;
    margin-top: 0px;
    margin-left: 35px;
}
.btn{
    width:340px;
    height: 56px;
    margin-top: 25px;
    margin-left: 35px;
    border-radius: 20px;
    border: none;
    background-color: #03C6C1;
    color:white;
    font-size: 16px;
    font-family: Poppins;
}

.inscr{
    margin-left: 90px;
    color:gray;
} 

#subsubtitle{
    font-size: 14px;
    font-family: Poppins;
}
#link{
    color:#03C6C1;
    text-decoration: none;
}
@media screen and (max-width: 600px) {
    .form {
        width: 80%;
    }
}</style>
