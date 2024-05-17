<template>
    <div class="container">
        <div class="top-container">
            <div class="tabs-container">
                <div
                    v-for="(item, index) in tabs"
                    :key="item.id"
                    :class="item.isChosen?'tab-chosen':''"
                    class="tab"
                    @click="chooseTab(index)"
                    @mouseover="hoverIndex = index"
                    @mouseleave="hoverIndex = null"
                >{{item.title}}
                    <span
                        class="close-btn"
                        v-show="hoverIndex === index"
                        @click.stop="deleteTab(index)"
                    >X</span>
                </div>
            </div>
            <div
                class="add-btn"
                @click="addTab"
            >+</div>
        </div>
        <div class="content-container">
            <div
                v-for="item in tabs"
                class="content"
            >{{item.isChosen?item.content:''}}</div>
        </div>

    </div>

</template>

<script>
import { ref } from 'vue'
import { reactive } from 'vue'
export default {
    setup() {
        let hoverIndex = ref(null)
        const tabs = reactive([
            {
                id: '001',
                title: 'Tab 1',
                content: 'Tab 1 content',
                isChosen: true
            },
            {
                id: '002',
                title: 'Tab 2',
                content: 'Tab 2 content',
                isChosen: false
            }
        ])
        const chooseTab = index => {
            tabs.forEach((e, i) => {
                if (i !== index) {
                    e.isChosen = false
                } else {
                    e.isChosen = true
                }
            })
        }

        const addTab = () => {
            tabs.forEach(e => {
                e.isChosen = false
            })
            tabs.push({
                id: getRandomId(),
                title: 'New Tab',
                content: 'New Tab content',
                isChosen: true
            })
        }

        // 生成随机编号
        const getRandomId = () => Math.random().toString(36).substring(2, 10)

        const deleteTab = index => {
            const length = tabs.length
            tabs.splice(index, 1)
            if (index < length - 1) {
                chooseTab(index)
            } else {
                chooseTab(tabs.length - 1)
            }
        }

        return {
            hoverIndex,
            tabs,
            chooseTab,
            addTab,
            deleteTab
        }
    }
}
</script>

<style scoped>
.container{
    width: 70%;
    margin: 1em auto;
}
.top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(127, 126, 126, 0.2);
}

.tabs-container {
    display: flex;
}

.tab {
    width: 110px;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    border-top: 1px solid rgba(127, 126, 126, 0.2);
    border-left: 1px solid rgba(127, 126, 126, 0.2);
}

.tab:first-of-type {
    border-top-left-radius: 5px;
}

.tab:last-of-type {
    border-right: 1px solid rgba(127, 126, 126, 0.2);
    border-top-right-radius: 5px;
}

.tab:hover {
    cursor: pointer;
}

.tab-chosen {
    color: rgb(45, 130, 222);
}

.close-btn {
    margin-left: 0.5em;
}

.add-btn {
    color: #797979;
    border: 1px solid #797979;
    border-radius: 2px;
    height: 20px;
    width: 20px;
    text-align: center;
}

.add-btn:hover {
    cursor: pointer;
}

.content-container {
    padding: 1em;
    font-size: 20px;
}
</style>

