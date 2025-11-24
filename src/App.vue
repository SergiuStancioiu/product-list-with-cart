<script>
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';

export default {
  data() {
    return {
      productsArr: [],
    };
  },
  components: {
    Product,
    Cart,
  },

  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.productsArr = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<template>
  <div class="main-container">
    <div class="product-cart-wrapper">
      <div class="">
        <!--Main Title-->
        <h1>Desserts</h1>
        <div class="product-wrapper">
          <Product
            v-for="(product, index) in productsArr"
            :key="index"
            :image="product.image.mobile"
            :category="product.category"
            :name="product.name"
            :price="product.price"
          />
        </div>
      </div>

      <div><Cart /></div>
    </div>
  </div>
</template>

<style>
.main-container {
  padding: 34px 25px 20px;
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  margin: 0;
  padding-bottom: 41px;
}

.product-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 576px) {
  .product-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .product-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 991px) {
  .product-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .product-cart-wrapper {
    display: flex;
    gap: 20px;
  }

  .main-container {
    max-width: 1200px;
  }
}
</style>
