//sort method
//ASCII table
//char: ascii value

// 0 : 48
// 1 : 49
// 2 : 50
// 3 : 51
// 4 : 52
// 5 : 53
// 6 : 54
// 7 : 55
// 8 : 56
// 9 : 57

// : 58
// ; 59
// < 60
// = 61
// > 62
// ? 63
// @ 64

// A 65
// B 66
// C 67
// .
// .
// Y 89
// Z 90

// [ 91
// \ 92    
// ] 93
// ^ 94
// _ 95
// ` 96


// a 97
// b 98 
// c 99
// .
// .
// z 122


//sort method =========================================
const num =[1,24,35,4];
//js sort it as if its string,,,so it will sort acc to its respective ascii code
num.sort();
console.log(num);  //[ 1, 24, 35, 4 ]
//folowing op is also a sort array but sorted by ascii value


const name=['r','t','a','A'];
name.sort();
console.log(name);   //[ 'A', 'a', 'r', 't' ]  ...sorted using ascii value
//sorted it properly

//sort============================
const numm =[1,24,35,4];
numm.sort((a,b)=>{
    return a-b;  //ascending order
});
//numm.sort((a,b)=>a-b);
console.log(numm);   //[ 1, 4, 24, 35 ]

//it check by observing if substarction result of a-b is negative,
// if negtive sequence is a,v
//if positive sequence is b,a

//descending order=================
const nummm =[1,24,35,4];
nummm.sort((a,b)=>{
    return b-a;  //descending order
});
console.log(nummm); //[ 35, 24, 4, 1 ]


//example
//to sort product from low to high(ascending order)

const usercart = [
    {product_id:1,name:"mob",price:1000},
    {product_id:2,name:"mobf",price:107},
    {product_id:3,name:"mobm",price:10009}
];

usercart.sort((p1,p2)=>{
    return p1.price - p2.price;  //ascending
    //return p2.price - p1.price;  descending
})
console.log(usercart);
