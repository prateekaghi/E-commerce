<script setup>
const { allProducts } = defineProps(["allProducts"]);
</script>

<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="product in allProducts"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <div
            :key="product.id"
            class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-sm font-medium text-gray-900">
              <NuxtLink :to="`/products/${product.id}`">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ product.title }}
              </NuxtLink>
            </h3>
            <p class="text-sm text-gray-500">
              {{ product.description }}
            </p>
            <div class="flex flex-1 flex-col justify-end">
              <!-- <p class="text-sm italic text-gray-500">8 colors</p> -->
              <p class="text-base font-medium text-gray-900">
                ${{ product.price }}
              </p>
              <Icon
                name="material-symbols:add-shopping-cart-outline-rounded"
                class="h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
