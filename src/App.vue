<template>
  <div class="grid">
    <FirstLayout></FirstLayout>
    <SecondLayout></SecondLayout>
    <ThirdLayout></ThirdLayout>
    <FourthLayout></FourthLayout>
  </div>
</template>

<script setup>
import FirstLayout from "./composables/FirstLayout.vue";
import SecondLayout from "./composables/SecondLayout.vue";
import ThirdLayout from "./composables/ThirdLayout.vue";
import FourthLayout from "./composables/FourthLayout.vue";
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns with equal width */
  grid-auto-rows: 1fr; /* Rows with equal height */
  gap: 20px; /* Gap between grid items */
   @media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr); /* Two columns with equal width */
  }
}

/* Ensure all child components fill their grid cells */
.grid > * {
  width: 100%;
  height: 100%;
}
</style>
