//  Generators are a completely new Construct
//  Note the * which terminates the assignment name of a generator

function* infinite(limit){
    let count = 0
    while(true){
        if (count > limit){
            return
        }
        yield count++
    }
}

function* silly(){
    yield 1
    yield 2
    return 3
}

let generator = infinite()
let sillyGen = silly()

console.log(sillyGen.next())
console.log(sillyGen.next())
console.log(sillyGen.next())
console.log(sillyGen.next())
console.log("--------")

let nums = [1,2,3,4]
for (let num of silly()){
    console.log(`The number of silly is ${num}`)
}

let testFor = ["a", 2, 4, "like", "sea", 9, 2, 7]

for (let item of testFor){
    console.log(`The item is ${item}`)
}

console.log(`The pow function says: ${Number.isFinite(Math.pow(10, 20))}`)