<template>
  <div class="container">
    <div class="header">
      <ul class="tab"></ul>
      <li 
        v-for="(item, index) in tabs"
        :key="index"
        ref="li"
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
import { ref, nextTick } from 'vue'
const tabs = ref([])
const activeIndex = ref(0)
const li = ref(null)

const chooseTab = (index) => {
  activeIndex.value = index
  li.value.forEach(element => {
    element.style.color = ''
  });
  li.value[index].style.color = 'red'
}

const addTab = () => {
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
  tabs.value.push({ title: 'New Tab ' + letter, content: 'New Content ' + letter })
  if (tabs.value.length === 1) {
    nextTick(() => {
      chooseTab(0)
    })
  }
}

const close = (index) => {
  tabs.value.splice(index, 1)
}

</script>

<style lang="less">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    display: flex;
    .tab {
      display: flex;
      li {
        padding: 0 10px;
        margin-left: 20px;
        cursor: pointer;
        span {
          margin-left: 5px;
          color: #000;
          &:hover {
            color: red;
          }
        }
      }
    }
    .plus {
      width: 20px;
      height: 20px;
      border: 1px solid;
      text-align: center;
      margin-left: 10px;
      color: green;
      cursor: pointer;
    }
  }
  .content {
    margin-top: 50px;
    flex: 1;
  }
}
</style>