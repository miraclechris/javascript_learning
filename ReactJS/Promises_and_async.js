

let myPromise = new Promise((resolve, reject) => {
        console.log("I am entering the Promises - myPromise")
        let noErrors = true
        if (noErrors) {
            console.log("No Errors")
            resolve("Hello from an error free feedback block")
        } else {
            console.log("Errors were discovered")
            reject("There were some errors caught in the Promise stage")
        }
    }
)

console.log("In between the test Promise and the Invocation")

myPromise.then(payload => {
    console.log("I am calling the Promise now")
    console.log("This claims to be the Success area")
}).catch(() =>{
    console.log("I am being sent to the Failure section. Oh well")
})