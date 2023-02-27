// sets - it is iterable
// store data
// sets also have its own methods
// order is not gauranteed
// unique items only(no duplicate allowed)

//syntax to make set
const nums = new Set([1,1,2,3]);
console.log(nums);  //Set(3) { 1, 2, 3 }
//1 will apear only once

//index based access is not allow
//console.log(num[1]);  //undifiend


//add- stores in set
nums.add([4,7]);
nums.add(6);
nums.add(['a','k']);
console.log(nums);  //Set(6) { 1, 2, 3, [ 4, 7 ], 6, [ 'a', 'k' ] }

//has property====================
//check if 6 is present in set
if(nums.has(6)){
    console.log("6 is present");
}else{
    console.log("6 is not present");
}
//6 is present


//==========================================
//to make set from array an to store only unique values in set from array then
const arr1 = [1,2,2,3,4,5,5];
const myset = new Set(arr1);
console.log(myset);
//Set(5) { 1, 2, 3, 4, 5 }


//length of set================================
let length = 0;
for(let element of myset){
    length++;
}
console.log(length);   //5



