// hoisting
// JavaScript interpreter splits the declaration and assignment of 
// functions and variables: it "hoists" your declarations 
// to the top of their containing scope before execution. 
// This process is called hoisting, and it allows us to use foo before its declaration in our example above

// variables using var let and const are hoisted
// means varibles will be added to the environment record or variables at the creation phase of GEC


console.log(this);
// console.log(window);
console.log(myFunction);
// o/p
// myFunction() {
//     console.log("this is my function");
// } 
//  this will the function and not the statements inside the function
console.log(fullName);

//  this function will be store as it is inside the creation phase bcoz we have created this using 
// function declaration
function myFunction() {
    console.log("this is my function");
}



// In case of var keyword


// when any variable created using var 
// those are stored inside creation phase with value undefined at the 
// starting phase of global execution context

var firstName = "nayan";
var lastName = "sayaji";
var fullName = firstName + " " + lastName;
console.log(fullName);




// if function is created using function expression and with 
// var keyword then if the creation phase it will aslo have the undefined as a value
var myFunction = function() {
    console.log("this is my function");
}


// In case of let and const keyword

console.log(firstname);
console.log(lastname);


// in case of let and const the variables are added into the 
// environment varibles but their value will be initialised 
// means the varibles are not intialised yet 
// means they don't have any value inside them
// they will give 

// ReferenceError: Cannot access 'firstname' before initialization
// when we will try to access them before intialization
let firstname = "nayan";
const lastname = "sayaji";


// There is a term called tdz
// Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. Temporal Dead Zone starts when the creation phase completed and code execution enters the block which contains the let or const declaration and continues until the declaration has executed or  untill the let and const are initialised with a value.



// in memory creation phase or creation phase the variable or function
// created using var will have the value undefined untill the intialization comes

// the variable or function
// created using let and const will have the value uninitialised untill the intialization comes
