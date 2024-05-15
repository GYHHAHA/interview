<template>
    <header class="header">
      <h1>My App</h1>
      <button @click="$router.push('/page2')">Go to Page 2</button>
    </header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  </script>
  
  <style scoped>
  .header { /* ...your styles... */ }
  </style>