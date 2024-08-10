<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!--Cart-->
  <div class="cart-container">
    <div class="cart-heading">
      <h2>Your Cart (0)</h2>
    </div>
    <div class="cart-content">
      <div class="cart-empty-image">
        <img
          src="../assets/images/illustration-empty-cart.svg"
          alt="Empty Cart"
        />
      </div>
      <div class="cart-info">
        <p>Your added items will appear here</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cart-heading h2 {
  color: var(--red);
}

.cart-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.cart-info p {
  margin: 0;
  color: var(--rose400);
  font-weight: 500;
}
</style>
