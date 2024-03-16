<template>
    <div class="container">
   <form class="form" @submit.prevent="next">
     <p id="titlle">Reset your password</p>
     <p id="subtitlle">Create a new password for your  <br/>account</p>

    
     <label for="password"><img src="../assets/padlock.png" alt="password" id="password"></label>
      <input ref="psInput" type="password" v-model="password" @blur="toucheddd = true" name="password" required
        placeholder="Password" minlength="8" id="i3" />
      <div class="controll">
        <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.valueMissing">The password is required</small>
        <small v-if="toucheddd && $refs.psInput && $refs.psInput.validity.tooShort">The password must contain at least 8
          characters.
        </small>
      </div>

     <button type="submit" class="bttn">Set new password</button>
            <div class="inscrr">
                <p id="subsubtitle">Back to <router-link to="/login" id="link">Log in</router-link></p>
            </div>
   </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      touched:false
    };
  },
  methods:{
    next(){

    }
  }
}

</script>

<style>
#titlle{
    font-family: Poppins;
    text-align: center;
    font-size: 35px;
    margin-top: 35px;
}
#subtitlle {
    font-family: Poppins;
    text-align: center;
    font-size: 16px;
    margin-top: -35px;
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
    margin-left: 155px;
    color: gray;
    
}
</style>

