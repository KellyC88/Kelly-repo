<template>
  <div id="app">
    <RouterView/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import './assets/normalize.css'
import Subscribe from './components/Subscribe.vue'
import ProductDetails from './components/productdetails.vue' 
import { RouterLink, RouterView } from 'vue-router'
 
export default {
  name: 'App',
  components: {
    Home,
    LogIn,
    Subscribe,
    ProductDetails,
    RouterLink,
    RouterView
  }
}
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>

