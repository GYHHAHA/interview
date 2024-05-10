<template>
  <div>
    {{ $route.params.id }} subpage2
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const $route = useRoute();
</script>

<style scoped>

</style>