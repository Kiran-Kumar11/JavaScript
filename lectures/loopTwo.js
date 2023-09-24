const num =[1,2,3,4,5,6]
for (const i of num) {
//console.log(i)
}

const greetings ="Hello Good Morning"
for (const greet of greetings) {
   // console.log(greet)
    
}

const map = new Map()
map.set('IN', "India");
map.set('US', "United States");
map.set('FR',"France")

// console.log(map)

for (const [key,value] of map) {
    //console.log(`KEY is ${key} and VALUE is ${value}`);
}


// For In

const myObj = {
    name:"Kumar",
    clg:"vits"
}

for (const key in myObj) {
    //console.log(`${key} it's value is ${myObj[key]}`);
}

const myArray = ["java","py"]
for (const num in myArray) {
    //console.log(num);
  
}

//for each

const programming = ["java", "python", "cpp"]
programming.forEach(function (item){
    //console.log(item)
})

const program = ["java", "py", "js"]
program.forEach( (item) => {
//console.log(item)
})


const coding = [
    {

        lang:"javaScript",
        file:"js"
    },
    {
        lang:"python",
        file:"py"
    },
    {
        lang:"java",
        file:"java"
    }
]

coding.forEach( (item) => {
    console.log(item.file)
    console.log(item.lang)
})
