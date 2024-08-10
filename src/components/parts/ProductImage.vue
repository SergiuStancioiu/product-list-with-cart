<script>
export default {
  props: {
    image: String,
    isActive: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <!--Product main image-->
  <div class="product-image">
    <img :src="image" :alt="image" :class="{ active: isActive }" />
  </div>
</template>

<style scoped>
.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.product-image img {
  border-radius: 10px;
  border: 2px solid transparent;
}

.active {
  border: 2px solid var(--red) !important;
  border-radius: 12px;
}
</style>
