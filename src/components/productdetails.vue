<template>
  <div id="productdetails">
   <h4>product details</h4>
  </div>
</template>

<script>
 export default {
  name: 'productdetails',
  data() {
    return {
      products:[
        {id:1, name:'product1', msg: 'oatmeal', img:'../assets/product8.jpg'},
        {id:2, name:'product2', msg: 'sourdough', img:'../assets/product8.jpg'},
        {id:3, name:'product3', msg: 'salad', img:'../assets/product8.jpg'},
        {id:4, name:'product4', msg: 'cookie', img:'../assets/product8.jpg'},
      ]
    }
  },
  product: null,
  created() {
    const id = parseInt(this.$route.params.id)
    this.product = this.products.find(p => p.id === id)
  }
 }
</script>