<template>
    <div class="dashuser">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li>Profile</li>
            </ul>
        </aside>
        <ProfileUser :userId="userId"/>
    </div>
</template>

<script>
import ProfileUser from './ProfileUser'

export default {
    components : { ProfileUser },
    data() {
        return {
            userId: null
        }
    },
    created() {
        this.userId = this.$route.params.userId
    }
}
</script>