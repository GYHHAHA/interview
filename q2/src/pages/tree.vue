<template>
  <div>
    <div class="root">
      {{ data.content }}
      <div
        :style="{ 'margin-left': `${24 * num}px` }"
        v-for="(item, index) in data.children"
      >
        <Tree :data="item" :num="++num" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Object,
  },
  num: {
    type: Number,
    default: 1,
  },
});
</script>
