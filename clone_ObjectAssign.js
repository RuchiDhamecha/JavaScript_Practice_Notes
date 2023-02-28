//clone using Object.assign()

//memory

//if we do like ,we declared arr1 and to put its value in arr2 we do arr2=arr1 but after that if u make changes in any of them it will appear in both arrays....
//bcoz arr1 has 1 pointer , arr2 has 1 pointer both stored in memory but both points to same memory location in heap.

//so to avoid this we clone it i.e we copy all elements and paste in required array or object

//1.spread method
const obj = {
    key1 :'v1',
    key2:'v2'
};
const obj2 = {...obj};
//this will copy elements of obj in obj1

//now to check if operation on 1 affects other
obj.key3 ='v3';

console.log(obj);
console.log(obj2)
// { key1: 'v1', key2: 'v2', key3: 'v3' }
// { key1: 'v1', key2: 'v2' }

//=======================================================
//2. clone using Object.assign()
const obj3 = {
    key1 :'v1',
    key2:'v2'
};
const obj4 = Object.assign({},obj3);

obj3.key3='v3';

console.log(obj3);
console.log(obj4);
// { key1: 'v1', key2: 'v2', key3: 'v3' }
// { key1: 'v1', key2: 'v2' }
