// preemptive vs reference data type
// preemptive = number ,string
//reference= array


//preeemptive
let num1 = 2;
let num2 = num1;
console.log(num1);  //2
console.log(num2);  //2

num1++;
console.log(num1);  //3
console.log(num2);  //2  this will be as it is


//reference types
//arrays
let arr1= [1,2];
let arr2= arr1;
console.log(arr1);  //[1, 2]
console.log(arr2);  //[1, 2]

arr1.push(3);
console.log(arr1);  //[1, 2, 3]
console.log(arr2);  //[1, 2, 3]
//here both the values will change ,, bc array pointers will point towards both the arrays
//2 points but only one memory address i.e both will have same address

