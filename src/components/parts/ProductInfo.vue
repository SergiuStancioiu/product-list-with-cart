<script>
export default {
  props: {
    description: String,
    title: String,
    price: Number,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <!--Product info-->
  <div class="product-info">
    <p class="desc">{{ description }}</p>
    <p class="title">{{ title }}</p>
    <p class="price">${{ price }}</p>
  </div>
</template>

<style scoped>
.desc {
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
