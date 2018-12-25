<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div v-else class="title"><h1>You don't have products yet</h1></div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      productDetails: ProductDetails
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
</style>

