<template>
  <div>
    <div class="header">
      <ul class="tab"></ul>
      <li 
        v-for="(item, index) in tabs"
        :key="index"
        ref="tab"
        @click="chooseTab(index)"
      >
        {{ item.title }}
        <span @click="close(index)">×</span>
      </li>
      <div class="plus" @click="addTab">+</div>
    </div>
    <div class="content">
      {{ tabs[activeIndex]?.content }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabs = ref([])
const activeIndex = ref(0)
const tab = ref(null)

const addTab = () => {
  tabs.value.push({ title: 'New Tab', content: 'New Content' })
}

const chooseTab = (index) => {
  activeIndex.value = index
  tab.value[index].style.color = 'red'
  console.log(tab.value)
}

const close = (index) => {
  tabs.value.splice(index, 1)
}

</script>

<style>

</style>