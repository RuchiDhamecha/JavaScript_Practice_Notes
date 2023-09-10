//array- ordered collection of items 
//it is an object
//any data types can be stored in an array

//here we r using 'let' so we again delare same many times n can change


let fruits=['apple','grapes','mango'];
let array=[2, 3 , 'your',7];

console.log(fruits[1]); //prints value present on 1st index of fruits i.e. grapes

console.log(array);

let num=[0,1,2,2];
console.log(num);       //[0, 1, 2, 2]
// to replace the element in array
num[1]=8;
console.log(num);       //[0, 8, 2, 2]

console.log(typeof num);        //object
//as it shows object ,how will we knw it is array, becoz object literal is also there ,so confusion may occur

 console.log(Array.isArray(num));   //to check if its array..returns boolean value
  //returns true 


//push pop
//insert/pop element from the end
let numbers = [1,1,3,4,4,6];
console.log(numbers);       //1,1,3,4,4,6

numbers.push(33);      //1,1,3,4,4,6,33
numbers.push(45);      //1,1,3,4,4,6,33,45
console.log(numbers);   //1,1,3,4,4,6,33,45

numbers.pop();
console.log(numbers); //1,1,3,4,4,6,33

let popped_num = numbers.pop();
console.log(numbers); //1,1,3,4,4,6
console.log(popped_num);   //33

//shift unshift  - slower (it changes index of elemnts)
//unshift == push from start
// shift == pop from start
fruits.unshift("banana");
fruits.unshift("chickoo");
console.log(fruits);    //['chickoo', 'banana', 'apple', 'grapes', 'mango']

fruits.shift();
console.log(fruits);   
// ['banana', 'apple', 'grapes', 'mango']
let shifted_fruit = fruits.shift();
console.log(fruits);
console.log(shifted_fruit);


// for loop in array
//ptint the array in uppercse uppercase array should be stored in new array
let fruit=['m','n','f','g'];
let upperfruit =[];

for(let i=0; i<fruit.length; i++)
{
  upperfruit.push(fruit[i].toUpperCase());
}
console.log(upperfruit);


///let in array

var a1 = [1,2,3];
 var a1=[4,5];
console.log(a1);      //prints [4,5]
//in 'let' or 'var' we can directlty change the value in the array entirely





