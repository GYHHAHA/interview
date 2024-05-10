<template>
  <div class="header"></div>
  <div class="container">
    <ul>
      <li 
        :class="{ 'active': activeTab === n }"
        v-for="n in 10"
        :data-index="n"
        @click="navigateTo(n)" 
      >
        page{{ n }}
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { a } from './api';
const router = useRouter();
const activeTab = ref();

const navigateTo = async (n) => {
  if (n === 3) {
    const randNum = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('navigated', 'true');
    router.push({ name: 'page' + n, params: { id: randNum } });
  } if (n === 6) {
    const aNum = await a()
    router.push({ name: 'page6' });
  } else {
    router.push({ name: 'page' + n });
  }
}

watch(() => router.currentRoute.value.path, (path) => {
  const n = parseInt(path.replace('/page', ''))
  activeTab.value = n
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  height: 60px;
  background-color: yellow;
}

ul {
  width: 180px;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul li {
  width: inherit;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

ul li:hover {
  background-color: lightgray;
}

.active {
  background-color: #bbb;
}

.container {
  display: flex;
}

.content {
  margin-left: 180px;
  width: calc(100% - 180px);
  flex: 1;
}
</style>