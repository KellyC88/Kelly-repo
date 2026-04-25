<template>
  <div v-if="product">
   <h4>{{ product.name }}</h4>
  </div>
</template>

<script>
 export default {
  name: 'ProductDetails',
  data() {
    return {
      products:[
        {id:1, name:'oatmeal'},
        {id:2, name:'sourdough'},
        {id:3, name:'salad'},
        {id:4, name:'cookie'},
      ],
      product: null
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.product = this.products.find(p => p.id === id)
  }
 }
</script>