<template>
    <div class="editprofil3">
        <div>
            <h1>Edit Profile</h1>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input placeholder="exemple@gmail.com"><br>
                    <input placeholder="0799567439">
                </div>
                <img src="../assets/image3.png">
            </div>
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
    .editprofil3 > div{
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