// there are 2 things/ phases of js 
// 1] compilation
// 2] code execution phase
 
// compilation
//  compilation has 3 phases / stages
// 1] tokenizing / lexing : breakes code in small chunks and those chunks are known as tokens

// 2] parsing : understands the small chucks / tokens and creates AST - abstract syntax tree

// 3] code generation

// in officail doc of ecma script it's not mention that the js needs compilation 
// but they have mentioned that pre error checking is important
// compilation phase is imp for
// 1) early error checking..
// 2) determining appropriate scope of a variable
//    compilation before execution is imp bcoz of that js knows that which variable belongs to which scope 



// code execution
// in js code executes inside execution context


// why compilation
// compilation phase is imp for
// 1) early error checking..
// 2) determining appropriate scope of a variable
//    compilation before execution is imp bcoz of that js knows that which variable belongs to which scope 


// how js code executes

// what is global execution context ?
// Whenever the JavaScript engine receives a script file, 
// it first creates a default Execution Context known as the
// Global Execution Context (GEC) . The GEC is the base/default 
// Execution Context where all JavaScript code that is not
// Inside of a function gets executed. For every JavaScript file, there can only be one GEC.
// 1] creation phase ( it creates before starting of the code execution phase )( we can also call this as a memory creation phase )
// 2] code execution phase

//  2] code execution phase     1] creation phase(global memory)
//  ______________________________________________________
// |                            |    window obj : {}     |
// |                            |     this : window      |
// |                            |    variable :undefined |
// |                            |                        |
// |                            |      function  : f()   |
// |                            |                        |
// |                            |                        |
// |____________________________|________________________|

// these all key value pairs stores in a object and that object is called environment record
// global execution context is added into stack 
// or whichever execution context like global or local is in work
// currently is pushed to the top of the stack

//  |                |
//  |                |
//  |----------------|
//  |                |
//  |----------------|
//  |                |
//  |----------------|


// js is synchronous programming language 
// and is a single thread



// what is local execution context ?
// or function execution context
// closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Nayan";
