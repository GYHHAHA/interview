<template>
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <router-link v-for="page in pages" :key="page" :to="'/page' + page"
          :class="{ active: $route.name === 'page' + page }">{{ 'page' + page }}</router-link>
      </nav>
    </aside>
    <Content />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Content from './Content.vue';

const route = useRoute();
const pages = [1, 2, 3];
</script>

<style scoped>
.layout {
  width: 100%;
  overflow: hidden;
  height: calc(100% - 60px);
  display: flex;
}
.sidebar {
  width: 15%;
  height: 100%;
  min-width: 50px;
  background-color: #f0f0f0;
  padding: 1rem;
  overflow-y: auto;
  nav {
    display: flex;
    flex-direction: column;
  }
}

.active {
  background-color: red;
}
</style>