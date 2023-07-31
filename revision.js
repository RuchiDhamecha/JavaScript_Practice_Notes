//what is sync & async javascript

// sync : 
//tasks will be executed 1 by 1 
//if we r using functions like these it means we r writing asynchronous code
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest
//else it is synchronous code
//async : all tasks/operations will be executed in parallel/simultaneously/at the same time.
//many times final code is dependant on someone else's server, so it may take much time to give every ans one by one , it can cause blocking..
//to resolve this we use async code.. to execute all the ans in parallel way
// but if we r writing async code
////and we want hello world line only after 1st task executed/ after sometime
//use setTimeout
console.log("heyy");
setTimeout(function(){
    console.log("hello world")
},3000);
console.log("helloo");
//output:
// heyy
// helloo
// hello world