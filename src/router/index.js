import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
        path: '/',
        name: 'routes',
        component: () => import(/* webpackChunkName: "routes" */ '../views/Routes.vue')
    },
    {
        path: '/route/:route',
        name: 'route',
        component: () => import(/* webpackChunkName: "route" */ '../views/Route.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
