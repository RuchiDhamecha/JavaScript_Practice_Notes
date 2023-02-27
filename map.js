// map
// ..its is an iterable
// stored data in ordered fashion
// store key value pair like Object
// duplicate keys r not allowed like Object
// difference between maps n objects
// object can only have string or symbol as key
// in map u can use anything as a key

const person = new Map();
//set keyword
person.set('fname','ruchi');
person.set('age',20);

console.log(person);
//Map(2) { 'fname' => 'ruchi', 'age' => 20 }
console.log(person.get('fname'));  //ruchi
console.log(person.keys());  //[Map Iterator] { 'fname', 'age' }

for(let key of person.keys()){
    console.log(key, typeof key)
;}
// fname string
// age string

for(let key of person){
    console.log(key, typeof key);
    console.log(Array.isArray(key)); //true
;}

// [ 'fname', 'ruchi' ] object
// [ 'age', 20 ] object