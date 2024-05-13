<template>
  <div class="q-pa-md" style="min-width: 100px">
    <div class="q-pa-md" style="border: solid 1px gray; display: flex; flex-direction: column;">
      <div class="q-mb-md" style="background-color: orange">
        <h2 class="responsive-h2 text-center" style="margin: 0">Input</h2>
      </div>
      <!-- Inputs -->
      <div style="display: flex;">
        <q-input
          outlined
          v-model="number1"
          label="Number 1"
          type="number"
          class="q-mb-md"
          style="margin-top: -1px; border-top-width: 0; flex: 1;"
        />
        <q-input
          outlined
          v-model="number2"
          label="Number 2"
          type="number"
          class="q-mb-md"
          style="margin-left: 10px; flex: 1;"
        />
      </div>
    </div>
    <DefaultButton buttonText="EXECUTE" actionType="EXECUTE"></DefaultButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DefaultButton from "../composables/DefaultButton.vue";
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
