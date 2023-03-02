// animal class 
// properties ---->> name, age
// method ----->> eat

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// const animal1 = new Animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());



// dog class
// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// const tommy = new Dog("tommy", 1);
// console.log(tommy);
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());

// we can see that Dog class is having all the properties of dog 
// class ... so instead of doing this we can use Animal class for Dog class  

// we need to extend Dog class from Animal class
// so that dog class can have all the properties of Animal class

// we use extends keyword for doing that here

// here Dog is derived class or child class or sub class and 
// Animal is a Parent class or Base class or super class
// in js we call sub class mostly 

// so how we create sub class from parent class in js is by using the extends keyword

class Dog extends Animal{

}
// now new keyword will call the constructor of dog class but bcoz 
// there is no constructor in Dog class so it'll go and look for 
// constructor in Animal class 
// bcoz dog class in extended from animal class and it's 
// constructor will be used
const tommy = new Dog("tommy", 1);
console.log(tommy);