<template>
  <div class="pro">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pro__image">
          <v-zoom  :width="width" class="img-responsive" :img="product.image"></v-zoom>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 pro__info">
          <div class="pro__description">
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <small>{{ - product.manufacturer.name.length}}</small>
            <h3>{{product.name}}</h3>
            <p>{{product.description}}</p>
          </div>
          <div class="pro__price-cart">
            <p>${{product.price}}</p>
            <product-button :product="product"></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton'
import vZoom from 'vue-zoom'
export default {
  data () {
    return {
      width: 450
    }
  },
  props: ['product'],
  components: {
    'product-button': ProductButton, vZoom
  }
}
</script>

<style>
.pro {
  border-bottom: 2px solid #f5f5f5;
  padding: 30px 0;
}

.pro__description {
  padding-top: 30px;
}

.pro__description small {
  color: #808080;
}

.pro__description h3 {
  margin: 5px 0 30px 0;
  font-size: 40px;
  font-weight: bold;
}

.pro__price-cart {
  display: flex;
  padding-top: 30px;
}

.pro__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
