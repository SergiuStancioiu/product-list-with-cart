<script>
export default {
  data() {
    return {
      productsInCart: 1,
    };
  },
};
</script>

<template>
  <!--Cart main container-->
  <div class="cart-container">
    <!--Cart heading-->
    <div class="cart-heading">
      <h2>Your Cart (0)</h2>
    </div>
    <!--Cart content when is empty-->
    <div class="cart-content-empty" v-if="productsInCart == 0">
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
    <!--Cart content when we have products added-->
    <div class="products-in-cart" v-if="productsInCart > 0">
      <!--Classic Tiramisu-->
      <div class="cart-content">
        <div class="cart-product">
          <div class="cart-product-name">
            <p>Classic Tiramisu</p>
          </div>
          <div class="cart-product-qty-price-total">
            <div class="product-qty"><span>1x</span></div>
            <div class="product-price"><span>@ $5.50</span></div>
            <div class="product-total"><span>$5.50</span></div>
          </div>
        </div>
        <div class="delete-product-wrapper">
          <div class="delete-product">
            <img
              src="../assets/images/icon-remove-item.svg"
              alt="Delete Product"
            />
          </div>
        </div>
      </div>
      <!--Vanilla Bean Crème Brûlée-->
      <div class="cart-content">
        <div class="cart-product">
          <div class="cart-product-name">
            <p>Vanilla Bean Crème Brûlée</p>
          </div>
          <div class="cart-product-qty-price-total">
            <div class="product-qty"><span>4x</span></div>
            <div class="product-price"><span>@ $7.00</span></div>
            <div class="product-total"><span>$28.00</span></div>
          </div>
        </div>
        <div class="delete-product-wrapper">
          <div class="delete-product">
            <img
              src="../assets/images/icon-remove-item.svg"
              alt="Delete Product"
            />
          </div>
        </div>
      </div>
      <!--Vanilla Panna Cotta-->
      <div class="cart-content">
        <div class="cart-product">
          <div class="cart-product-name">
            <p>Vanilla Panna Cotta</p>
          </div>
          <div class="cart-product-qty-price-total">
            <div class="product-qty"><span>2x</span></div>
            <div class="product-price"><span>@ $6.50</span></div>
            <div class="product-total"><span>$13.00</span></div>
          </div>
        </div>
        <div class="delete-product-wrapper">
          <div class="delete-product">
            <img
              src="../assets/images/icon-remove-item.svg"
              alt="Delete Product"
            />
          </div>
        </div>
      </div>
      <!--Order Total-->
      <div class="order-total-wrapper">
        <!--Order total-->
        <div class="order-total">
          <div class="title"><p>Order Total</p></div>
          <div class="total-price">$46.50</div>
        </div>
        <!--Carbon neutral-->
        <div class="carbon-neutral">
          <div class="carbon-image">
            <img
              src="../assets/images/icon-carbon-neutral.svg"
              alt="Tree Icon"
            />
          </div>
          <div class="carbon-neutral-text">
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
        </div>
        <!--Confirm order button-->
        <div class="confirm-order">
          <button class="order-btn">Confirm Order</button>
        </div>
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

.cart-content-empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.cart-info p {
  color: var(--rose400);
}

.cart-product {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}

.cart-product-name p,
.carbon-neutral-text p,
.order-total .title p,
.cart-info p {
  margin: 0;
}

.product-qty,
.cart-product-name p,
.cart-info p,
.product-total,
.carbon-neutral-text span {
  font-weight: 500;
}

.cart-product-qty-price-total {
  display: flex;
  align-items: center;
  gap: 20px;
}

.product-qty {
  color: var(--red);
}

.product-price {
  color: var(--rose400);
}

.product-total {
  color: var(--rose500);
}

.cart-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--rose100);
  padding-bottom: 10px;
}

.delete-product-wrapper {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-product {
  width: 20px;
  cursor: pointer;
}

.delete-product img {
  width: 100%;
  border: 2px solid var(--rose300);
  border-radius: 50%;
  padding: 2px;
}

.products-in-cart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.order-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}

.order-total .title p,
.carbon-neutral-text p {
  font-size: 14px;
}

.order-total .total-price {
  font-weight: 700;
  font-size: 24px;
}

.carbon-neutral {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: var(--rose50);
  border-radius: 10px;
  justify-content: center;
}

.order-btn {
  width: 100%;
  border: none;
  padding: 15px;
  border-radius: 50px;
  background-color: var(--red);
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.order-total-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
