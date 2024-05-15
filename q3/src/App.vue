<template>
  <div id="app">
    <Header />
    <Sidebar />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import router from './router';
</script>

<style>
#app {
  height: 100vh;
}
/* Add global styles here */
</style>