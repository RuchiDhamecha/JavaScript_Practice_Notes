//imp array method
//map
//it makes new arr and stores elemts in it
//always return in function
const nums=[1,2,3,3];
const sqr=function(num){
    return num*num;
}  
const sqrnum = nums.map(sqr);
//map will make a new array and sstore values in it
console.log(sqrnum);    //1,4,9,9

//or can also be done as

const cubenum = nums.map(function(num){
    return num*num*num;
});
console.log(cubenum); //1,8,27,27

//or
const mul = nums.map((num)=>{
    return num*2;
})
console.log(mul); //2,4,6,6

//or------------
const index_num= nums.map((num,index)=>{
    return `index: ${index} mult: ${num*num}`;
});

console.log(index_num);
// [
//     'index: 0 mult: 1',
//     'index: 1 mult: 4',
//     'index: 2 mult: 9',
//     'index: 3 mult: 9'
//   ]


//example=====================
console.log("print 1st name of array")

const users=[
    {fname:"r",age:20},
    {fname:"m",age:23},
    {fname:"d",age:25},
    {fname:"s",age:26},
]
const name=users.map((user)=>{
    return user.fname;
});

console.log(name);
// print 1st name of array
// [ 'r', 'm', 'd', 's' ]