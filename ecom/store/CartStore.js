import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    cartValue: 0,
    totalItems: 0,
    shippingCharges: 0,
    cart: [],
    totalTax: 0,
  }),
  getters: {
    calculateTax(state) {
      return (state.totalTax = +(state.cartValue * 0.05).toFixed(2));
    },

    totalAmount(state) {
      console.log(state.cartValue);
      console.log(state.shippingCharges);
      console.log(state.totalTax);
      return state.cartValue + state.shippingCharges + state.totalTax;
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
      this.calculateTax();
      const itmIndex = this.cart.findIndex((e) => {
        return e.id === item.id;
      });
      this.cart.splice(itmIndex, 1);
    },
  },
});
