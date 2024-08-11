<script>
import AddToCartButton from './parts/AddToCartButton.vue';
import ProductImage from './parts/ProductImage.vue';
import ProductInfo from './parts/ProductInfo.vue';

export default {
  props: {
    image: String,
    category: String,
    title: String,
    price: Number,
  },
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    AddToCartButton,
    ProductImage,
    ProductInfo,
  },
  methods: {
    addToCart() {
      this.isActive = true;
    },

    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<template>
  <div class="product">
    <!--Product main image-->
    <ProductImage :image="image" :isActive="isActive" />
    <!--Add product to cart-->
    <AddToCartButton @toggleActiveProduct="toggleActive" />
    <!--Product info-->
    <ProductInfo :category="category" :title="title" :price="price" />
  </div>
</template>

<style scoped></style>
