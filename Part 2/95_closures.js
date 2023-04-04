// closures


// function which return functions
// function outerFunc(){
//     function innerFunc() {
//         console.log("Hello World");
//     }
//     return innerFunc;
// }

// const ans = outerFunc(); 
// console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}
// when a function is returning a function then 
// that function will return with the local variable 
// of the function in which it's written
// means returning function will have the parameters of the parent function ( or the function in which the returning function is written) as the variables 

// those variables are added into the local memory of that function

// eg
// printFullName is returning a function 
// printName but printName is not having any parametetrs
// into it so what it will do is 
// it'll return with parameters of printFullName function 
// bcoz printName is writtten inside of the printFullName function


// so here local variables for the printName are
// firstName and lastName

const ans = printFullName("Nayan", "Sayaji");
// this ans will have the function printName with the parameters of it's parent function
console.log(ans);
ans();


// when a function returns it takes the  local memory varibles 
// with it and those variables  are known as closures
// A closure is the combination of a function bundled together 
// (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope
// from an inner function. In JavaScript, closures are created 
// every time a function is created, at function creation time.


// A closure is the combination of a function and the lexical environment 
// within which that function was declared.