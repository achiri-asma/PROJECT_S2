<template>
    <div class="editprofil1">
        <div>
            <h1>Edit Profile</h1>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input placeholder="exemple@gmail.com"><br>
                    <input placeholder="0799567439">
                </div>
                <img src="../assets/image1.png">
            </div>
            <textarea name="textarea1" rows="6">
                As a passionate dentist, I've dedicated my career to crafting smiles that radiateconfidence. With over a decade of experience,I merge precision with compassion, transforming dental visits into positive experiences. Outside the clinic, I enjoy exploring new dental technologies and volunteering for community oral health initiatives.
            </textarea>
            <div class="buttons">
                <button class="cancel">Cancel</button>
                <button class="save">Save <img src="../assets/diskette.png"> </button>
            </div>
        </div>
    </div>
</template>

<style>
    .editprofil1{
        backdrop-filter: brightness(85%);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .editprofil1 > div{
        width: 40%;
        height: 550px;
        text-align: center;
        background-color: white;
        opacity: 80%;
        border-radius: 30px;
        margin: 90px auto;
        box-sizing: border-box;
        padding: 20px 40px;
    }
    .editprofil1 h1{
        font-weight: 400;
    }
    .editprofil1 .editinputs{
        display: flex;
        justify-content: space-between;
        margin: 40px;
    }
    .editprofil1 .editinputs input{
        border: none;
        border-bottom: 0.5px solid rgb(99, 97, 97);
        color: #03c6c1;
        padding-left: 40px;
    }
    .editprofil1 .editinputs input::placeholder{
        color: #03c6c1;
    }
    .editprofil1 .editinputs input:first-child{
        background: url(../assets/email.png) no-repeat;
        background-size: 10%;
        margin-bottom: 30px;
    }
    .editprofil1 .editinputs input:last-child{
        background: url(../assets/telephone.png) no-repeat;
        background-size: 10%;
    }
    .editprofil1 .editinputs img{
        width: 100px;
        height: 100px;
    }
    .editprofil1 textarea{
        width: 85%;
        border-radius: 15px;
    }
    .editprofil1 .buttons{
        
    }
    .editprofil1 .buttons .cancel{
        background-color: white;
        border: 0.5px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        color: rgb(0, 0, 0, 0.8);
        box-sizing: border-box;
        padding: 10px;
        margin-left: 40px;
    }
    .editprofil1 .buttons .save{
        background-color: #03c6c1;
        border: 0.5px solid #03c6c1;
        border-radius: 10px;
        color: white;
        box-sizing: border-box;
        padding: 10px;
    }
    .editprofil1 .buttons .save img{
        width: 15px;
        height: 15px;
    }
</style>