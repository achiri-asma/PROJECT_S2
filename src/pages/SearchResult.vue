<template>
    <div class="searchresult">
        <HeaderPage />
        <div class="result">
            <h1> <b>Dentist</b> Near <b>Sidi Bel Abbes</b> </h1>
            <span>12 Results</span>
            <div class="sortBy"></div>
        </div>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'

export default {
    components:  { HeaderPage }
}
</script>

<style>
    .searchresult .button-containerr{
        display: none;
    }
</style>