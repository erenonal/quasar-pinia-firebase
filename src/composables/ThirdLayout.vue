<template>
  <div class="flex justify-center items-center screen-layout-2">
    <!-- First column -->
    <div class="column">
      <InputLayout1></InputLayout1>
      <OutputLayout1></OutputLayout1>
    </div>
    <!-- Second column -->
    <div class="column">
      <DefaultButton
        buttonText="SHOW CHART"
        actionType="SHOW CHART"
        @click="showChart"
      ></DefaultButton>
    </div>
  </div>
</template>

<script setup>
import InputLayout1 from "../components/InputLayout1.vue";
import OutputLayout1 from "../components/OutputLayout1.vue";
import DefaultButton from "../composables/DefaultButton.vue";

const showChart = () => {
  execute();
  showResult = true;
};
</script>
<style scoped>
.screen-layout-2 {
  margin: auto;
  width: 100%;
}

.column {
  margin: 0 auto; /* Automatically center the column horizontally */
}
</style>
