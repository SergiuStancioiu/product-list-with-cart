<script>
import AddToCartButton from './parts/AddToCartButton.vue';
import ProductImage from './parts/ProductImage.vue';
import ProductInfo from './parts/ProductInfo.vue';

export default {
  props: {
    image: String,
    category: String,
    name: String,
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
    <AddToCartButton
      :product="{ image, category, name, price }"
      @toggleActiveProduct="toggleActive"
    />
    <!--Product info-->
    <ProductInfo :category="category" :title="name" :price="price" />
  </div>
</template>

<style scoped></style>
