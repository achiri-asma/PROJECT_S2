<template>
    <div class="editprofil2">
        <div>
            <h1>Edit Profile</h1>
            <p>Edit your office information as needed</p>
            <input placeholder="0799567439">
            <img src="../assets/image2.png"><br>
            <input placeholder="Sidi bel abbes">&nbsp;
            <input placeholder="Sidi bel abbes">&nbsp;
            <input placeholder=" wiam BP 73 ">
            <div class="buttons">
                <button class="cancel" @click="CancelEdit">Cancel</button>
                <button class="save">Save <img src="../assets/diskette.png"> </button>
            </div>
        </div>
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
    .editprofil2 > div{
        width: 47%;
        height: 400px;
    }
    .editprofil2 p{
        margin-bottom: 30px;
    }
    .editprofil2 p + input{
        background: url(../assets/telephone.png) no-repeat;
        background-size: 5%;
        position: relative;
        right: 12%;
        width: 50%;
    }
    .editprofil2 br + input, .editprofil3 .editinputs + input{
        background: url(../assets/address.png) no-repeat;
        background-size: 7%;
        margin-top: 20px;
    }
    .editprofil2 div > img{
        position: relative;
        left: 15%;
    }
    .editprofil2 .buttons, .editprofil3 .buttons{
        margin-top: 40px;
    }
</style>