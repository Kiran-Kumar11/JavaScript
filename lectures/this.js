const student={
    username:  "kiran",
    number : 541,
    city : "karimnagar",
    details : function(){
        console.log(`${this.username} is the name, welcome `)
        console.log(this)
    }

}
student.details()



const laptop={
    company : "ASUS",
    manufactured : "London",
    price:54000,

    product: function(){
        console.log(`${this.company} is the company`)
        console.log(`${this.price} is the price`)
        console.log(this)
    }
}
laptop.product()
laptop.company="sony"
laptop.product()

function chai(){
    console.log(this)
}
chai()

// const saree = function(){
//     let shop = "RS Brothers"
//     console.log(`${shop} is the shop`)
// }
// saree()

const saree = () =>{
    let shop = "RS Brothers"
    console.log(`${this.saree} is the shop`)
}

const adding = function(num1, num2){
    return num1 + num2
}
console.log(adding(23,7))

const substraction = (num1, num2) =>{
    return num1 - num2
}
console.log(substraction(34,12))



