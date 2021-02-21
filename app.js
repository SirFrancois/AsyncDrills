let logString = (message) => console.log(message);

logString("Hello")

setTimeout(() => {
    logString("Another string")
}, 2000);

let getWords = () => {
    console.log("First message");

    setTimeout(() => {
        console.log("Final message");
    }, 3000)
    
    setTimeout(() => {
        console.log("Third message");
    }, 2000)

    setTimeout(() => {
        console.log("second message");
    }, 1000)
}

getWords();

//Callbacks and Recursion
let done = () => console.log("Job's done!");

let countdown = (num, callback) => {
    if(num=== 1) {
        callback();
    } else {
        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
    }

}

countdown(5, done)

//Promises Promises
let lunchTime = true

const orderMeSomeFood = () => {
    return new Promise ((resolve, reject) => {
        if(lunchTime) {
            let myFavLunch = {
                lunch: "Pizza",
                drink: "Coke"
            }
            resolve(myFavLunch)
        } else {
           let errorMessage = new Error ("It's not lunchtime!");
           reject(errorMessage)
        }
    });
}
orderMeSomeFood()
    .then(res => console.log(res))
    .catch(err => console.log(err));

