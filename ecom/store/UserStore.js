import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    isLoggedIn: false,
    registered: false,
  }),
  actions: {
    toggleLoginCard() {
      this.registered = !this.registered;
    },
  },
});
