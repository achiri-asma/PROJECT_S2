import {createRouter,createWebHistory} from 'vue-router'
import SignupPage from './pages/SignupPage.vue'
import SignupDoctor from './pages/SignupDoctor.vue'
import LoginPage1 from './pages/LoginPage1.vue'
import LoginPage2 from './pages/LoginPage2.vue'
import ForgetPassword from './pages/ForgetPassword.vue'
import DashMed from './pages/DashMed.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routes=[
    
    {path:'/signup',
    component:SignupPage,
    name: 'SignupPage'
    },
    {path:'/login1',
    component:LoginPage1,
    name:'LoginPage1'
    },
    {path:'/login2',
    component:LoginPage2,
    name:'LoginPage2'
    },
    {path:'/fg-pass',
    component:ForgetPassword,
    name:'ForgetPassword'
    },
    {path:'/signup-doc',
    component:SignupDoctor,
    name:'SignupDoctor'
    },
    {path:'/reset-pass',
    component:ResetPassword,
    name:'ResetPassword'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,

})
export default router;