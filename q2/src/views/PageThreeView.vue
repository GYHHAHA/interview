<template>
  <div> 
    {{ $route.params.id }}
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
beforeRouteEnter (to, from, next) {
  if (parseInt(to.params.id) > 0 && parseInt(to.params.id) < 11) {
    next()
  } else {
    setTimeout(() => {
      $router.push({ name: 'PageFour' })
    }, 3000);
  }
}
</script>

<style scoped>

</style>