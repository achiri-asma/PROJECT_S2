import {createRouter,createWebHistory} from 'vue-router'
import SignupPage from './pages/SignupPage.vue'
import SignupDoctor from './pages/SignupDoctor.vue'
import LoginPage1 from './pages/LoginPage1.vue'
import LoginPage2 from './pages/LoginPage2.vue'
import ForgetPassword from './pages/ForgetPassword.vue'
import ResetPassword from './pages/ResetPassword.vue'
import DashMed from './pages/DashMed.vue'

const routes=[
    {path:'/signup',component:SignupPage},
    {path:'/signup-doc',component:SignupDoctor},
    {path:'/login1',component:LoginPage1},
    {path:'/login2',component:LoginPage2},
    {path:'/fg-pass',component:ForgetPassword},
    {path:'/reset-pass',component:ResetPassword},
    {path:'/',component:DashMed}
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;