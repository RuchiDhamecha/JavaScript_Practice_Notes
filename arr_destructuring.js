//arry destructuring

const arr = ['val1','val2'];
//now if we want to make 2 variables and store values val1 n val2 into it so,
let value1=arr[0];
let value2=arr[1];
console.log("value of value1 is ", value1);
console.log(`value of value2 is ${value2}`);


//----------------------------------------

//in js we can use short cut for this knwn as destructuring

const arr2=['value11','value22','value33','value44','value55'];
let [myvar1,,myvar3] = arr2;

//use let
//if we dont want to assign value to myvar2

//now if we want to make new array for value44 n value55
let myNewArray = arr2.slice(3);

//let  [myvar1,,myvar3,...myNewArray] = arr2;     all remaining elements will be added

console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar3); 
console.log(myNewArray);
//prints 
// value of myvar1 value11
// value of myvar2 value33
// [ 'value44', 'value55' ]