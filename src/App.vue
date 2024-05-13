<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useUsersStore } from './stores/UsersStore';
const UsersStore = useUsersStore()
const updateEmail = (newEmail) => {
  UsersStore.updateMailAddress(newEmail);
}
</script>

<template>
   <div>
    <q-btn label="eren" @click="updateEmail('new@example.com')"></q-btn>
    <h1 style="color: red">{{ UsersStore.mailAddress }}</h1>
  </div>
</template>

<style scoped>
</style>
