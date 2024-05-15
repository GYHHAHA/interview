<template>
  <div id="app">
    <h1>Tree Component Example</h1>
    <Tree :nodes="treeData" />
  </div>
</template>

<script setup>
import Tree from './components/Tree/index.vue';

const treeData = {
  content: "This is root",
  children: [
    {
      content: "This is 1",
      children: [
        {
          content: "This is 1.1",
        },
      ],
    },
    {
      content: "This is 2",
      children: [
        {
          content: "This is 2.1",
          children: [
            {
              content: "This is 2.1.1",
            },
          ],
        },
        {
          content: "This is 2.2",
        },
      ],
    },
  ],
};
</script>

<style>
/* Global styles for the app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>