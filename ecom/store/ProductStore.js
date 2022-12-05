import { defineStore } from "pinia";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return { hello: "prateek" };
  },
});
