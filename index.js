console.log('chapter_7')

// let x = []  // array without items
// let y = [1.2, 'hello', 3, ]
// console.log(y.length) // 3
// let z = [1, 4, 3, ,]
// console.log(z.length) // 4

let u = 12
let i = [u, u-10, u+10, u/2]
console.log(i[2]) // 22

let x = [12, {name: "Humoyun", age:19}]
console.log(x[1].name) // Humoyun

let o  = Array.from(x)
o[0] = 14
console.log(x[0]) //12
console.log(o) // [12, {name:'Humoyun', age:19}]
let a = "humoyun"
let b = 'HUMOYUN'

function upper(a,b){
    let y = a.toUpperCase()
    let d = b.toUpperCase()
    console.log(y===d) // true
}

upper(a,b)

let original = [1, 2, 3, 4, 4, 7, 7, 2, 3]
let copy = [...original]
console.log(copy[1]) // 2
copy[1] = 3
console.log(copy[1]) // change to 3 
console.log(original[1]) // 2

let copy_2 = [...new Set(original)] // [1, 2, 3, 7 ]
console.log(copy_2)  // no repetition in items

let n = new Array(1,2,3,4) // create a new array === let n = [ 1, 2, 3, 4]
console.log(n) // [1, 2, 3, 4]

original[6+1] = 34 // item 7 = 34
console.log(original[7])

