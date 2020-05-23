function Person(name){
    this.name = name
}

/*Person.prototype.sayNameTimed = function(){
    setTimeout(function(){
            console.log(`my name is ${this.name}`)
        }.bind(this), 700)
}
let p1 = new Person("Shirley")
p1.sayNameTimed()*/


// using the assignment of this to fake lexical scope
//  this works since this is assignmed before the anonymous function
// used in the setTimeout

/*
Person.prototype.sayNameTimed = function(){
    let self = this
    setTimeout(function(){
            console.log(`my name is ${self.name}`)
        }, 500)
}
let p1 = new Person("David")
p1.sayNameTimed()
*/


// using the Arrow function Scope is defined
// think that behind the scenes the arrow function is
// actually binding the "this" scope into the function

Person.prototype.sayNameTimed = function(){
    setTimeout(() => {
        console.log(`my name is ${this.name}`)
    }, 400)
}

let p2 = new Person("Paula")
p2.sayNameTimed()
