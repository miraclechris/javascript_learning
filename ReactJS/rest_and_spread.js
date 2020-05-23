function add(...values){
    console.log(arguments)
    console.log(arguments[0])
    console.log(`Arguments are of type: ${typeof(arguments)}`)
    //  This effectively means nothing - the proto is not recommended for manipulation:
    //  console.log(`Proto of the object: ${arguments.__proto__}`)
}

add(2, 3, 4, 5, 9, 23,6)

let numbers = [1,2,3,4,5,6,7]
// A forEach does not have a definitive retrun value
numbers.forEach(function(number){
    console.log("- Looping the Number: " + number)
})

// A map will return a mapping of each of the entries
let number4 = numbers.map(function(number) {
       return number * 4
})

let number5 = numbers.map( number => number * 5)

console.log("Numbers 4  = " +  number4)
console.log("Numbers 5  = " +  number5)
console.log(number5)

let numbers3 = numbers.map( number  => number * 4 )
console.log(typeof(number5))

let sum = number5.reduce( function(memo, value){
    console.log("Number is: " + value)
    return memo + value
    }, 0)

//  Assign values to x and y in order to try out the ES6 features
let x = 9
let y = 5

let myModulo = (a, b) => {
    return a % b
}

let c = myModulo(x, y)

console.log (`My Modulo says: ${c}`)

console.log(`X times Y = ${x * y}`)

console.log(`The SUM value of the Reduction is: ${sum}`)

console.log(`Numbers 3 =  ${numbers3}`)