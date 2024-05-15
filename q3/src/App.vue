<template>
  <div id="app">
    <Header />
    <Sidebar />
    <Content />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import router from './router';
</script>

<style>
#app {
  display: flex;
  height: 100vh;
}
/* Add global styles here */
</style>