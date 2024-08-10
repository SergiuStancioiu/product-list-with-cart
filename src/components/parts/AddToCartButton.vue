<script>
export default {
  emits: ['toggle-active-product'],
  data() {
    return {
      count: 1,
      addProductQuantity: false,
    };
  },

  methods: {
    decrementQuantityNumber() {
      if (this.count == 1) {
        this.addProductQuantity = false;
        this.$emit('toggle-active-product', true);
        return;
      }

      this.count--;
    },

    incrementQuantityNumber() {
      if (this.count >= 0) {
        this.count++;
      }
    },
    toggleAddProductQty() {
      this.$emit('toggle-active-product', true);
      this.addProductQuantity = !this.addProductQuantity;
    },
  },
};
</script>

<template>
  <!--Add product to cart-->
  <div
    class="add-to-cart"
    v-if="!addProductQuantity"
    @click="toggleAddProductQty"
  >
    <div class="cart-wrapper">
      <div class="cart-image">
        <img src="../../assets/images/icon-add-to-cart.svg" alt="Cart" />
      </div>
      <span>Add to Cart</span>
    </div>
  </div>
  <!--Add product quantity -->
  <div class="add-to-cart-number" v-if="addProductQuantity">
    <div class="add-to-cart-number-wrapper">
      <div class="quantity-btn-wrapper" @click="decrementQuantityNumber">
        <div class="quantity-btn-inner-wrapper">
          <img
            src="../../assets/images/icon-decrement-quantity.svg"
            alt="Decrement"
          />
        </div>
      </div>

      <div class="quantity-nr">{{ count }}</div>
      <div class="quantity-btn-wrapper" @click="incrementQuantityNumber">
        <div class="quantity-btn-inner-wrapper">
          <img
            src="../../assets/images/icon-increment-quantity.svg"
            alt="Increment"
          />
        </div>
      </div>
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
  transition: opacity 200ms ease-in-out, background-color 200ms ease-in-out;
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

.cart-wrapper:hover {
  border-color: var(--rose300);
  background-color: var(--rose300);
  color: white;
}
.add-to-cart-number {
  margin-bottom: 41px;
}
.add-to-cart-number,
.add-to-cart-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.add-to-cart-number-wrapper {
  border: 1px solid var(--rose300);
  border-radius: 50px;
  font-weight: 500;
  background-color: white;
  margin: -25px;
  cursor: pointer;
  user-select: none;
  min-width: 160px;
}

.add-to-cart-number-wrapper {
  justify-content: space-between;
  background: var(--red);
  border-color: var(--red);
  cursor: default;
  color: white;
}

.quantity-btn-wrapper {
  padding: 13px;
  padding-left: 20px;
}

.quantity-btn-inner-wrapper {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;
}

.quantity-nr {
  min-width: 25px;
  text-align: center;
}
</style>
