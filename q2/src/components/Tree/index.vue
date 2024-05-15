<template>
    <ul class="tree-view">
      <TreeNode 
        v-for="(node, index) in nodes" 
        :key="index" 
        :node="node" 
        :level="0" 
      />
    </ul>
  </template>
  
  <script setup lang="ts">
  import TreeNode from './TreeNode.vue';
  
  const props = defineProps({
    nodes: {
      type: Array as PropType<TreeNode[]>,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .tree-view {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  </style>