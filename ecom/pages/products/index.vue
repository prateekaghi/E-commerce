<script setup>
const { data: allProducts } = useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <DealsSection></DealsSection>
  <ProductsProductCard :all-products="allProducts"></ProductsProductCard>
</template>
