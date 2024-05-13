<template>
  <div class="flex justify-center items-center screen-full">
    <InputLayout1 class="same-width"></InputLayout1>
    <OutputLayout1 class="same-width"></OutputLayout1>
  </div>
</template>

<script setup>
import InputLayout1 from "../components/InputLayout1.vue";
import OutputLayout1 from "../components/OutputLayout1.vue";
</script>

<style scoped>
.screen-full {
  width: 100vw;
}
.same-width {
  width: 50%;

  @media (max-width: 768px) {
    width: 50%;
  }
}
</style>
