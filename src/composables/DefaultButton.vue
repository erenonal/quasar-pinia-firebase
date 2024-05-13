<template>
  <div class="button-container">
    <q-btn
      color="green"
      text-color="white"
      class="q-mb-md default-button"
      @click="execute"
      >{{ buttonText }}</q-btn
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  buttonText: {
    type: String,
    default: "GO",
  },
  actionType: {
    type: String,
    default: "GO",
  },
});

const execute = () => {
  console.log(props.actionType);
};
</script>
<style scoped>
.button-container {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis;
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
}
.default-button {
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
