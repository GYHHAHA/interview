<template>
    <li>
      <div :style="{ paddingLeft: level * 24 + 'px' }">
        {{ node.content }}
      </div>
      <ul v-if="node.children && node.children.length" class="tree-node-children">
        <TreeNode 
          v-for="(child, index) in node.children" 
          :key="index" 
          :node="child" 
          :level="level + 1" 
        />
      </ul>
    </li>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    node: {
      type: Object as PropType<TreeNode>,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  });
  </script>
  
  <style scoped>
  .tree-node-children {
    list-style-type: none;
    padding-left: 0;
    margin-top: 4px;
  }
  </style>