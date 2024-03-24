<template>
  <div class="container2">
    <form class="form" @submit.prevent="next">
      <p id="titlle">Reset your password</p>
      <p id="subtitle2">Kindly provide the email address <br /> linked to your account</p>

      <label for="email"><img src="../assets/email.png" alt="email" id="email"></label>
      <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Email"
        pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" @blur="touched = true" id="i1" />
      <div class="control">
        <small v-if="touched && $refs.emailInput && $refs.emailInput.validity.valueMissing">The email is required
        </small>
        <small v-if="touched && $refs.emailInput && $refs.emailInput.validity.patternMismatch">Enter a valid addres
          email</small>
      </div>

      <button type="submit" class="bttn">Reset password</button>
      <div class="inscrr">
        <p id="subsubtitle">Back to <router-link to="/login" id="link">Log in</router-link></p>
      </div>
    </form>
  </div>
</template>
<script>
import router from '@/router';
export default {
  data() {
    return {
      email: '',
      touched: false
    };
  },
  methods: {
    next() {
      const email = this.email;
      router.push({ name: 'ResetPassword2', params: { email } });

    }
  }
}

</script>

<style>
#titlle {
  font-family: Poppins;
  text-align: center;
  font-size: 35px;
  margin-top: 35px;
}

#subtitle2 {
  font-family: Poppins;
  text-align: center;
  font-size: 16px;
  color: gray;
}

.bttn {
  width: 340px;
  height: 56px;
  margin-top: 55px;
  margin-left: 35px;
  border-radius: 20px;
  border: none;
  background-color: #03C6C1;
  color: white;
  font-size: 16px;
  font-family: Poppins;
}

.inscrr {
  margin-top: 15px;
  margin-left: 155px;
  color: gray;

}
</style>
