import {createRouter,createWebHistory} from 'vue-router';
import SignupPage from './pages/SignupPage.vue';
import SignupDoctor from './pages/SignupDoctor.vue';
import LoginPage1 from './pages/LoginPage1.vue';
import LoginPage2 from './pages/LoginPage2.vue';
import ForgetPassword1 from './pages/ForgetPassword1.vue';
import ForgetPassword2 from './pages/ForgetPassword2.vue';
import ResetPassword1 from './pages/ResetPassword1.vue';
import ResetPassword2 from './pages/ResetPassword2.vue';
import HomePage from './pages/HomePage.vue';


const routes=[
    
    {path:'/signup',
    component:SignupPage,
    name: 'SignupPage'
    },
    {path:'/login1',
    component:LoginPage1,
    name:'LoginPage1'
    },
    {path:'/login',
    component:LoginPage2,
    name:'LoginPage2'
    },
    {path:'/fg-pass1',
    component:ForgetPassword1,
    name:'ForgetPassword1'
    },
    {path:'/fg-pass2',
    component:ForgetPassword2,
    name:'ForgetPassword2'
    },
    {path:'/signup-doc',
    component:SignupDoctor,
    name:'SignupDoctor'
    },
    {path:'/reset-pass1/:email',
    component:ResetPassword1,
    name:'ResetPassword1'
    },
    {path:'/reset-pass2/:email',
    component:ResetPassword2,
    name:'ResetPassword2'
    },
    {path:'/',
    component:HomePage,
    name:'HomePage'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,

})
export default router;