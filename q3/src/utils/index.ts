type ArrNode = {
  type: "heading" | "text";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
};

const createWord = () => {
  return new Array(10).fill(0).map(() => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
  }).join('')
}

const createContent = () => {
  const len = Math.floor(Math.random() * 200) + 300
  return new Array(len).fill(0).map(() => {
    return createWord()
  }).join(' ')
}

const selectNum = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const createLevel = (v: number) => {
  if (v === 1) {
    return selectNum([1, 2])
  }
  if (v === 6) {
    return selectNum([5, 6])
  }
  return selectNum([v - 1, v, v + 1])
}

const createData = () => {
  const ret: Array<ArrNode> = [{
    type: 'heading',
    level: 1,
    content: createWord()
  }]
  let prevLevel: ArrNode["level"] = 1
  for (let i = 0; i < 99; i++) {
    if (Math.random() < 0.5) {
      prevLevel = createLevel(prevLevel as number)
      ret.push({
        type: 'heading',
        level: prevLevel,
        content: createWord()
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

export default createData

