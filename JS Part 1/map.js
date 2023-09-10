// map
// ..its is an iterable
// stored data in ordered fashion
// store key value pair like Object
// duplicate keys r not allowed like Object
// difference between maps n objects
// object can only have string or symbol as key
// in map u can use anything as a key

const person = new Map();
//set keyword= adds new value in map

// key value in map can be anything like string, number,object,array,etc

person.set('fname','ruchi');
person.set('age',20);
person.set({1:'one'},"subject");
person.set(1,20);
person.set([1,2,3],'numbers');

console.log(person);
//Map(5) {
//     'fname' => 'ruchi',
//     'age' => 20,
//     { '1': 'one' } => 'subject',
//     1 => 20,
//     [ 1, 2, 3 ] => 'numbers'
//   }


//to access value by key use 'get'
console.log(person.get('fname'));  //ruchi
console.log(person.keys());  //[Map Iterator] { 'fname', 'age', { '1': 'one' }, 1, [ 1, 2, 3 ] }

for(let key of person.keys()){
    console.log(key, typeof key)
;}
// fname string
// age string
// { '1': 'one' } object
// 1 number
// [ 1, 2, 3 ] object


for(let [key,value] of person){
    console.log(key,value);
    //console.log(Array.isArray(key)); //true
}

// fname ruchi
// age 20
// { '1': 'one' } subject
// 1 20
// [ 1, 2, 3 ] numbers

//or to access complete map
console.log(person);
// Map(5) {
//     'fname' => 'ruchi',
//     'age' => 20,
//     { '1': 'one' } => 'subject',
//     1 => 20,
//     [ 1, 2, 3 ] => 'numbers'
//   }


//Another way to define map=========================================
//in map function there will be 1 array that array will contain no. of arrays , 
//array inside arry will be separated by comma 
//array will have 2 values 1st is key another is value...many such arrays can be formed
const mymap = new Map([
    [1,'one'],[2,'two'],[3,'three']
]);

console.log(mymap);
// Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }  

//=============================================================
//example:
//given an object ,store same info in map and also add some more info in map
const person1 = {
    id: 1,
    fname:'r'
}

//make new map
const extraInfo = new Map();
//to add extra info and preveious object in map
//make object as key and extra new info as value
extraInfo.set(person1,{age:8 , gender:"f"});

//console.log(extraInfo);
console.log(person1.id);   //1
console.log(extraInfo.get(person1).gender);