<template>
    <div class="editprofil3">
        <form><!--@submit.prevent="updateProfile3"-->
            <h1>Edit Profile</h1>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input type="email" v-model="email" placeholder="exemple@gmail.com"><br>
                    <input type="tel" v-model="phone" placeholder="0799567439">
                </div>
                <img src="../assets/image3.png">
            </div>
            <input type="text" v-model="wilaya" placeholder="Sidi bel abbes">&nbsp;
            <input type="text" v-model="commune" placeholder="Sidi bel abbes">&nbsp;
            <input type="text" v-model="rue" placeholder=" wiam BP 73 ">
            <div class="buttons">
                <button class="cancel" @click="CancelEdit">Cancel</button>
                <button type="submit" class="save">Save <img src="../assets/diskette.png"> </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    props : [ 'userId', 'userInfo' ],
    data() {
        return {
            email: '',
            phone: '',
            wilaya: '',
            commune: '',
            rue: ''
        }
    },
    watch: {
        userInfo: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.email= newValue.email
                this.phone= newValue.phone
                this.wilaya= newValue.adresse.wilaya
                this.commune= newValue.adresse.commune
                this.rue= newValue.adresse.rue
            }
        }
    },
    methods : {
        CancelEdit() {
            this.$emit('edit-profile')
        },
        updateProfile3() {
            const formData = {
            email: this.email,
            phone: this.phone,
            adr: {
                wilaya: this.wilaya,
                commune: this.commune,
                rue: this.rue
            }
            }
            axios.put(`http://localhost:7777/service-profile/api/update/patient/${this.userId}/cordonnee`, formData)
            .then(response => {
                console.log(response.data)
                this.CancelEdit()
            })
        } 
    }
}
</script>

<style>
    .editprofil3 > form{
        width: 47%;
        height: 430px;
    }
    .editprofil3 .editinputs{
        margin: 40px 80px;
    }
    .editprofil3 .editinputs input:last-child{
        margin-top: 40px;
    }
    .editprofil3 .editinputs + input{
        margin-top: 0;
    }
</style>