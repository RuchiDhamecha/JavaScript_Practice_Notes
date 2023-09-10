// getter and setters 

//get = to make function as a property

//set = can set new variables

// we call methods of objects or call 
// we don't call the properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Nayan", "Sayaji", 5);
// we call methods of objects or call 
// using paranthesis
// person1.fullName();

// but we can't call the properties
// we can directly console.log them ...i.e.,
console.log(person1.firstName);

// but if i want to do this with method/function as property and it will called 
console.log(person1.fullName);
// means I want to use that method without using paranthesis
// and i want to treat is as property
// for doing that we need to write get keyword in front of the function

// like this

// get fullName(){
//   return `${this.firstName} ${this.lastName}`
// }
// this called as getters


// if we want to set the values to the firstName and lastName Property
// we can do like this
person1.firstName = "ruchi";
person1.lastName = "dhamecha";


// also we can create a function inside person class which will 
// set the values to the firstName and lastName Property
// we can create function like
// setName(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

person1.setName("ruchi", "dhamecha");


// now suppose we have fullname of user and from that we want to 
// set firstName and lastName of user means 
// If do this
// person1.fullName = "ruchi dhamecha";
// then firstName will automatically set the value "ruchi" and 
// lastName will be "dhamecha"

// we can use set keyword for setting values to the properties

// we have already created person class and now I want to create a 
// new class for this problem so I'll use different name for the class below 

// there is a split() function for strings which splits the string 
// with the help of parameter passed and return a array of those splited strings..
// suppose here e.g., fullName.split(" ") 
// this line will slipt the string firstName from the space that 
// is we passed space as input character and return a array of 
// those splited strings 
// suppose firstName = "Nayan Sayaji"
// so fullName.split(" ") will split it from the spaces which is 
// there in first and last name
// and return a array ["Nayan", "Sayaji"]

class PERSON {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // this is called getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // this is called setter 
    set fullName(fullName) {

        // using arrray distructuring we'll save those splited 
        // strings into new variables... 1st value will be 
        // stored in firstName and 2nd value will be in lastName
        const [firstName, lastName] = fullName.split(" ");

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// using getters and setters we can treat the methods as a properties

const Person1 = new PERSON("Nayan", "Sayaji", 5);
console.log("Object Person1 : ",Person1);

Person1.fullName = "Ruchi Dhamecha"; 
// firtName = "Ruchi",
// lastName = "Dhamecha"
console.log("firstName :",Person1.firstName);
console.log("lastName : ",Person1.lastName);