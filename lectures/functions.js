// // 1st method

// function addTwoNum(num1, num2){
//     num1 = 3;
//     num2 = 5;
//     console.log(num1 + num2)

// }
// addTwoNum()

// // 2nd

// function kiranKumar(num1,num2){
//     console.log(num1 + num2)
// }
// kiranKumar(2,4)

// // 3rd

// function addTwo(num1, num2){
//     return num1 + num2
// }
// const result = addTwo(5,10)



// function CalculatingCart(...num){   // rest operator
//     return num
// }
// console.log(CalculatingCart(29,45,67))

const student = {
    name: "kiran",
    price: 541
}

function studentDetails(anyObject){
    return(`${anyObject.name} is the name of student and ${anyObject.price} is price`)
}
console.log(studentDetails(student))

const newArray = [10,20,30]
function arrayObj(anyNum){
    return newArray[1]
}
console.log(arrayObj(newArray))