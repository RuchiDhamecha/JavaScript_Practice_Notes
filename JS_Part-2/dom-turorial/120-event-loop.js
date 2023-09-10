// event loop

// read here:
// https://www.freecodecamp.org/news/javascript-concurrency-model-and-event-loop/



// Heap: It’s mostly the place where objects are allocated.

// Callback Queue: It’s a data structure that stores all the callbacks. 
// Since it’s a queue, the elements are processed based on FIFO which is First in First Out.

// Event Loop: This is where all these things come together. 
// The event loop simply checks the call stack, and if it is empty 
// (which means there are no functions in the stack) it takes the oldest 
// callback from the callback queue and pushes it into the call stack which eventually executes the callback.

console.log("Script Begin >>>>>>");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num = 0;
        
        for (let i = 0; i <= 100000000; i++) { 
            num += i; 
        }
        console.log(e.currentTarget.textContent , num);
    })
})

let outerVar = 0 ;
for (let i = 0 ; i <= 100000000; i++) { 
    outerVar += i; 
}
console.log("value of outerVar is :", outerVar);

console.log("Script End >>>>>>");   