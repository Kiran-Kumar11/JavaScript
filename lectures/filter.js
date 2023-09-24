// it gives return bcz we are using filter

const num = [1,2,3,4,5,6,7,8]
const newNum =num.filter( (num) => 
{return num > 4}
)
//console.log(newNum);

const books = [
    {title : "book one", genre:"history", published:"1900"},
    {title : "book two", genre:"psychology", published:"2000"},
    {title : "book three", genre:"science", published:"2010"},
    {title : "book four", genre:"history", published:"1800"}

]

const book = books.filter( (item) => {
    return item.title==="book one" || item.published ==="2000"
})
//console.log(book)

const nums = [1,2,3,4,5,6,7,8]
const newNums = nums.map( (num) => num + 10).map( (num)=> num+1).filter((num) => num>15)
//console.log(newNums);

const number = [1,2,3,4,5,6]
//const newNumber = number.reduce(function (acc,currVal) {
    
    //console.log(`acc ${acc} and value ${currVal}`)
    //return acc+currVal

// },0)
// console.log(newNumber);

const newNumber = number.reduce( (acc,currVal)=>{
    console.log(`acc ${acc} and value ${currVal}`)
    return acc+currVal
},0)
console.log(newNumber)

const student =[
    {
        course:"js",
        price:4000
    },
    {
        course:"java",
        price:400
    },
    {
        course:"python",
        price:2000
    }
]

// const newStudent = student.reduce((acc,item)=>acc + item.price, 0)
// console.log(newStudent);

const newStudent = student.reduce(function (acc,currVal){
    return acc+currVal.price
},0)
console.log(newStudent)