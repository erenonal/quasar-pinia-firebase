<script setup>
import InputLayout1 from './components/InputLayout1.vue'
import { useUsersStore } from './stores/UsersStore';
const UsersStore = useUsersStore()
const updateEmail = (newEmail) => {
  UsersStore.updateMailAddress(newEmail);
}
</script>

<template>
   <div class="flex">
    <InputLayout1></InputLayout1>
  </div>
</template>

<style scoped>
</style>
