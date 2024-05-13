<script setup>
import FirstLayout from "./composables/FirstLayout.vue";
import SecondLayout from "./composables/SecondLayout.vue";
import ThirdLayout from "./composables/ThirdLayout.vue";
import FourthLayout from "./composables/FourthLayout.vue";
import { useUsersStore } from "./stores/UsersStore";
const UsersStore = useUsersStore();
const updateEmail = (newEmail) => {
  UsersStore.updateMailAddress(newEmail);
};
</script>

<template>
  <div class="flex">
    <FirstLayout></FirstLayout>
    <SecondLayout></SecondLayout>
    <ThirdLayout></ThirdLayout>
    <FourthLayout></FourthLayout>
  </div>
</template>

<style scoped></style>