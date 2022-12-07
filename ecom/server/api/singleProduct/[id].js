export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const uri = "https://fakestoreapi.com/products/" + id;
  const data = await $fetch(uri);
  return data;
});
