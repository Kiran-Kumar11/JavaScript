const number = function(){}
if(number){
    console.log("truthy value");
}else{
    console.log("falsy value");
}

const nam =[]
if(nam.length === 0){
    console.log("truthy vslue");
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("wah anna wah");
}

let val1;
//val1 = 5 ?? 10
val1 = null ?? undefined ?? 10
console.log(val1)

const num = 100
num>80? console.log(">80"):console.log("<80");
