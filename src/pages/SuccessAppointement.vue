<template>
    <div class="success">
        <div></div>
        <div>
            <span>Success!</span><br>
            Your appointment with <span>Sara Anttoine</span> has been <br> scheduled for [Date] at [Time]. 
            <br><br>
            <small>Please arrive 10 minutes before your appointment time.</small>
        </div>
    </div>
</template>

<script></script>

<style>
.success{
    height: 100vh;
    background: url(../assets/medicalbanner.png) no-repeat;
    background-size: 100% 100%;
    font-size: 18px;
    letter-spacing: 0.05em;
}
.success > div:last-child{
    margin-top: 200px;
    margin-left: 100px;
}
</style>