//fill method of arr
//value , start, end

const arr1 = new Array(10).fill(0);
console.log(arr1);
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


//if from 2 to 4th index we want 0
const arr=[1,7,4,4,5,5,6];
arr.fill(0,2,4);
console.log(arr);
//[1, 7, 0, 0,5, 5, 6 ]
