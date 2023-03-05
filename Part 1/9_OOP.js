// javascript array has a lot functions for array 
// so from where array got this functions

// got from prototype
// but we know only function has ---> prototype 

// array is also a function internally which uses constructor
// let numbers = new Array(1,2,3);
// with new keyword here array constructor is called and it sets 
// the value of proto equal to the protoype of array constructor function 
let numbers = [1,2,3];
console.log(numbers);



console.log(Object.getPrototypeOf(numbers));
// as we know that whenever a function is created then a empty 
// object {} prototype is created for that function.
// but in case of array that prototype created is a array itself..[]
console.log(Array.prototype); // prototype of Array
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(Array.isArray(Array.prototype));

// this is fine bcoz array is also a type of object which stores values 

function hello(){
    console.log("hello");
}

// we can change type of prototype of any function
// suppose we want to change type of hello() function's prototype
// hello functions prototype is empty object now {}
console.log(hello.prototype); // {}
// let's change it to empty array []
hello.prototype = []; 
hello.prototype.push('1');
console.log(hello.prototype); // [ '1' ]