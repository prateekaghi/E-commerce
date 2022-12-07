<script setup>
import { useUserStore } from "~~/store/UserStore";
const userStore = useUserStore();
const user = useSupabaseUser();
console.log(user.value);

userStore.$patch((state) => {
  if (user.value) {
    state.isLoggedIn = true;
  }
});

const { data: categorisedData, error } = useAsyncData("product", async () => {
  const new_data = await useFetch("/api/allProduct");
  let data = {};
  for (let i = 0; i < new_data.data.value.length; i++) {
    if (!data[new_data.data.value[i].category]) {
      data[new_data.data.value[i].category] = [new_data.data.value[i]];
    } else {
      data[new_data.data.value[i].category].push(new_data.data.value[i]);
    }
  }
  return data;
});
</script>
<template>
  <HeroSection></HeroSection>
  <DealsSection></DealsSection>
  <CategorySection
    :categories="categories"
    :data="categorisedData"
  ></CategorySection>
  <TrendingSection></TrendingSection>
  <PerksSection></PerksSection>
</template>
