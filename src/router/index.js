import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LogIn from '../components/LogIn.vue'
import Subscribe from '../components/Subscribe.vue'
import Products from '../components/Home.vue'
import ProductDetails from '../components/productdetails.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/LogIn', name: 'LogIn', component: LogIn },
    { path: '/Subscribe' , name: 'Subscribe' , component: Subscribe },
    { path: '/Product/:id' , name: 'ProductDetails', component: ProductDetails },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router