// static methods and properties

// when we create methods inside class then those all methods are 
// related to the object which we will invoke from the class 
// we can call those methods with the objects

// suppose we want to create a method which is related to class 
// itself then we don't need object calling those method
// those methods are known as static method and those methods will 
// be created by using static keyword

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static method
    static classInfo(){
        return "this is person class..";
    }

    // static property
    static desc = "Static Property..";

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("nayan", "sayaji", 21);
// calling methods related to object
console.log(person1.eat());

// calling static method 
//           className.methodName();
const info = Person.classInfo();

console.log(info); 
// this is person class..

// static property
console.log(person1.desc);

// we'll see more about this when we'll build projects