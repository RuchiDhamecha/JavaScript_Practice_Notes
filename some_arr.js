//some  method in array
//for atleast 1 no. in array
//boolean value returns

const num=[1,2,34,4];
//to check atleast 1 no. is even
const ans=num.some((number)=>number%2===0);
console.log(ans);       //true

//example==========================
//to check if atleast any 1 product price is more than 1100

const usercart = [
    {product_id:1,name:"mob",price:1000},
    {product_id:2,name:"mobf",price:12007},
    {product_id:3,name:"mobm",price:13009}
];

const result= usercart.some((pp)=>pp.price > 1100);
console.log(result);  //true