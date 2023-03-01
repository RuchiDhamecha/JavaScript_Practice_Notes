// methods

// function inside object

const person = {
    firstName: "ruchi",
    age: 20,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
// this is a object which is calling the method method (i.e., we can say that about method)


//if we do not use this keyword then it will give an error bcoz values of fname and age is not in same scope of function...error will be undefined

// ***here the this object is person which is the object which is calling the about function***
person.about();

// we get the value of this when we call that function

// now let's take a example

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
// we created a function
// and we set the value personInfo to about key in following objects
// when we call the about method using the objects then this keyword will extract the values of those keys from that objects 


const person1 = {
    firstName: "ruchi",
    age: 20,
    about: personInfo
}
const person2 = {
    firstName: "vishal",
    age: 20,
    about: personInfo
}
const person3 = {
    firstName: "krishiv",
    age: 2,
    about: personInfo
}


person1.about(); // person1 is the object which is calling the about
person2.about(); // person2 calling the about
person3.about(); // person3 calling the about
//prints:
// person name is ruchi and age is 20
// person name is vishal and age is 20
// person name is krishiv and age is 2





// suppose we want to add a new method named as sing so we need to add it inside the userMethods and as well as inside the function where we are creating objects 
const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    },
    // new method added
    sing: function () {
        return 'bhakti geet....'
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing; // added here as well 
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');

console.log(user1.about());
console.log(user2.about());
