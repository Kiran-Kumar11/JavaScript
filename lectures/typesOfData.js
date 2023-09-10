// primitive data types

const score = 100
const gpa = 9.2
const isLoggedIn = false
const temp = null

let userEmail;

console.log(typeof isLoggedIn)
console.log(typeof temp) // null value's type is OBJECT

const hero = ["kiran", "kumar", "Mankali"];
let myObj = {
    name:"kiran",
    age:"25"
}

const myFunction = function(){
    console.log("hello world")
}

console.table([typeof hero, typeof myObj,typeof myFunction ])

