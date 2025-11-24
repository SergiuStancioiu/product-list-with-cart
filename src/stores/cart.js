import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addProduct(product, qty) {
      let filteredCartProductIndex = null;
      const filteredCartProductArr = this.cart.filter((cartProduct, index) => {
        if (cartProduct.product.name == product.name) {
          filteredCartProductIndex = index;
          return true;
        }

        return false;
      });

      if (filteredCartProductArr.length > 0) {
        this.cart[filteredCartProductIndex] = { product, qty };
      } else {
        this.cart.push({ product, qty });
      }
    },
    removeProduct(name) {
      const newCart = this.cart.filter((item) => {
        if (item.product.name !== name) {
          return true;
        }

        return false;
      });

      this.cart = newCart;
    },
  },
  getters: {
    total: (state) => {
      return state.cart.reduce((acumulator, item) => {
        return (acumulator += item.product.price * item.qty);
      }, 0);
    },
    totalProducts: (state) => {
      return state.cart.reduce((acumulator, item) => {
        return (acumulator += item.qty);
      }, 0);
    },
    // ✅ New Getter
    isProductInCart: (state) => {
      return (productName) => {
        return state.cart.some((item) => item.product.name === productName);
      };
    },
  },
});
