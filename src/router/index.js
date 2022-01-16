import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from "@/views/manager";
import LogIn from "@/views/log-in";


Vue.use(VueRouter)

const routes = [
/*    {
        path: "/",
        name: 'LogIn',
        component: LogIn
    },*/
    {
        path: "/",
        name: 'Manager',
        component: Manager
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
