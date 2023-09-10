// same method in subclass

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

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age); 

        this.speed = speed;
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph...`
    }
}

const tommy = new Dog("tommy", 1, 56);
console.log(tommy.eat());
// this will execute the eat () method present it Dog class
// bcoz we know when any object is created and it calls any method 
// from the class constructor it 1st try to find in it's class 
// from where the object in invoked and if it found then executes 
// that method else it'll go to extended class and look for method
