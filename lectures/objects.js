
const mySym = Symbol("key1");
const student = {
    name:"kiran",
    "full name": "kiran kumar",  // full name variable is also string
    [mySym] : "myKey",
    class: 5,
    wentScl: false,
    location:"karimnagar",
    email:"kiran@gmail.com",
    presentDays: ["monday","wednesday"]

}


// console.log(student.email)
// console.log(student["email"])
// console.log(student["full name"])
// console.log(student[mySym]);

// student.email = "kirankumar@google.com"
// Object.freeze(student)
// student.email = "kumarkiran@google.com"
// console.log(student);



student.greeting = function(){
    console.log("hello world")
}

console.log(student.greeting())

student.greeting2 = function(){
    console.log(`hlo kiran your mail id is ${this.email}`) // this keyword is used to refer to the current object or context within a function or method. 
}
console.log(student.greeting2())
