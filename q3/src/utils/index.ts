import type { ArrNode, TreeNode, Tree } from './types'

// 构造单词
const createWord = (len: number) => {
  return new Array(len).fill(0).map(() => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
  }).join('')
}

// 构造文本
const createContent = () => {
  const len = Math.floor(Math.random() * 200) + 300
  return new Array(len).fill(0).map(() => {
    return createWord(Math.floor(Math.random() * 10) + 1)
  }).join(' ')
}

// 从数组中随机选择一个元素
const selectNum = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

// 构造标题级别
const createLevel = (v: number) => {
  if (v === 1) {
    return selectNum([1, 2])
  }
  if (v === 6) {
    return selectNum([5, 6])
  }
  return selectNum([v - 1, v, v + 1])
}

// 生成数组
export const createData = () => {
  const ret: Array<ArrNode> = [{
    type: 'heading',
    level: 1,
    content: createWord(10)
  }]
  let prevLevel: ArrNode["level"] = 1
  for (let i = 0; i < 99; i++) {
    if (Math.random() < 0.5) {
      prevLevel = createLevel(prevLevel as number)
      ret.push({
        type: 'heading',
        level: prevLevel,
        content: createWord(10)
      })
    } else {
      ret.push({
        type: 'text',
        content: createContent()
      })
    }
  }
  return ret
}

// 构造key
const keyCreator = () => {
  const keySet = new Set()
  return () => {
    let key = createWord(8)
    while (keySet.has(key)) {
      key = createWord(8)
    }
    keySet.add(key)
    return key
  }
}

// 生成树
export const createTree = (data: Array<ArrNode>) => {
  let keyGen: Function | null = keyCreator()
  const root: TreeNode[] = []
  const stack: TreeNode[] = []
  let prevLevel = 1
  for (const node of data) {
    if (node.type === 'heading') {
      const newNode = {
        key: keyGen(),
        level: node.level as TreeNode['level'],
        content: node.content
      }
      if (newNode.level === 1) {
        root.push(newNode)
        stack.length = 0
        stack.push(newNode)
      } else {
        if (newNode.level > prevLevel) {
          stack[stack.length - 1].children = [newNode]
          stack.push(newNode)
        } else {
          while (stack.length > 0 && stack[stack.length - 1].level >= newNode.level) {
            stack.pop()
          }
          if (stack.length > 0) {
            if (!stack[stack.length - 1].children) {
              stack[stack.length - 1].children = [newNode]
            } else {
              stack[stack.length - 1].children?.push(newNode)
            }
          }
          stack.push(newNode)
        }
      }
      prevLevel = newNode.level
    }
    }
  keyGen = null
  return {
    root
  }
}
