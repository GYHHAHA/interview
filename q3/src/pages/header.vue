<template>
  <div class="header-container">
    My Pages

    <div class="avatar"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.header-container {
  height: 120px;
  background-color: rgba(0, 0, 255, 0.592);
  text-align: center;
  line-height: 120px;
  position: relative;
  border: 2px solid black;
}
.avatar {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgb(250, 111, 137);
  right: 10px;
  bottom: 20px;
  border: 2px solid black;
  border-radius: 80px;
  box-sizing: border-box;
}
</style>
