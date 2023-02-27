//objects or object literal use curly braces{}
//reference type
//arrays are good but not sufficient for real world data
//objects store key value pairs
//key is string always
//objects dont have index

//how to crete object
const person =
{   name:'ruchi',
    age:20,      // or 'age':20,
    "person hobbies":['reading','writing']
    //space is not allowes so we can add quotations ,although bcoz its key is string quotations can be used.
};

//to access objects
console.log(person);
console.log(typeof person);  //object-type

//to access data from objects
console.log(person.name);

console.log(person['name']);

console.log(person.age);
console.log(person["person hobbies"]);


//how to add key value pair to abjets
person.gender='female';
console.log(person); 

// take the value from variable and make it key name
const key = 'email';
person[key]='ruchi@gmail.com';
console.log(person);
// {
//     name: 'ruchi',
//     age: 20,
//     'person hobbies': [ 'reading', 'writing' ],
//     gender: 'female',
//     email: 'ruchi@gmail.com'
//   }

//=================================================
//loops in objects

//for in loop
//object.keys
for(let i in person){
    console.log(person[i]); //only values will be printed not keys
    //for complete key value pair:
    console.log(`${i} : ${person[i]}`);
    //it will return key value pair

    //in simplest form key value pair
    console.log(i, ':' ,person[i]);
}
  

//==================================================
console.log(Object.keys(person));
//[ 'name', 'age', 'person hobbies', 'gender', 'email' ]
//returns keys in form of array

console.log(typeof(Object.keys(person)));    //object

//to check if its really an array
console.log(Array.isArray((Object.keys(person))));      //true 

//to print keys using Objects.keys
for(let i of Object.keys(person)){
    console.log(i); 
}

//to print values using Objects.keys
for(let i of Object.keys(person)){
    console.log(person[i]); 
}