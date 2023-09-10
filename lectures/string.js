const name = "kiran"
const count = 30

console.log(`My name is ${name} and count is ${count}`)

const gameName = new String('Kumar')
console.log(gameName)
console.log(gameName.includes('kiranKumar'))
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-7,3))

const varName = new String("      kiran   kumar  01")
console.log(varName.trim());

const splitName = new String('kiran-kumar-mankali')
console.log(splitName.split('-'))