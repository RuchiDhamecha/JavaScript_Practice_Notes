//what is sync & async javascript

// sync : 
//tasks will be executed 1 by 1 
//if we r using functions like these it means we r writing asynchronous code
// setTimeout
// setInterval
// Promise
// fetch
// axios //used to fetch data from third party/to call api
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

//it means as code is async but we want other things to execute 1st we use setTimeout.. or write something which should be called in certain time.. such function is 
//callback function
//which runs after completion of async code.
//i.e after completion of  given time in setTimeout, it will start executing function(callback) inside settimeout


//main stack == gives output
//side stack == does processing behind the scenes, after completion of process can be added to main stack
//**event loop == transfers operations from side stack to main stack

//sync code is always in the main stack and executes 1st , later when main stack is empty it checks side stack if async work has done..if 2nd task of async done earlier , will go to main stack n gives output , afterwords 1st async task which was processing parallely in side stack, event loop will take it to main stack n will give its output.

//lets take an example 
console.log("heyy");
setTimeout(function(){
    console.log("hello world")
},0);          //time is 0ms , should execute immediately
console.log("helloo");
//output
// heyy
// helloo
// hello world
//though we gave it  0ms time it should have to be executed 1st or after 1st line.. but it executed at the last,
//because as it is asynchronous code it is in side stack,
//all other codes were in main stack so it executed 1st, later it checked side stack , the process was executed already so event loop took it to main stack and gave output.

//javascript is single threaded
//not a multi threaded though it performs tasks simultaneously
//it gives mili sec of time ti 1st process and other ms time to another process and keeps shifting from 1 process to another until it gets executed completely.


//========= promises ====================================
// if condition is true can resolve else can reject
var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else {
        return rej();
    }
})

//if resolved we use "then"
.then(function(){
    console.log("resolved");
})

//if rejected we use "catch"
.catch(function(){
    console.log("reject hua tha!");
})

// example 1 ===================================
//user will ask a no. between 0 to 9, 
//if no. is bellow 5 resolve, else reject

var ans= new Promise((res, rej)=> {
    var n = Math.floor(Math.random()*10);

    if(n<5)  return res();

    else return rej();
})

ans.then(function(){
    console.log("below 5")
})

ans.catch(function(){
    console.log("above 5");
})

//will print "above 5" or "below 5" according to the random value we got


//example 2 =========================================

// sabse pehle gahr Aao 
// gate khollo gate lagao
// khana pakao khana khao
// do homework
// sleep

var ans = new Promise(function(res,rej){
    return res("sabse pehle gahr Aao")
})

var p2 = ans.then(function(date){
    console.log(data);
    return new Promise(function(res,rej){
        return res("gate khollo gate lagao")
    })
})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("khana pakao khana khao")
    })
})

p3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("do homework")
    })
})