//              Error Handling

// ================ types of errors ============

//reference error = when variable is not initialized

//syntax error = incorrect syntax that js cant read

//TypeError = run a method on a non-supported data type ex,"hello".pop()

//RangeError =  giving a value to a function, but that value is out of the allowed range of acceptable input values.
//*ex. (10).toString(100);
// here if (10).toString(2) will convert 10(decimal no) into (2) binary no.
//if (10).toString(8) will convert 10(decimal no) into (8) octate no.
// but there doent exist any base 100 value like base 2,8, 16 so it wil throe range error

//example to handle reference error

console.log(a,b); 
console.log("program doesn't stop");
//a,b values r not initialized/assigned.. so as we r directly printing it it will throw error and not execute further lines of code
//but if we use try catch method for error handling it can run some different thing instead and proceed for next line to execute
try{
    console.log(a,b)
} catch(err){  //can write anything instead of err
    console.log(err)
    console.log("there's an error")
    console.log("error is in the error log of browser or terminal")
}
console.log("my program doesnt stop")


//now if we dont knw where err will occur but knw reference error can occur we can use..
try{
    throw new ReferenceError();
} catch(err){
    console.log(err)
    console.log("theres a reference error")
}
console.log("my program does not stop");
