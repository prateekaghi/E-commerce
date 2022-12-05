<script setup>
import { useUserStore } from "~~/store/UserStore";
const userStore = useUserStore();
console.log(userStore.registered);
</script>

<template>
  <div>
    <LoginSignUp v-if="!userStore.registered"></LoginSignUp>
    <LoginSignIn v-else></LoginSignIn>
  </div>
</template>
