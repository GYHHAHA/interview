<template>
    <div>
        a:{{ aResult }}
        <br>
        b:{{ bResult }}
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue'
import {useRoute} from 'vue-router'
import services from '../services/index.ts'
const { b } = services
let aResult = ref(""), bResult = ref("");
const route = useRoute()
console.log(route.meta)
onMounted(async () => {
    aResult.value = route.meta.data;
    bResult.value = await b()
    console.log(bResult.value)
})
</script>

<style scoped>

</style>