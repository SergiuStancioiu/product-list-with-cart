<script>
export default {
  props: {
    category: String,
    title: String,
    price: Number,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <!--Product info-->
  <div class="product-info">
    <p class="categ">{{ category }}</p>
    <p class="title">{{ title }}</p>
    <p class="price">${{ price }}</p>
  </div>
</template>

<style scoped>
.categ {
  color: var(--rose300);
}

.title,
.price {
  font-weight: 500;
}

.price {
  color: var(--red);
}

.product-info {
  margin-bottom: 30px;
}
</style>
