// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

// let burgerPromise = new Promise((resolve, reject) => {
//     let isRestaurantOpen = false;
  
//     if (isRestaurantOpen) {
//       resolve("Burger is ready!");
//     } else {
//       reject("Sorry, we're closed.");
//     }
//   });
  
//   // Using the promise
//   burgerPromise
//     .then((message) => {
//       console.log(message);  // If the promise is resolved
//     })
//     .catch((error) => {
//       console.log(error);  // If the promise is rejected
//     });
  
const fs = require("fs");

console.log("-------top of the file-------");

function readTheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(() => {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified(fileName) {
  console.log("setTimeoutPromisified called");
  // read the file and return its value
  return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback() {
  console.log("timer is done");
}

p.then(callback);

console.log("-------end of the file-------");

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)
  