<template>
  <div class="q-pa-md" style="min-width: 300px;">
  <div class="q-pa-md" style="border: solid 1px gray">
    <div class="q-mb-md" style="background-color: orange">
      <h2 class="responsive-h2 text-center" style="margin: 0">Header</h2>
    </div>
    <!-- Inputs -->
    <q-input
      outlined
      v-model="number1"
      label="Number 1"
      type="number"
      class="q-mb-md"
      style="margin-top: -1px; border-top-width: 0"
    />
    <q-input
      outlined
      v-model="number2"
      label="Number 2"
      type="number"
      class="q-mb-md"
    />
  </div>
  <q-btn
  color="green"
  text-color="white"
  class="q-mb-md"
  @click="execute"
  style="width: 100%; margin-top: 1rem;"
  >Execute</q-btn
  >
</div>
</template>

<script setup>
import { ref } from "vue";

const number1 = ref(0);
const number2 = ref(0);

const execute = () => {
  const result = number1.value + number2.value;
  console.log("Result:", result);
};
</script>

<style scoped>
.responsive-h2 {
  font-size: 1rem; /* Adjust the value as needed */
  text-align: start;
  padding-left: 10px;
}
</style>
