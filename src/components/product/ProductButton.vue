<template>
  <div>
    <button class="btn" v-if="isAdding" @click="addToCart">Add to Cart</button>
    <button v-else class="btnDanger" @click="removeFromCart(product._id)">Remove from Cart</button>
  </div>
</template>

<script>
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types'
export default {
  props: ['product'],
  data () {
    return {
      cart: this.$store.state.cart
    }
  },
  computed: {
    isAdding () {
      return this.cart.indexOf(this.product) < 0
    }
  },
  methods: {
    addToCart () {
      this.$store.commit(ADD_TO_CART, this.product)
    },
    removeFromCart (id) {
      this.$store.commit(REMOVE_FROM_CART, id)
    }
  }
}
</script>

<style scoped>
.btn {
  background: #054F76; 
  border: none;
  color: white;
  padding: 12px 28px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;

  -webkit-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}

.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background: #1A87B7;
}

.btnDanger {
  background: #C71111; 
  border: none;
  color: white;
  padding: 12px 28px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;

  -webkit-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}

.btnDanger:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background: #E31010;
}
</style>

