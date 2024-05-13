<template>
  <div class="flex justify-center items-center screen-layout-2">
    <!-- First column -->
    <div class="column">
      <InputLayout1></InputLayout1>
      <OutputLayout1></OutputLayout1>
      <DefaultButton
        buttonText="SHOW CHART"
        actionType="SHOW CHART"
        @click="showChart"
      ></DefaultButton>
    </div>
    <div class="column">
      <div style="background-color: red">eren</div>
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
  height: 50%; /* Set height to full viewport height */
  width: 100%;
  display: flex;
  justify-content: center; /* Horizontally center children */
  align-items: center; /* Vertically center children */
}

.column {
  margin: 0 auto; /* Automatically center the column horizontally */
}
</style>
