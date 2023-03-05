function hello(){
    console.log("hello World");
}


// in objects key's are known as properties which haves some values...
// sometimes key have values as string numbers
// sometimes have function as a value
// we can say that key and properties are interchangable words
// obj1 = {
//     key: "value",
//     property1: "value1",
//     property2: "value2"
// }


// javaScript function =====>> function + object
// in js function is treated function and we can treat it as object as well...

// my objects have their properties so there are some properties for function as well bcoz we are treating it as object
console.log(hello.name()); 
// name() property ---->>  tell the name of function


// we can add our own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty); // very unique value

// functions provide more useful properties.


// function gives us a empty object {} which is known as prototype

// prototype is a property of functions

// this is given bcoz suppose sometimes we need to save any key value pairs we can store in that prototype...

console.log(hello.prototype); // {}
// constructor: ƒ hello()

// only functions provide prototype property 

// const hello = [1,2,3,4]; // 81.js:45 prototype is not present..

// const hello = {k1:1, k2:2}; // 81.js:45 prototype is not present..

// function hello(){
//     console.log("hello World");
// }

if (hello.prototype) {
    console.log("prototype is present..")
}else{
    console.log("prototype is not present..")
}
// o/p for hello function:
//                    prototype is present..


// creating or adding properties into the prototype of hello function
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "babyyyyyyyyyy babyyyyyyyy";
}

console.log(hello.prototype.sing());

// __proto__ in objects and prototype property in function both are different