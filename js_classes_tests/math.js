let x = 4
let y = '4.7834'
let z = 4.5
let t = "word"

const arr = [4, '4', 4.5, "word"]


console.log(parseFloat(y))

console.log(typeof arr)
console.log()
console.log(Number("3.14"))
console.log(Number(Math.PI))
console.log(Number(" "))
console.log(Number(""))



console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " " + typeof arr[i])
}
