<template>
    <div class="editprofil1">
        <div>
            <h2>Edit Profile</h2>
            <p>Edit your personnel information as needed</p>
            <div class="editinputs">
                <div>
                    <input><br>
                    <input>
                </div>
                <img src="../assets/image1.png">
            </div>
            <textarea name="textarea1" cols="30" rows="10">
                As a passionate dentist, I've dedicated my career to crafting smiles that radiate
                confidence. With over a decade of experience,I merge precision with compassion, 
                transforming dental visits into positive experiences. Outside the clinic, I 
                enjoy exploring new dental technologies and volunteering for community oral 
                health initiatives.
            </textarea>
            <div class="buttons">
                <button class="cancel">Cancel</button>
                <button class="save">Save</button>
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
        /*margin: 90px auto;*/
        box-sizing: border-box;
        padding: 20px 40px;
    }
    .editprofil1 h2{
        
    }
    .editprofil1 .editinputs{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .editprofil1 .editinputs img{
        width: 100px;
        height: 100px;
    }
</style>