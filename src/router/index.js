import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from "@/views/manager";
import Login from "@/views/login";
import Register from "@/views/register";
import Reset from "@/views/reset";
Vue.use(VueRouter)

const routes = [
/*    {
        path: "/",
        name: 'LogIn',
        component: LogIn
    },*/
    {
        path: "/",
        name: 'Login',
        component: Login
    },
    {
        path: "/regeister",
        name: 'Register',
        component: Register
    },
    {
      path: "/reset",
      name: 'Reset',
      component: Reset
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
