export const a = () => {
  return new Promise<number>((resolve) => {
    const randNum = Math.random()
    setTimeout(() => {
      resolve(randNum)
    }, 3000)
  })
}

export const b = () => {
  return new Promise<number>((resolve) => {
    const randNum = Math.random()
    setTimeout(() => {
      resolve(randNum)
    }, 3000)
  })
}
