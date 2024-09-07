// ? Async functions are a way to work with asynchronous code in a moresychronous way. 
//They are built on top of promises and are syntatic sugar for promises.

console.log("Ordering your pizaa...");

//Creating a promise
const pizaaPromise = () => {
    return new Promise ((resolve, reject) => {
        //resolve and reject are callback functions
        //what is callback function?
        // a callback function is a function that is passed as an argumentto another function, to be "called back" at a later time.
        let order = true;

        if (order){
            setTimeout (() => { // setTimeout is used to simulate a delay
                resolve ("After 5 seconds, Pizza delivered");
            }, 5000);
        }else{
            setTimeout(() => { //setTimeout is used to simulate a delay
                reject("After 5 seconds, Pizza not delivered");

        }, 5000);

        }
    });    
}
// calling the function with a promise
// use.then() to handle the resolved promise
// use.catch() to handle the rejected promise
pizaaPromise()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza...");
//Terminology
//Promise: An object that represents the eventual
//completion (or failure) of an asychronous operation and its resulting value.
//Resolve: A callback function that is used to when the promise is fulfilled.
//Reject: A callback function that is used when the promise is rejected.
//.then(): A method that is used to handle the resolved promise.
//.catch(): Amethod that is used to handle the rejected promise.
