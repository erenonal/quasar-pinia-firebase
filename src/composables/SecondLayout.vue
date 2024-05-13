<template>
  <div class="flex justify-center items-center screen-full">
    <InputLayout2 class="same-width"></InputLayout2>
    <OutputLayout2 class="same-width"></OutputLayout2>
  </div>
</template>
<script setup>
import InputLayout2 from "../components/InputLayout2.vue";
import OutputLayout2 from "../components/OutputLayout2.vue";
</script>
<style scoped>
.screen-full {
  width: 100vw; /* Set height to full viewport height */
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  justify-content: center; /* Vertically center children */
  align-items: center; /* Horizontally center children */
}
.same-width {
  width: 80%;
}
</style>
