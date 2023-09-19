// const newName = new Object();
//  const newName ={}
// console.log(newName);

// const newCar(){
    
// }


const tinderUser = {};
tinderUser.id = 123;
tinderUser.email = "kiran@gmail.com";
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('email'))


const obj1 ={1:"kiran",2:"kumar"}
const obj2 ={3:"kumar",4:"kiran"}
const obj3 = {...obj1, ...obj2}  //spread operator
// console.log(obj3);
console.log(Object.assign({},obj1,obj2))
