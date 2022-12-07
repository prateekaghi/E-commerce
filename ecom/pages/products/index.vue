<script setup>
const { data: allProducts } = await useFetch("/api/product");
</script>

<template>
  <DealsSection></DealsSection>
  <ProductsProductCard :all-products="allProducts"></ProductsProductCard>
</template>
