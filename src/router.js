import {createRouter,createWebHistory} from 'vue-router'
import SignupPage from './pages/SignupPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ForgetPassword from './pages/ForgetPassword.vue'
import DashMed from './pages/DashMed.vue'

const routes=[
    
    {path:'/signup',
    component:SignupPage,
    name: 'SignupPage'
    },
    {path:'/login',
    component:LoginPage,
    name:'LoginPage'
    },
    {path:'/fg-pass',
    component:ForgetPassword,
    name:'ForgetPassword'
    },
    {path:'/',
    component:DashMed,
    name:'DashMed'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,

})
export default router;