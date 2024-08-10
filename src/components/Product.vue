<script>
import AddToCartButton from './parts/AddToCartButton.vue';
import ProductImage from './parts/ProductImage.vue';
import ProductInfo from './parts/ProductInfo.vue';

export default {
  props: {
    image: String,
    description: String,
    title: String,
    price: Number,
  },
  data() {
    return {
      showAddToCart: false,
    };
  },
  components: {
    AddToCartButton,
    ProductImage,
    ProductInfo,
  },
  methods: {
    addToCart() {
      this.showAddToCart = true;
    },

    handleHideAddToCart() {
      this.showAddToCart = !this.showAddToCart;
    },
  },
};
</script>

<template>
  <div class="product">
    <!--Product main image-->
    <ProductImage :image="image" :isActive="showAddToCart" />
    <!--Add product to cart-->
    <AddToCartButton @hideAddToCart="handleHideAddToCart" />
    <!--Product info-->
    <ProductInfo :description="description" :title="title" :price="price" />
  </div>
</template>

<style scoped></style>
