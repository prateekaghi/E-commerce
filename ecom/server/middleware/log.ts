export default defineEventHandler((event) => {
  console.log("request made " + event.path);
});
