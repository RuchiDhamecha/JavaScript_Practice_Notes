//every method of array

const num=[1,2,4,5];
const myans = num.every((number)=>number%2==0);
//now this will check all elements in array if all satisfiies condition then only will give true else false
console.log(myans);   //false

//callback function ----> true/false(boolean)
//every method ----> true/false(boolean)
const nums =[1,4,2];
const ans = nums.every((num)=>num%2===0);
console.log(ans); //false
//false because 1 element does nt satisfy condition


//example========================================
//check if all products have price less than 2000

const usercart = [
    {product_id:1,name:"mob",price:1000},
    {product_id:2,name:"mobf",price:100},
    {product_id:3,name:"mobm",price:109}
];

const the_ans = usercart.every((item)=>item.price<2000);
console.log(the_ans);  //true