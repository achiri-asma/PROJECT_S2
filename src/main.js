import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app=createApp(App)
app.use(router).mount('#app')

router.beforeEach((to, from, next) => {
    if (from.name) {
        localStorage.setItem('previousPage', from.name)
    }
    next()
})

