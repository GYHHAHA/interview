async function a() {
    const a = await new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random())
        },3000)
    })
    return a
}

async function b() {
    const a = await new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random())
        },3000)
    })
    return a
}
export default {a,b}