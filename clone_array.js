//how to clone == make its copy

let arr1 = [1,2];
let arr2=arr1;
//to check if both the arrays are same
console.log(arr1===arr2); //true

///so if we do this , then if 1 operation is performed on 1 array it will afect another too. so 
//betterway make new array copy all ellemnts into that then perform operation so it will not afect previos  , for that lets learn clonning

 
let arr3 = [1,2];
let arr4 = [1,2];
//to check if both the arrays are same
console.log(arr3===arr4); //false


//to copy all elememts of arr1 in arr2

// 1. slice()   = faster
let array1 =[1,2];
console.log(array1);    //[1, 2]
let array2 =array1.slice(0);
console.log(array2);    //[1, 2]

//2. [].concat(array);
let array3 =[1,2];
console.log(array3);    //[1, 2]
let array4 =[].concat(array3);
console.log(array4);    //[1, 2]

//3. spread operator
let array5 =[1,2];
console.log(array5);    //[1, 2]
let array6 =[...array5];
let array7= [...arr1 , ...arr2];
console.log(array4);    //[1, 2]


//now after copying array into another if we want to add some more elements .let say 2 elemnts ,then
// 1.
let array8 =array1.slice(0).concat([3,4]);
console.log(array8);
//2.
//let array4 =[].concat(array3,[3,4]);

//3.
//let array6 =[...array5 , 4 , 5];


//spread operator
const newarray = [...'abc'];  //for string only
console.log(newarray);  //[ 'a', 'b', 'c' ]





 
