<template>
  <ul class="tree-view">
    <TreeNode :node="rootNode" :level="0" />
  </ul>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import TreeNode from './TreeNode.vue';

const props = defineProps({
  rootNode: {
    type: Object as PropType<TreeNode>,
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