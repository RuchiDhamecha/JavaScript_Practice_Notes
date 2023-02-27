//variables: var, let, const,string -preemptive data types
//variables name can be start with $

//in var if value of variable changes then while 2nd time we initize then again declare var with same name
// var a =1;
//var a=4;

//in let declare let only once and change value
// let a=2;
//   a= 3;

let age =20;
age= 21;

let num = 2;
console.log(num * 5);     //10
console.log(num ** 5);      //2^5=32
console.log(num + 3);       //5

var name=`ruchi`;
var name="priti";
const city = "dhule";
name='priya   ';

let about =`my name is ${name} and ${age}`;
let live="I live in " + city + " city" ;
console.log(about);
console.log(live);

//length
//typeof
//index[]
console.log("length of string name is " + name.length);     //8
console.log(typeof name);                                   //string
console.log(typeof age);                                    //number
console.log("1st letter of name starting from 0 : " + name[1]); //r
console.log("last letter of city dhule is: " + city[city.length -1]); 
//length starts counting from 1 n index from 0

//trim() : removes spaces after the string
let fname ="RcHi      ";
console.log(fname + " spaces: "+ fname.length);

let trimFname = fname.trim();
console.log(trimFname +" space:  "+ trimFname.length);

//toUppercase = to make string in capital letter
 fname = fname.toUpperCase();
 console.log`capital letters: ${fname}`;

//toLowercase
fname = fname.toLowerCase();
console.log`small letters: ${fname}`;

//slice() : to trim the string 

console.log(fname.slice(0,3)); 
//0 to 2 letters will be printed ...2nd half of the (0,3) is ( and ] means 3-1 will be takem
console.log(fname.slice(1));   
//after 1st letter everything will be printed


//Convert number into string
var num1 = 3;
console.log("datatype of num: "+ typeof num1);
num1 = 3 + "";   //just add quotes or space so it'll be string
console.log("datatype of num: "+ typeof num1);
console.log("datatype of age: "+ typeof age + '');

let num3 = 5;
num3 = String(num3);
console.log(typeof num3);


//convert string to number
//type + before value of variable so string will be num
var var1="22";
console.log("datatype of var1: "+ typeof var1);
var var2= +"2s";
console.log("datatype of var2 after conversion: "+ typeof var2);
console.log("datatype of var1: "+ typeof +var1);

 num3 = "5";
num3 = Number(num3);
console.log(typeof num3);


// concatination of string

let firstname ='ruchi';
let lastname= 'dhamecha';
console.log(firstname + lastname);
//for string only cancatination. for number they will add

let a='2';
let b='3'; //a and b are strings
console.log("concationation: "+ a+b); //for concatination

//to get sum of a and b convert string into number for that we simply write + before varible
console.log("sum:")
console.log(+a  +  +b);


//null operator in js
var num4 = null;
console.log("type of null: "+typeof num4)       //prints: object
//IMP: this is a BUG..developers doesnt solve this bug coz then they need to change all other things in js so they keep it as it is.


//maximum limit to store integer in variable in js
console.log(Number.MAX_SAFE_INTEGER);       
//print: 9007199254740991 , so till this only we can store value


//BigInt

//if u want to store value more than MAX_SAFE_INTEGER i.e.9007199254740991 then use BigInt. 
//we can also store value less than max safe limit

//there r 2 ways to make BigInt 
// 1)  write n after value
// 2)  write BigInt(value)
let num6 = BigInt(102874324623874291223874);
let num7 = 10287432462387429122345n;
let num8 = 12; 
num8 = 12n;   //BigInt can be less than max safe int..
//to add in num6 I made num8 bigInt , coz same datatype should be there.

// addition : (both variables should be BigInt)
console.log(num6 + num7);   //prints addition of num6 and num7
console.log(num6 + num7 +num8);


//Boolean and Comparison operator

let num9=9;
let num10=10;
console.log(num9>num10); //prints false
console.log(num9<num10);  //print true
console.log(num9>=num10);  //prints false

// == Vs ===

// == : checks value not datatype if both r same returns true else false
//=== : checks data type , thought value is same but have diferent data type it will return false.

// same for != vs !==

let int1 = 5;
let int2 = 5;
console.log(int1 == int2);  //returns true
console.log(int1 === int2);   //returns true, value n data type both r same
console.log(int1 != int2); ////returns false

int1=5;
int2 ="5";
console.log(int1 == int2);  //returns true ,checks value data type does not matter
console.log(int1 === int2);  //returns false,coz datatype is different though value is same

console.log(int1 !== int2); //it means int 1 n int2 are not same so its true because though value is same but data type is different so it will return true that values are not same

//if else condition
let int3 = 5;
if(int3%2===0){
    console.log("even no");
}
else {
    console.log("odd no");
}


//truthy and falsy value
let naame;
naame="";
naame = 0;
naame = null;

if(naame){
    console.log(naame);   //as naame is not define it will go to else
}
else {
    console.log("name is not given");
}

//ternary operator
let int4=5;
console.log( int4 >=3 ? "greater" : "smaller"); //prints greater


// AND and OR operator
// && : both condition should satsfy
let x ="xys",y=12;
if(x[0]== 'x' && y>10){
    console.log("your name start with x.");
} //if at 0th index of x there is x and y.10 then print. 

//OR ||  :atleast 1 condition should satsfy
if(x[0]== 'x' || y>10){
    console.log("your name start with x.");
} //if at 0th index of x there is x and y.10 then print. 


//nested if else if
//game
//winningno = 19 ,take guessing from user..if users guess is right print right, else if guess is less than 19 print low else if no is greter than 19 print high

let winningno=19;
let guess = +prompt("guess the no.");
//promt ask for int and input is always in string datatype , so to convert it in number write + before value
//alert is only for showing a msg not for taking input.
if (guess == winningno) {
    console.log("Right guessing!!");
} else {
    if (guess > winningno) {
        console.log("too high guessing!!");
    }
    else {
        console.log("too low guessing!!");
    }
}
















