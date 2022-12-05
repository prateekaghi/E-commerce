<script setup>
const { data: products } = useFetch(
  "https://fakestoreapi.com/products?limit=4"
);
</script>

<template>
  <section aria-labelledby="trending-heading">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
      <div class="md:flex md:items-center md:justify-between">
        <h2
          id="favorites-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          Trending Products
        </h2>
        <NuxtLink
          to="/products"
          class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
        >
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </NuxtLink>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
      >
        <div v-for="product in products" class="group relative">
          <div
            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            <NuxtLink to="/">
              {{ product.title }}
            </NuxtLink>
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Rating {{ product.rating.rate }}
          </p>
          <p class="mt-1 text-sm font-medium text-gray-900">
            ${{ product.price }}
          </p>
        </div>

        <!-- More products... -->
      </div>

      <div class="mt-8 text-sm md:hidden">
        <a
          href="/products"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>
