<template>
    <div class="success">
        <div><HeaderPage class="HeaderPage" :id="$route.params.userId"/></div>
        <div v-if="isSuccessAppointement">
            <span>Success!</span><br>
            Your appointment with <span>{{ appointementdata.fullName }}</span> has been <br> 
            scheduled for <span>{{ appointementdata.dateAppointment }}</span> at <span>{{ appointementdata.timeAppointment }}</span>. 
            <br><br>
            <small>Please arrive 10 minutes before your appointment time.</small>
        </div>
        <div v-else style="color: rgb(255, 0, 0)">
            <span style="color: rgb(255, 0, 0)">Failed!</span><br>
            Your account has been blocked from making appointments, <br>
            Due to exceeding the maximum number of missed appointments.
            <br><br>
            <small style="color: black">Please contact support for further assistance.</small>
        </div>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import { ref } from 'vue'

export default {
    components: { HeaderPage },
    data() {
        return {
            userId: null,
            isSuccessAppointement: true
        }
    },
    setup() {
        const appointementdata = ref({
            fullName: '',
            dateAppointment: '',
            timeAppointment: ''
        })
        const fetchData = (userId) => {
            const storedData = localStorage.getItem(`appointmentData_${userId}`)
            if (storedData) {
                Object.assign(appointementdata.value, JSON.parse(storedData))
            }
        }
        return { appointementdata, fetchData }
    },
    mounted() {
        this.userId = this.$route.params.userId
        if (this.userId) {
            this.fetchData(this.userId)
        }
        if (this.$route.name === 'FailedAppointement') {
            this.isSuccessAppointement = false
        }
    },
    watch: {
        userId(newUserId) {
            if (newUserId) {
                this.fetchData(newUserId)
            }
        }
    }
}
</script>

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