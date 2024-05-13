<template>
  <div class="flex justify-center items-center screen-layout-2">
    <!-- First column -->
    <div class="column1">
      <InputLayout1 class="same-width"></InputLayout1>
    <OutputLayout1 class="same-width"></OutputLayout1>
  </div>
    <!-- Second column -->
    <div class="column2">
      <DefaultButton
        buttonText="SHOW CHART"
        actionType="SHOW CHART"
        @click="showChart"
      ></DefaultButton>
    </div>
  </div>
</template>

<script setup>
import InputLayout1 from "../components/InputLayout2.vue";
import OutputLayout1 from "../components/OutputLayout2.vue";
import DefaultButton from "../composables/DefaultButton.vue";

const showChart = () => {
  execute();
  showResult = true;
};
</script>
<style scoped>
.screen-layout-2 {
  margin: auto;
}

.column1 {
  margin: 0 auto; /* Automatically center the column horizontally */
  width: 70%;

}
.column2 {
  margin: 0 auto; /* Automatically center the column horizontally */
  width: 30%;

}
</style>
