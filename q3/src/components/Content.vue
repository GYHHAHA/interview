<template>
  <main class="content">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <div v-if="$route.name === 'page3'" class="special-content">
      The number is {{ $route.params.number }}
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped>
.content {
  width: calc(85% - 30px);
  height: 100%;
  margin-left: 15%;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
}
.special-content {/* ...styles for displaying the number... */}
</style>