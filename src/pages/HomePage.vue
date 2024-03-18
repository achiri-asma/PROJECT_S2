<template> 
<HeaderPage />
<AppoinTement />

</template>
<script>
import AppoinTement from '../components/AppoinTement.vue';
import HeaderPage from '../components/HeaderPage.vue';

export default {
    name: 'HomePage',
    components:{AppoinTement,HeaderPage},
   
}
</script>