<template>
  <div>
    {{ props.node.content }}
    <template v-if="props.node.children">
      <NodeTitle 
        class="children"
        v-for="(item, index) in props.node.children" 
        :key="index" 
        :node="item" 
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TreeNode } from '../utils/types'
const props = defineProps<{
  node: TreeNode
}>()
</script>

<style scoped>
.children {
  margin-top: 10px;
  transform: translateX(24px);
}
</style>