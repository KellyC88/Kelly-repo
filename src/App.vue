<template>
  <div id="app">
    <router-view/>
  </div>
  <!-- <Home msg="Vite + Vue" /> -->
</template>


<script>
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import './assets/normalize.css'
import Subscribe from './components/Subscribe.vue'
import productdetails from './components/productdetails.vue' 
 
export default {
  name: 'App',
  components: {
    Home,
    LogIn,
    Subscribe
  }
}
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>

