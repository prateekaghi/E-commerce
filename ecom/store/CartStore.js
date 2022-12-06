import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    cartValue: 0,
    totalItems: 0,
    shippingCharges: 0,
    cart: [],
  }),
  getters: {
    calculateTax(state) {
      return (state.cartValue * 0.05).toFixed(2);
    },
  },
  actions: {
    addToCart(item) {
      if (this.cartValue > 1000) {
        this.shippingCharges = 0;
      } else {
        this.shippingCharges = 30;
      }
      this.totalItems++;
      this.cart.push(item);
      this.cartValue += item.price;
    },
    removeItem(item) {
      this.totalItems--;
      const itmIndex = this.cart.findIndex((e) => {
        return e.id === item.id;
      });
      this.cart.slice(itmIndex, 1);
    },
  },
});