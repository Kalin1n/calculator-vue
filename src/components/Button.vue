<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["label"],
};
</script>

<style scoped>
.button {
  width: 100%;
  height: 100%;
  background-color: cyan;

  border: none;
}
</style>