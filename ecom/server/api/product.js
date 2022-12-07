export default defineEventHandler(async (event) => {
  const uri = "https://fakestoreapi.com/products";
  const data = await $fetch(uri);
  return data;
});
