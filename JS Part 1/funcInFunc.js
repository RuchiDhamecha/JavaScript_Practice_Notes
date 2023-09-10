//function inside functiom
function app() {
    const myfunc = () =>{
        console.log("hello");
    }

    const addTwo=(n1,n2)=>{
        return n1 + n2;
    }

    const mul = (n1,n2)=> n1*n2;

    console.log("inside app");

    myfunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));


}

app();




//==================================================
//lexical scope
//means such environment frm whr we can take variable value
//like if var value is not defined in nested function then it will check upperka function and will take that value..and if in that functon there is no that value it will check if its globbally declared

let b=2;
function myapp() {
    var a=5;

    function f1() {
        var a=1;
        console.log(a);     //1
    }
    const f2 = () =>{
        console.log(a);    //5
        console.log(b);    //2
    }

    f1();
    f2();
}

myapp();


//=====================================================
//block scope n function scope
//let n const are block scope
//var is function scope

// //block
// {
//     let x=3;
//     const d=5;
//     console.log`${x} ${d}`;
// }

// console.log`${x} ${d}`;         //error
//value outside the block will not be recognized


//var can be used anywhr not only in block
{
    var e=2;
    console.log(e); //2
}
console.log(e); //2


//=============================================
//default parameters
function adddd(a,c=1) {  //default value to see if argument doent pass then use c=1
   return a+c; 
}
console.log(adddd(2,)); //3

//=====================================================
function f4(a,s) {
    console.log(`extra ${a}`);
    console.log(`${s}`);
}
f4(3,4,5,5); //3 4

//Rest Parameters ==============================
//now remaining arguments we passed are use less they will not give error and will not be used anywhere

//now to mke array of these extra elements and can be able to add in same parameter:

function f5(a,...s) {
    console.log(`extra ... ${a}`);
    console.log(`${s}`);
    console.log(s);    //[ 4, 5, 5 ]
}
f5(3,4,5,5);     //extra ... 3  4,5,5


//example
function addall(...numbers) {
    let total=0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
console.log("add using rest parameters: " + addall(2,4,5,5,6));


//parameter destructuring===================================
//object 
//react

//1.
const person={
    fname:"ruchi",
    gender:"f",
}

function details(obj){
    console.log(obj.fname);
    console.log(obj.gender);
}
details(person);   //ruchi f


//2.destructuring
const personn={
    fname:"ruchi",
    gender:"f",
}

function detailss({fname,gender,age}){
    console.log(fname);
    console.log(gender);
    console.log(age);   //undefined
}
detailss(personn);   //ruchi f undefined


//====================================================
//default parameter
function ad(a,b){
    if(typeof b === 'undefined'){
        b=0;        //when b's aurgument is now given 
    }
    return a+b;
}
console.log("default parameters");
console.log(ad(4));         //only a parameter is passed not to b

//4+0=4         //prints 4

//in the same way in function parameter too we can give default value
function cat(a,b=1) {
    return a+b;
}
//if argument is not passed to a, take value as b=1
console.log(cat(2));    //3