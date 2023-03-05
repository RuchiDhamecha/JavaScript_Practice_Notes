// object is also known as the instace this both are same words in 
// programmin and computer science.

// super

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


// when we extends any class and we want to add new properties 
// into in then we need to create it's own contructor for the sub 
// class or derived class 
// for doing that we'll create constructor and we'll add the 
// properties of parent class into that constructor by using super keyword

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age); // super keyword will add name and age 
        // property into this constructor from extended class

        // we are adding our own property of this class
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph...`
    }
}

// creating object / instance
const tommy = new Dog("tommy", 1, 56);
console.log(tommy.run());

// whenever we call any method from any class then it 1st check it 
// in it's constuctor but if not find the method in it's 
// constructor then it'll go out and look for the method in 
// constructor of extended class 