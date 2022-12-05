import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    totalItems: 0,
  }),
  actions: {
    addToCart() {
      this.totalItems++;
    },
    removeItem() {
      this.totalItems--;
    },
  },
});
