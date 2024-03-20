<template>
    <div class="dashuser">
        <aside>
            <img src="../assets/logo.png" alt="logo">
            <ul>
                <li>Profile</li>
            </ul>
        </aside>
        <ProfileUser />
    </div>
</template>

<script>
import ProfileUser from './ProfileUser'

export default {
    components : { ProfileUser }
}
</script>