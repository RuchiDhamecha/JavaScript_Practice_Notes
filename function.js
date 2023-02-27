//function 
function happy(){
    console.log("birthdayyyy");
}
//calling function
happy();        //birthdayyyy


//fun
function sum(num1,num2) {    //parameters
    return num1+num2;
}
console.log(sum(3,4));     //7    //argument

//if we pas 0 or less arguments then it will print NaN
 
//ip=string
//op=1st char of string
function stringchar(anystring) {
    return anystring[0];   
}
console.log(stringchar("Ruchi"));   //R


//function to find index of target
function find_target(array,target) {
    for(i=0;i<array.length;i++){
        if(array[i]===target){
        return i;
        }
    }
    return -1;
}
const myArry=[1,2,3,4];
const ans=find_target(myArry,3);
console.log(ans);       //2




//function expressions
//function can also be declared  as
const myfun=function(){
    console.log("new");
}
myfun();        //new



//arrow functiom

const myfunn= () => {
    console.log("new");
}
myfunn();    //new

   
//functtion
const isEven = (number) =>{
    if(number===2)
    console.log("true");
}
isEven(2);


//====================================================
//hoisting

addd();    //calling before declaring

const addd = () =>{     //declaring
    return 6+4;
}           //erorrrrrrr

//in simple function declaration there will be no error

summ();
function summ() {
    console.log(2+3);
}       //5      ...no error


