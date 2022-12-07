<script setup>
const { id } = useRoute().params;

const { data: product } = await useFetch(`/api/singleProduct/${id}`);

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
  <ProductsProductDesc :product="product"></ProductsProductDesc>
</template>
