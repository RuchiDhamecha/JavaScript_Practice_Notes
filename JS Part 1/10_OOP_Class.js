// till now we talked about  __proto__, [[prototype]], prototype 
// in functions., Object.create() , new keyword

// but creating constructor then adding our methods into the 
// prootype of that constructor function and then calling that by 
// using new keyword  
// this all becomes very tidious task


// es 2015 / es6
// class keyword was introduced

// classes in js are fake 
// so above sentence actually means that the classes are 
// internally implemented using that tidious and traditional 
// method only but we don't need to think about it that much.

class CreateUser{
    // constructor keyword will return the object
    constructor(firstName, lastName, email, age, address){
        // this line will show that when we called constructor..
        console.log("constructor called..");
        // the no.of times we create object then this line will be printed

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    // we can define methods inside of class itself
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    is18(){
        return this.age >= 18;
    };
    sing(){
        return `love me like u do....`;
    };
    func(a){
        console.log(a);
    }


}

// when we call this class using new keyword then constructor will 
// be called automatically object will be created, object will get 
// all the properties written in constructor, and methods will be added to prototype

// class constructor always need the new keyword while invoking / 
// calling it.. otherwise it'll through a error
// Class constructor CreateUser cannot be invoked without 'new'

const user1 = new CreateUser('nayan', 'sayaji', 'nayansayaji@gmail.com', 20, 'tamaswadi');
const user2 = new CreateUser('ruchi', 'dhamecha', 'ruchins@gmail.com', 20, 'tamaswadi');

// checking the objects we created
console.log(user1.firstName);
console.log(user1.sing());
console.log(user1.is18());
console.log(user2.firstName);


// checking prototype of user1
console.log(Object.getPrototypeOf(user1));
// we can see that all the methods are added into it's prototype

// {constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}
// about: ƒ about()
// constructor: class CreateUser
// is18: ƒ is18()
// sing: ƒ sing()


user1.func("ruchi");