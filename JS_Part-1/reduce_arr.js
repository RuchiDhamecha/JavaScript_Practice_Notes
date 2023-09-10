//Reduce method in array

const num =[1,5,2,3];
const sum = num.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});
//aim: sum of all nums
console.log(sum);   //11

// accumulator , currentValue, result
// 1               5               6
// 6               2               8
// 8               3               11(sum)

const usercart = [
    {product_id:1,name:"mob",price:1000},
    {product_id:2,name:"mobf",price:10007},
    {product_id:3,name:"mobm",price:10009}
];

const bill = usercart.reduce((t_price,current_product)=>{
    return t_price = current_product.price ;
},0); //0 is initial value/price
console.log(bill);  //10009