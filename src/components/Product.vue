<script>
import AddToCartButton from "./parts/AddToCartButton.vue";
import AddProductQuantity from "./parts/AddProductQuantity.vue";
import ProductImage from "./parts/ProductImage.vue";
import ProductInfo from "./parts/ProductInfo.vue";

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
    AddProductQuantity,
    ProductImage,
    ProductInfo,
  },

  methods: {
    AddToCart() {
      this.showAddToCart = true;
    },
  },
};
</script>

<template>
  <div class="product">
    <!--Product main image-->
    <ProductImage :image="image" :isActive="showAddToCart" />
    <!--Add product to cart-->
    <AddToCartButton v-if="!showAddToCart" @click="AddToCart" />
    <!--Add product quantity -->
    <AddProductQuantity v-if="showAddToCart" />
    <!--Product info-->
    <ProductInfo :description="description" :title="title" :price="price" />
  </div>
</template>

<style scoped></style>
