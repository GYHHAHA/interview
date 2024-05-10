<template>
  <div class="container">
    <div class="content" ref="content"></div>
    <nav>
        <NodeTitle v-for="(item, index) in tree.root" :node="item" :key="index" />  
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { ref, nextTick, onMounted } from 'vue'
  import { createData, createTree } from './utils'
  import type { ArrNode } from './utils/types'
  import NodeTitle from './components/NodeTitle.vue'

  const content = ref<HTMLElement | null>(null)
  const data = ref<ArrNode[]>(createData())
  const tree = createTree(data.value)

  nextTick(() => {
    for (const item of data.value) {
      if (item.type === 'heading') {
        const node = document.createElement('h' + item.level)
        node.innerText = item.content
        content.value?.appendChild(node)
      } else {
        const node = document.createElement('p')
        node.innerText = item.content
        content.value?.appendChild(node)
      }
    }
  })

  onMounted(() => {
    
  })
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}

h1 {
  margin-top: 16px;
  font-size: 46px;
  font-weight: bold;
}

h2 {
  margin-top: 16px;
  font-size: 40px;
  font-weight: bold;
}

h3 {
  margin-top: 16px;
  font-size: 34px;
  font-weight: bold;
}

h4 {
  margin-top: 16px;
  font-size: 28px;
  font-weight: bold;
}

h5 {
  margin-top: 16px;
  font-size: 22px;
  font-weight: bold;
}

h6 {
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
}

p {
  margin-top: 16px;
  font-size: 12px;
}

nav {
  float: right;
  width: 260px;
  margin-top: 50px;
  margin-right: 50px;
  background-color: #eee;
}

nav div {
  margin-top: 16px;
}
</style>
