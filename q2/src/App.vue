<template>
  <div class="header"></div>
  <div class="nav">
    <routerlink>page1</routerlink>
    <routerlink>page2</routerlink>
    <routerlink>page3</routerlink>
    <routerlink>page4</routerlink>
    <routerlink>page5</routerlink>
    <routerlink>page6</routerlink>
    <routerlink>page7</routerlink>
    <routerlink>page8</routerlink>
    <routerlink>page9</routerlink>
    <routerlink>page10</routerlink>
  </div>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
.header {
  height: 60px;
  width: 100vw;
  background-color: yellow;
}
</style>