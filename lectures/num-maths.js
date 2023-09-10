

// const balance = new Number(100)
// console.log(balance.toString().length);

// console.log(Math)
// console.log(Math.abs(-4.5))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));

// console.log(Math.floor((Math.random())  Here Num are like : 0.1, 0.233, ---- < 1. 0


// console.log((Math.random() * 10) + 1) Here 5.6, 1.2, 3.5 (only decimal numbers are generating)
// console.log(Math.floor(Math.random()*10) + 1)

const min = 1
const max = 5

console.log(Math.floor(Math.random() * (max - min + 1))+ min) // (max - min + 1) is used bcz 0 shouldn't come -
// if it comes total value will be zero, "min value bcz range should be more than min"

