<script setup>
defineProps(["error"]);

const clearErrorHandler = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <main
    class="h-full bg-cover bg-top sm:bg-top bg-[url('~/assets/img/errorBackground.jpg')]"
  >
    <div
      class="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"
    >
      <p class="text-5xl font-semibold text-black text-opacity-50">
        {{ error.statusCode }}
      </p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Uh oh! I think you’re lost.
      </h1>
      <p class="mt-2 text-lg font-medium text-black text-opacity-50">
        {{ error.statusMessage }}
      </p>
      <div class="mt-6">
        <button
          @click="clearErrorHandler"
          class="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
        >
          Go back home
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
html {
  height: 100%;
}

body {
  height: 100%;
}
</style>
