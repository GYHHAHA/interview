<template>
    <div>
        {{ content }}
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const fromClick = computed(() => route.query.from === 'click');
console.log(fromClick.value)
console.log(route)
let content:any;
if (fromClick.value) {
    content = route.params.id;
} else {
    setTimeout(() => {
        router.push('/page4');
    }, (3000));
}
</script>

<style scoped>

</style>