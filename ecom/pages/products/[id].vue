<script setup>
const { id } = useRoute().params;

const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url);

if (!product.value) {
  throw createError({
    statusCode: 400,
    statusMessage: "Product not Found!!!",
    fatal: true,
  });
}
definePageMeta({
  layout: "products-layout",
});
</script>

<template>
  <ProductsProductCard :product="product"></ProductsProductCard>
</template>
