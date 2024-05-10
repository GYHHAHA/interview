<template>
  <div>
    {{ $route.meta.aNum }} {{ bNum }}
  </div>
</template>

<script setup lang="ts">
import { b } from '../api'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
const $route = useRoute()

const bNum = ref(0)

onMounted(async () => {
  bNum.value = await b()
})
</script>

<style scoped>

</style>