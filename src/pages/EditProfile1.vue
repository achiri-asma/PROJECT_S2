<template>
    <div class="editprofil1">
        <form>
            <h1>Edit Profile</h1>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input placeholder="exemple@gmail.com"><br>
                    <input placeholder="0799567439">
                </div>
                <img src="../assets/image1.png">
            </div>
            <textarea name="textarea1" rows="6">As a passionate dentist, I've dedicated my career to crafting smiles that radiateconfidence. With over a decade of experience,I merge precision with compassion, transforming dental visits into positive experiences. Outside the clinic, I enjoy exploring new dental technologies and volunteering for community oral health initiatives.As a passionate dentist, I've dedicated my career to crafting smiles that radiateconfidence. With over a decade of experience,I merge precision with compassion, transforming dental visits into positive experiences. Outside the clinic, I enjoy exploring new dental technologies and volunteering for community oral health initiatives.</textarea>
            <div class="buttons">
                <button class="cancel" @click="CancelEdit">Cancel</button>
                <button class="save">Save <img src="../assets/diskette.png"> </button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    methods : {
        CancelEdit() {
            this.$emit('edit-profile')
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