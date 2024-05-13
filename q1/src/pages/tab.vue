<template>
  <div class="tab-container">
    <div class="tab-header-container">
      <div class="tab-header-list">
        <div
          :class="`tab-header-item ${currentTab === item.key ? 'active' : ''}`"
          v-for="(item, index) in headerListData"
          :key="`${item.name}-${item.key}-${index}`"
          @click="changeTab(item)"
        >
          {{ item.name }}
          <div
            v-show="currentTab === item.key"
            class="icon"
            @click="deleteHandler(item)"
          >
            +
          </div>
        </div>
      </div>
      <div class="tab-header-add" @click="addHeaderHandler">+</div>
    </div>
    <div
      class="tab-content"
      v-for="(item, index) in contentData"
      :key="`${item.content}-${item.key}-${index}`"
      v-show="currentTab === item.key"
    >
      {{ item.content }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// interface HeaderListItem {
//   key: string;
//   name: string;
// }

const currentTab = ref('');
const headerListData = ref([
  { key: 'tab1', name: 'tab1' },
  { key: 'tab2', name: 'tab2' },
]);
const contentData = ref([
  { key: 'tab1', content: 'tab1 content' },
  { key: 'tab2', content: 'tab2 content' },
]);

const props = defineProps({
  headerList: {
    type: Array,
  },
  content: {
    type: Array,
  },
});

headerListData.value = props.headerList
  ? props.headerList
  : headerListData.value;
currentTab.value = headerListData.value[0].key;
contentData.value = props.content ? props.content : contentData.value;

const emit = defineEmits(['onDelete', 'onAdd']);

const deleteHandler = item => {
  for (let i = 0; i < headerListData.value.length; i++) {
    if (headerListData.value[i].key === item.key) {
      headerListData.value.splice(i, 1);
    }
  }
  emit('onDelete', item.key);
};
const addHeaderHandler = () => {
  let num = headerListData.value.length + 1;
  headerListData.value.push({
    name: `tab${num}`,
    key: `tab${num}`,
  });
  contentData.value.push({
    key: `tab${num}`,
    content: `tab${num} content`,
  });
  currentTab.value = `tab${num}`;
  emit('onAdd');
};
const changeTab = item => {
  currentTab.value = item.key;
};
</script>
<style lang="less">
.tab-container {
  .tab-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tab-header-add {
      width: 20px;
      height: 20px;
      border: 1px gray solid;
      line-height: 20px;
      text-align: center;
    }

    .tab-header-list {
      display: flex;
      justify-content: flex-start;

      .tab-header-item {
        width: 80px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px gray solid;
        position: relative;

        &.active {
          color: blue;
        }
      }
    }
  }
}
</style>
