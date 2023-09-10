//filter method of array
//returns boolean value
//returns those values who have passed condtions

const num=[1,2,3,4];

const isEven= function(number){
    return number%2===0;
}
const result=num.filter(isEven);
console.log(result);  //[ 2, 4 ]

//or
const value = num.filter((number)=>{
    return number*2===4;
}) ;
console.log(value);   //[ 2 ]