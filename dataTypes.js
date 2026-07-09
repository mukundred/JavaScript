"use strict"; // treat all JS code as newer version

// alert(3+3) will not run as we are using nodejs, not browser

// code readabilty should be focused
console.log(3+3)  

let name = "mukund"
let age = 18
let isLoggedIn = false 

// 1. number
// bigint
// string
// boolean
// null : standalone value empty value
// undefined : vslue not defined
// symbol 



// object
console.log(typeof null); // Object
console.log(typeof undefined); // undefined

// Type conversion

let score = "33" //int
console.log(typeof(score)) //number

let valuInNumber = Number(score)
console.log(typeof(valuInNumber)) //number

let notaNumber = Number("33abc") // will convert it to int but will be NaN

// null will be 0, undefined --> NaN

// "" ==> false in boolean
// "Mukund" ===> true in boolean

// numbers can be converted will be converted to string easily