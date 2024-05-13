<template>
  <div class="flex justify-center items-center screen-layout-2">
    <!-- First column -->
    <div class="column1">
      <InputLayout1></InputLayout1>
      <OutputLayout1></OutputLayout1>
      <DefaultButton
        buttonText="SHOW CHART"
        actionType="SHOW CHART"
        @click="showChart"
      ></DefaultButton>
    </div>
    <div class="column2">
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

  display: flex;
  justify-content: center; /* Horizontally center children */
  align-items: center; /* Vertically center children */
}

.column1 {
  margin: 0 auto; /* Automatically center the column horizontally */
  width: 50%;

}
.column2 {
  margin: 0 auto; /* Automatically center the column horizontally */
  width: 30%;

}
</style>
