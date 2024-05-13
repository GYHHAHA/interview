<template>
  <div>
    <Tree :data="root" />
  </div>
</template>
<script setup lang="ts">
import Tree from './pages/tree.vue';

type TreeNode = {
  content: string;
  children?: TreeNode[];
};

let root: TreeNode = {
  content: 'This is root',
  children: [
    {
      content: 'This is 1',
      children: [
        {
          content: 'This is 1.1',
        },
      ],
    },
    {
      content: 'This is 2',
      children: [
        {
          content: 'This is 2.1',
          children: [
            {
              content: 'This is 2.1.1',
            },
          ],
        },
        {
          content: 'This is 2.2',
        },
      ],
    },
  ],
};
</script>
