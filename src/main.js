import Vue from 'vue'
import app from './App.vue'
import Router from 'vue-router'
// import VueRouter from 'vue-router'

Vue.use(Router)

 export default new Router ({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
 })

