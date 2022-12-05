<script setup lang="ts">
import { useUserStore } from "~~/store/UserStore";
const userStore = useUserStore();
const user = useSupabaseUser();
console.log(user.value);
userStore.$patch((state) => {
  if (user.value) {
    state.isLoggedIn = true;
  }
});
</script>
<template>
  <HeroSection></HeroSection>
  <DealsSection></DealsSection>
  <CategorySection></CategorySection>
  <TrendingSection></TrendingSection>
  <PerksSection></PerksSection>
</template>
