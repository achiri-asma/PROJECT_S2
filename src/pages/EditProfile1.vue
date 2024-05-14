<template>
    <div class="editprofil1">
        <form @submit.prevent="updateProfile1">
            <h1>Edit Profile</h1>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input type="email" v-model="email" placeholder="exemple@gmail.com"><br>
                    <input type="tel" v-model="phone" placeholder="0799567439">
                </div>
                <img v-if="image" :src="image">
                <img v-else src="../assets/image3.png"/>
                <input type="file" ref="fileInput" @change="handleFileUpload1" style="display: none">
                <div class="modify" @click="modify">Modify</div>
            </div>
            <textarea name="textarea1" rows="6" v-model="biographie" placeholder="Edit your biography as needed."></textarea>
            <div class="buttons">
                <button type="button" class="cancel" @click="CancelEdit">Cancel</button>
                <button type="submit" class="save">Save <img src="../assets/diskette.png"> </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    props : [ 'medecinId', 'medecinInfo' ],
    data() {
        return {
            email: '',
            phone: '',
            biographie: '',
            image: '',
            imagesent: '',
            file: ''
        }
    },
    watch: {
        medecinInfo: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.email= newValue.email
                this.phone= newValue.phone
                this.biographie= newValue.biographie
                if (newValue.image) {
                    axios.get(`http://localhost:7777/service-profile/api/image/${newValue.image}`, {
                        responseType: 'blob'
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.image = URL.createObjectURL(response.data)
                        } else {
                            throw new Error('Image not found')
                        }
                    })
                } else {
                    this.image= newValue.image
                }
            }
        }
    },
    methods : {
        CancelEdit() {
            this.$emit('edit-profile')
        },
        modify() {
            this.$refs.fileInput.click();
        },
        handleFileUpload1(event) {
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
        updateProfile1() {
            const Imagefile = new FormData()
            Imagefile.append('file', this.file)
            const formData = {
            email: this.email,
            image: this.imagesent,
            phone: this.phone,
            bio: this.biographie,
            }
            console.log(formData)
            axios.post('http://localhost:7777/service-profile/api/update/upload', Imagefile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            axios.put(`http://localhost:7777/service-profile/api/update/medecin/${this.medecinId}/cordonnee`, formData)
            .then(response => {
                console.log(response.data)
                this.$emit('medecin-profile-updated', response.data)
                this.CancelEdit()
                window.location.reload();
            })
        } 
    }
}
</script>

<style>
    .editprofil1, .editprofil2, .editprofil3{
        backdrop-filter: brightness(85%);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .editprofil1 > form, .editprofil2 > form, .editprofil3 > form{
        width: 40%;
        height: 550px;
        text-align: center;
        background-color: white;
        opacity: 90%;
        border-radius: 30px;
        margin: 90px auto;
        box-sizing: border-box;
        padding: 20px 40px;
    }
    .editprofil1 h1, .editprofil2 h1, .editprofil3 h1{
        font-weight: 400;
    }
    .editprofil1 .editinputs, .editprofil3 .editinputs{
        display: flex;
        justify-content: space-between;
        margin: 40px;
        position: relative;
    }
    .editprofil1 .editinputs input, .editprofil2 input, .editprofil3 input{
        border: none;
        border-bottom: 0.5px solid rgb(99, 97, 97);
        color: #03c6c1;
        box-sizing: border-box;
        padding-left: 40px;
    }
    .editprofil1 .editinputs input::placeholder, .editprofil2 input::placeholder, .editprofil3 input::placeholder{
        color: #03c6c1;
    }
    .editprofil1 input:focus, .editprofil2 input:focus, .editprofil3 input:focus{
        outline: none;
    }
    .editprofil1 .editinputs input:first-child, .editprofil3 .editinputs input:first-child{
        background: url(../assets/email.png) no-repeat;
        background-size: 8%;
        margin-top: 20px;
    }
    .editprofil1 .editinputs input:last-child, .editprofil3 .editinputs input:last-child{
        background: url(../assets/telephone.png) no-repeat;
        background-size: 8%;
        margin-top: 20px;
    }
    .editprofil1 .editinputs img, .editprofil2 form > img, .editprofil3 .editinputs img{
        width: 100px;
        height: 100px;
        border: 2px dashed black;
        border-radius: 50px;
    }
    .editprofil1 .modify, .editprofil3 .modify{
        width: 104px;
        color: rgb(9, 9, 9);
        background-color: rgb(217, 217, 217, 0.6);
        position: absolute;
        right: 0;
        top: 40%;
    }
    .editprofil1 textarea{
        width: 85%;
        resize: none;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 40px;
    }
    .editprofil1 textarea::-webkit-scrollbar{
        width: 10px;
    }
    .editprofil1 textarea::-webkit-scrollbar-thumb{
        background: rgb(0, 0, 0, 0.5);
        border-radius: 10px;
    }
    .editprofil1 .buttons, .editprofil2 .buttons, .editprofil3 .buttons{
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .editprofil1 .buttons .cancel, .editprofil1 .buttons .save, .editprofil2 .buttons .cancel, .editprofil2 .buttons .save, .editprofil3 .buttons .cancel, .editprofil3 .buttons .save{
        border-radius: 10px;
        font-size: 16px;
        letter-spacing: 0.08em;
        box-sizing: border-box;
        padding: 10px 15px;
    }
    .editprofil1 .buttons .cancel, .editprofil2 .buttons .cancel, .editprofil3 .buttons .cancel{
        background-color: white;
        border: 0.5px solid rgba(0, 0, 0, 0.5);
        color: rgb(0, 0, 0, 0.8);
    }
    .editprofil1 .buttons .save, .editprofil2 .buttons .save, .editprofil3 .buttons .save{
        background-color: #03c6c1;
        border: 0.5px solid #03c6c1;
        color: white;
        display: flex;
        align-items: center;
    }
    .editprofil1 .buttons .save img, .editprofil2 .buttons .save img, .editprofil3 .buttons .save img{
        width: 15px;
        height: 15px;
    }
</style>