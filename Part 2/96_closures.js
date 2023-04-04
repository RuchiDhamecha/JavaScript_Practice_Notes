

function myFunc(power) {
    return function(number) {
        return number ** power;
    }
}

const square = myFunc(2);  // when this hello function is called then a Function execution context will be created, which will return a anonymous function and that function will be stored into square variable
//  square = function(number) {
//       return number ** power;
// }
// and with this function it'll return the local memory variables i.e., power here which is having value 2 that we have passed as a argument
// power = 2
// now ans square is having a function inside it and having a variable with it

const ans = square(3);
// now when this square is called it is having a function as a value means we can say that square is a function now
// and we are passing an argument to it 
// not this function will return the number ** power
// we are already having power which is at the square variable present with the returned function


// so that the returned function and that value is the closure

console.log(ans);


// same we can for checking the cube 
const cube = myFunc(3); 
const ans2 = cube(3);
console.log(ans);


// we can write the above myFunc like this as well 
// using the arrow function

// when we return a single expression we dont curly braces 
// and we dont even write the return keyword as well 
// we can simply do like this
// const function = power => number => number ** power
// as we know when there is a single parameter in arrow function we don't write paranthesis ()