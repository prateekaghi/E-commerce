<script setup>
const { id } = useRoute().params;

const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url);
console.log(product);

definePageMeta({
  layout: "products-layout",
});
</script>

<template>
  <ProductsProductCard :product="product"></ProductsProductCard>
</template>
