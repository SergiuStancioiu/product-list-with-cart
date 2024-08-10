<script>
import Product from './components/Product.vue';

export default {
  data() {
    return {
      productsArr: [],
    };
  },
  components: {
    Product,
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
    <!--Main Title-->
    <h1>Desserts</h1>

    <Product
      v-for="(product, index) in productsArr"
      :key="index"
      :image="product.image.mobile"
      :description="product.category"
      :title="product.name"
      :price="product.price"
    />
  </div>
  <div class="cart"></div>
</template>

<style>
.main-container {
  padding: 0 25px;
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  margin-top: 34px;
  margin-bottom: 41px;
}
</style>
