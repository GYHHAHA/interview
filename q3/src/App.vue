<template>
  <div>Question 3</div>
</template>

<script lang="ts" setup>
type ArrNode = {
  type: "heading" | "text";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
};

let previousLevel = 2 // 初始化为 1，因为第一个节点是 level 1 的 heading 节点

const RandomObject = () => {
  const type = Math.random() < 0.5 ? "heading" : "text";
    const node:ArrNode = { type,content:isHeading(type) }
    if (type === "heading") {
        node.level = previousLevel + Math.floor(Math.random() * 2) - 1;
        console.log("previousLevel", previousLevel)
        node.level = Math.max(1, Math.min(6, node.level));
        console.log("level", node.level)

        previousLevel = node.level;
    }
    return node
};
const isHeading = (type) => { 
    if (type === "heading") { 
        return getWord()
    } else {
       return getParagraph()
    }
}
const getWord = () => {
    let word = ""
    const length = Math.floor(Math.random() * 10)+1
    for (let i = 0; i < length; i++) {
        const charCode = Math.floor(Math.random() * 26) + 97
        word += String.fromCharCode(charCode)
    }
    return word
}
const getParagraph = () => {
    let paragrapgh = ""
    const length = Math.floor(Math.random() * 200)+300
    for (let i = 0; i < length; i++) {
        paragrapgh += getWord() + " "
    }
    return paragrapgh;
}

const arr = []
for (let i = 0; i < 100; i++) { 
    arr.push(RandomObject())
}
const map = new Map()
arr.forEach(item => {    
    if (!map.get(item.level)) {
        map.set(item.level, 1)
    } else {
        map.set(item.level, map.get(item.level) + 1)
    }
})
console.table(arr)
console.log(map)
</script>