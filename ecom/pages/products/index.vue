<script setup>
const { data: allProducts } = await useFetch("/api/allProduct");
</script>

<template>
  <DealsSection></DealsSection>
  <ProductsProductCard :all-products="allProducts"></ProductsProductCard>
</template>
