<template>
  <div class="menu-container">
    <div class="menu-list">
      <div
        :class="`menu-list-item ${path === item.path ? 'active' : ''}`"
        v-for="item in menuData"
        @click="menuClickHandler(item)"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';

const menuData = reactive([
  {
    path: '/page1',
    content: 'page1',
  },
  {
    path: '/page2',
    content: 'page2',
  },
  {
    path: '/page3',
    content: 'page3',
  },
]);
let path = ref(window.location.pathname);

const menuClickHandler = item => {
  history.pushState({}, '', item.path);
  path.value = window.location.pathname;
};

window.addEventListener('pushState', function (e) {
  path.value = window.location.pathname;
});
</script>
<style>
.menu-container {
  width: 150px;
  height: calc(100vh - 123px);
  background-color: #ffa45e;
  border: 2px solid black;
  box-sizing: border-box;
}
.menu-list-item {
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.menu-list-item.active {
  color: white;
}
</style>
