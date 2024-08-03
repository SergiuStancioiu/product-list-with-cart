<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <!--Add product to cart-->
  <div class="add-to-cart">
    <div class="cart-wrapper">
      <div class="cart-image">
        <img src="../../assets/images/icon-add-to-cart.svg" alt="Cart" />
      </div>
      <span>Add to Cart</span>
    </div>
  </div>
</template>

<style scoped>
.add-to-cart,
.cart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.add-to-cart {
  margin-bottom: 41px;
}

.cart-wrapper {
  border: 1px solid var(--rose300);
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 500;
  background-color: white;
  margin: -25px;
  cursor: pointer;
  user-select: none;
  min-width: 160px;
}
</style>
