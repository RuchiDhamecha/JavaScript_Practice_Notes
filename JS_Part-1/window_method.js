// window method
// window method is a browser window
// which is the global object

// It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.

console.log(window); // this === window
console.log(this); // this === window
// this and window both are the same things in js 
// this will return the window object 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


function myFunc(){
    console.log("hello world");
}
// since window object is the global object of js that's why this myFunc method is added inside the window object and we can call this as 

// we normally call any function like this 
myFunc();

// we can also write like this because we know window object is a global object which has all the global functions and all the functions are the methods of window object.
window.myFunc();


function myFunc(){
    console.log(this);
}

// if we invoke this function now then it'll returns the window object as this 

myFunc(); 
// or 
//window.myFunc(); 
// because this is called by the window object

// but this 
// if we use strict mode inside or outside the function 
"use strict";
function myFunc(){
    console.log(this);
}
myFunc();// undefined
// this will give undefined 