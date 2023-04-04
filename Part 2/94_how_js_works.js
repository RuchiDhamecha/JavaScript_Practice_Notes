// local / function execution phase

// array like objects are not the arrays but are the objects 
// which have the length property and they can be accessed using index

// so when the function is called then function execution context 
// is created inside of the global execution context..

//         {   Global execution context  }
//             Code execution phase           creation phase
// __________________________________________________________
// |                                       |                |
// |                                       |                |
// |    function execution context         |                |
// |     |-----------------------|         |                |
// |     |  Code     | creation  |         |                |
// |     | Execution |  phase    |         |                |
// |     |           |  local    |         |                |
// |     |           |           |         |                |
// |     |-----------------------|         |                |
// |                                       |                |
// |_______________________________________|________________|

// function execution phase consist a array like object 
//  arguments [......]   which has the arguments in it
// and has the variables created inside the function
// and Function execution context is removed once the
// line which called the function is executed.
eg,
function myFunc(){
    let name = "nayan";
    console.log(name);
}

console.log(myFunc()); // when this line comes the function execution context 
// will be created for the function inside of the global execution context
// and when the line is executed completely then the function execution context will be deleted from GEC