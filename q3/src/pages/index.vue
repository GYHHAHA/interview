<template>
  <div>
    <div class="top">
      <Header />
    </div>
    <div class="down">
      <Menu />
      <div class="content-container">
        <div v-show="path[1] === 'page1'" @click="toPage2">
          点击跳转 `/page2`
        </div>
        <div v-show="path[1] === 'page3'">{{ path[2] }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './header.vue';
import Menu from './menu.vue';
import { ref } from 'vue';

let path = ref(window.location.pathname.split('/'));

const toPage2 = () => {
  history.pushState({}, '', '/page2');
};

window.addEventListener('pushState', function (e) {
  path.value = window.location.pathname.split('/');
});
</script>
<style>
.down {
  display: flex;
}
.content-container {
  padding: 30px;
}
</style>
