<template>
    <div class="tabs-component">
        <div class="tabs-header">
            <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ 'active': currentTabIndex === index }"
                @click="switchTab(index)" @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = -1">
                {{ tab.name }}
                <span v-show="hoveredIndex === index" class="close" @click.stop="removeTab(index)">×</span>
            </div>
            <div class="add-tab" @click="addTab">+</div>
        </div>
        <div class="tabs-content">
            <div v-if="currentTabIndex !== -1" v-html="tabs[currentTabIndex].content"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tabs = ref([
    { name: 'Tab 1', content: '<p>Tab 1 content</p>' },
    { name: 'Tab 2', content: '<p>Tab 2 content</p>' }
]);
const currentTabIndex = ref(0);
const hoveredIndex = ref(-1);

const switchTab = (index) => {
    currentTabIndex.value = index;
};

const addTab = () => {
    const newTabName = 'New Tab';
    const newTabContent = '<p>New Tab content</p>';
    tabs.value.push({ name: newTabName, content: newTabContent });
    switchTab(tabs.value.length - 1);
};

const removeTab = (index) => {
    if (tabs.value.length > 1) {
        tabs.value.splice(index, 1);
        const nextTabIndex = index < tabs.value.length ? index : tabs.value.length - 1;
        switchTab(nextTabIndex);
    }
};
</script>

<style scoped>
.tabs-component {
    /* Add your custom styles here */
}

.tabs-header {
    display: flex;
    border-bottom: #e4e7ed solid 1px;
}

.tab {
    cursor: pointer;
    padding: 5px 20px;
    border: 1px solid #ccc;
    margin-right: 5px;
}

.active {
    background-color: #f0f0f0;
}

.close {
    cursor: pointer;
    margin-left: 5px;
    color: red;
}

.add-tab {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin-left: 5px;
}
</style>