// console.log('chapter_7')

// // let x = []  // array without items
// // let y = [1.2, 'hello', 3, ]
// // console.log(y.length) // 3
// // let z = [1, 4, 3, ,]
// // console.log(z.length) // 4

// let u = 12
// let i = [u, u-10, u+10, u/2]
// console.log(i[2]) // 22

// let x = [12, {name: "Humoyun", age:19}]
// console.log(x[1].name) // Humoyun

// let o  = Array.from(x)
// o[0] = 14
// console.log(x[0]) //12
// console.log(o) // [14, {name:'Humoyun', age:19}]
// let a = "humoyun"
// let b = 'HUMOYUN'

// function upper(a,b){
//     let y = a.toUpperCase()
//     let d = b.toUpperCase()
//     console.log(y===d) // true
// }

// upper(a,b)

// let original = [1, 2, 3, 4, 4, 7, 7, 2, 3]
// let copy = [...original]
// console.log(copy[1]) // 2
// copy[1] = 3
// console.log(copy[1]) // change to 3 
// console.log(original[1]) // 2

// let copy_2 = [...new Set(original)] // [1, 2, 3, 7 ]
// console.log(copy_2)  // no repetition in items

// let n = new Array(1,2,3,4) // create a new array === let n = [ 1, 2, 3, 4]
// console.log(n) // [1, 2, 3, 4]

// original[6+1] = 34 // item 7 = 34
// console.log(original[7])

// let x = {} //obj
// x[1] = 3 // key:1, value:3
// x[0] = 2 // key:0, value:2
// console.log(x) // {o:2, 1:3}

// let y = new Array(2,3,4,4)
// y.push(5) // add item 5
// console.log(y) // [2, 3, 4, 4, 5] // length = 5
// y.pop() // delete last item 5
// console.log(y) // [2, 3, 4, 4] // length = 4
// console.log(y)
// let x = [...new Set(y)]
// console.log(x)
// let z = [...y]
// console.log(z)
// let t = Array.from(y)
// console.log(t)
// y.length = 3
// console.log('yyyyyy ', y) // 2, 3, 4
// y.length = 5
// console.log('yyyyyyyyyyy ', y) // 2, 3, 4 and empty array

// let obj = Object.create({},{
//     name:{
//         value: "humoyun"
//     }
// })

// console.log(obj.name)

// let ob = {
//     name:"humo",
//     age:20,
//     form:10
// }
// let obj_2 = Object.assign({},ob)
// console.log(obj_2)
// let obj_3 = {...ob}
// console.log(obj_3)


// let letters = [...'hello world']
// console.log(letters)
// let upper = letters.map(item => item.toUpperCase()) // RETURN NEW ARRAY
// console.log(upper) // [H, E, L, L, O, '', W, O, R, L, D]
// let upper_2 = ''
// letters.forEach(item => upper_2 += item.toUpperCase())
// console.log(upper_2) // HELLO WORLD
// let h = [1,8,5,6,7,3,4]
// let k = h.filter(item => item%2===0)
// console.log(k) // [8, 6, 4]
// let v = k.find(item=>item>5)
// console.log(v) // 8
// let m = k.findIndex(item => item<6)
// console.log(m) // 2 
// console.log(h.every(x => x>1)) //false 
// console.log(h.some(x => x<2)) // true because 1<2 
// let x = [2, [3,5],[[43,44]]]
// console.log(x[2][0][0]) // 43
// let y = x.flatMap(x => x)
// console.log(y.flat(2))
// console.log(x.flat(2)) // [2, 3, 5, 43, 44]
// let o = [11,12,13]
// //=====================
// //let c = [...h, ...o]
// //=====================
// let c = h.concat(o)
// //====================
// c.push(22)
// console.log(c)
// let x = [1, 2, 3, 4, 5]
// console.log(x.slice(0,2)) // [1, 2]
// x.fill(4,2,5) // [1, 2, 4, 4]
// console.log(x)
// x.splice(1,2)
// console.log(x) // [1, 4, 5]
// let y = [12, 43, 23, 55, 49,27]
// console.log(y.slice(2,4)) // [23, 55]
// y.splice(2,2)
// console.log(y) //[12, 43, 49, 27]
// console.log(y.includes(12)) //true
// console.log(y.sort()) // [12, 27, 43, 49]
// let z = [...'akdurms']
// console.log(z.sort())
// console.log(z.reverse())
// let y = Array.from(x)
// console.log(y)
// let z = [...y]
// console.log(z)
// let a = z.map(item=> item+1)
// console.log(a) // [2, 3, 4, 5, 6]
// console.log(a.filter(item => item<4)) //[2, 3]
// let b = [...'hello humoyun']
// let upper = ''
// b.forEach( item => upper += item.toUpperCase())
// console.log(upper) // HELLO HUMOYUN 
// console.log(y.slice(3,5))
// x.splice(0,3)
// console.log(x) //[4, 5]
// let i = y.fill(3,2,5)
// console.log(i)
// i.pop()
// console.log(i)
// i.shift()
// console.log(i)
// console.log(typeof i.toString()) //string

let x = [5, 3, 43, 5, 3]
let b=x.reduce((a,b)=> a+b,0)
console.log(b) // 59


