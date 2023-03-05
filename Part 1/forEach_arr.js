//Important array method
// forEach


//take first element in array and its index as ip of function and multiply num bby 2
const nums =[3,4,5,5];

function mulby2(num,index){
    console.log("index is",index);
    console.log(`${num}*2 = ${num*2}`);

}
mulby2(nums[0],0);
//now do it for all elemsts in array
for(let i=0;i<nums.length;i++){
    mulby2(nums[i],i);
}

//===============================================
//forEach

const arr =[1,2,3,6];
//forEach is a element that work as loop for every element , we pass parameter : 1) elements of array 2)index of element(optional)
//we can give any meaningful names to aurguments rather than num and index 
arr.forEach(function(num,index){
    console.log(num*3 , index);
})

//or can be written as
// function mul(num,index){
//     console.log(num*3,index);
// }
// arr.forEach(mul);

//exam of forEach===========================

//if we want to print only fname of given arr using forEach
const user=[
    {fname:"r",age:20},
    {fname:"m",age:23},
    {fname:"d",age:25},
    {fname:"s",age:26},
]
console.log("using forEach loop")
user.forEach(function(name){
console.log(name.fname);
});

//or can also be done by for of loop
console.log("using for of loop")
for(let i of user){
    console.log(i.fname);
}
//or
user.forEach((n,index)=>{
    console.log(n.fname,index);
})
//in arrow fun we can skip brackets to aurgument if only one argu is there