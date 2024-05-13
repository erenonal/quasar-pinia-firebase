<template>
  <div class="q-pa-md" style="min-width: 100px">
    <div class="q-pa-md" style="border: solid 1px gray">
      <div class="q-mb-md" style="background-color: orange">
        <h2 class="responsive-h2 text-center" style="margin: 0">Result</h2>
      </div>
      <div style="display: flex; ">
        <div class="custom-container">
          <div class="row">
            <span class="text-label">Addition</span>
          </div>
          <div class="row">
            <span class="text-number">{{ result }}</span>
          </div>
        </div>
        <div class="custom-container">
          <div class="row">
            <span class="text-label">Multiplication</span>
          </div>
          <div class="row">
            <span class="text-number">{{ result }}</span>
          </div>
        </div>
      </div>

      <DefaultButton
        buttonText="SHOW CHART"
        actionType="SHOW CHART"
        @click="showChart"
      ></DefaultButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DefaultButton from "../composables/DefaultButton.vue";
const props = defineProps({
  buttonText: {
    type: String,
    default: "GO",
  },
  actionType: {
    type: String,
    default: "GO",
  },
  resultAddition: {
    type: Number,
    default: 0,
  },
  resultMultiplication: {
    type: Number,
    default: 0,
  },
});
const number1 = ref(0);
const number2 = ref(0);
const result = ref(0);
let showResult = false;

const execute = () => {
  result.value = Number(number1.value) + Number(number2.value);
  console.log(result.value);
  showResult = true;
};

const showChart = () => {
  execute();
  showResult = true;
};
</script>

<style scoped>
.responsive-h2 {
  font-size: 1rem; /* Adjust the value as needed */
  text-align: start;
  padding-left: 10px;
}
.custom-container {
  margin-bottom: 12px;
  margin-top: 12px;
  margin-left: 5px;
  margin-right: 5px;
  height: 60px;
  border: 1px solid #ccc; /* Grey border */
  border-radius: 4px;
  width: 100%;
}

.row {
  display: flex;
  align-items: start;
}

.text-label {
  font-size: 0.75rem;
  margin-left: 10px; /* Adjust margin as needed */
  color: grey;
  padding-top: 7px;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis;
}
.text-number {
  font-size: 0.9rem;
  margin-left: 10px; /* Adjust margin as needed */
  color: black;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis;
}
</style>
