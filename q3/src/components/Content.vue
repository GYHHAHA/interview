<template>
    <aside class="sidebar">
      <nav>
        <router-link v-for="page in pages" :key="page" :to="'/page' + page" :class="{ active: $route.name === 'page' + page }">{{ 'page' + page }}</router-link>
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const pages = [1, 2, 3];
  </script>
  
  <style scoped>
  .sidebar {/* ...your styles... */}
  .active {/* ...highlight style... */}
  </style>