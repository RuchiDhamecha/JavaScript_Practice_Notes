//use of const for creting array

// array is stored in the heap memory
///variable ex. fruit will only have the address of heap..
//so after cretion of array if we push some more elements or pop then it will work thought its const array...because address will not changeonly the memory in heap will chage
//but if 
//const fruit =['a','s'];

//fruit = ['u','i'];
///now ths will give error..again using square braces means u r making new array
//using push or pop uses circular braces means iits only modfying not making new array..
console.log("for loop");
const fruits =['a','d'];
//fruits = 0*11 ..it stores memory location...heap will store ['a','d']
fruits.push("f");  //stored in heap ..memory location is same..
//so push pop only is allowed in const
console.log(fruits);        //a,d,f


//while loop in array using const
console.log("while loop");
const arr =['e','r','t'];
let i=0;
const neew = [];
while(i<=arr.length - 1){
    neew.push(arr[i].toUpperCase());
    i++;
    }    
 console.log(neew);         //E,R,T


 //For of loop
 console.log("for of loop");

 const arr2 =[2,3,4,5];

 for(let i of arr2){
    console.log(i);         //2,3,4,5 prints value directly
 }

 //for in loop
 console.log("for in loop");
 const arr3 =[2,3,4,5];

 for(let i in arr3){
    console.log(i);         //print index  0,1,2,3

    console.log(arr3[i])   //prints vlalue
 

}                  