<template>
  <div>Question 1</div>
  <h1>Banner</h1>
    <div class="banner">
        <div class="card" v-for="(item, index) in data" :key="item.title" :class="{ active: isActive[index] }" @click="toggleActive(index)"
       >
            <span>{{ item.title }}</span>
            <span v-if="isActive[index]" class="close" @click="deleteBanner(index)"> x</span>
        </div>
        <button @click="AddBanner">Add Banner</button>

    </div>
</template>


<script setup lang="ts">
import Banner from './component/myBanner.vue'

import { ref,computed } from 'vue';
const data = ref([
    {
        title: 'banner1',
        data: 'data1'
    }
])
const isActive = ref(new Array(data.value.length).fill(false))
const toggleActive = (index: number) => { 
    isActive.value = isActive.value.map((item)=>false)
    isActive.value[index] = true;
}
const AddBanner = () => { 
    data.value.push({ title: 'new banner', data: 'new data' })
    isActive.value = isActive.value.map((item)=>false)
    isActive.value.push(true)
}
const deleteBanner = (index: number) => { 
    data.value.splice(index, 1)
    const flag = data.value[index];
    isActive.value.splice(index, 1)
    console.log(flag)
    if (flag) { 
        isActive.value[isActive.value.length - 1]  = true;
    }
    
}
</script>

<style scoped>
.banner {
    display: flex;
}

.active {
    background-color: #f2f2f2;

}
.banner .card {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 200px;
}
</style>