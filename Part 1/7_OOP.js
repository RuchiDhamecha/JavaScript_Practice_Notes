//this keyword

// we'll see this example with new keyword

// we dont need to write this line for creating a chain of the 
// prototype property of createUser function in newly created objects 
// const user = Object.create(createUser.prototype);
// this will done by new keyword automatically

// instead of doing this 
// user.firstName = firstName;
// means instead of creating new object using the user variable we 
// can directly use new keyword which will create new instance of 
// objects and it'll store in this variable 

// we need to this.firstName = firstName;


// and we'll not     return this; bcoz new keyword returns automattically


// suppose I want to create a new library of js and any developer 
// is using my library so how that developer will know that he 
// needs to call the functions from my library using new keyword....
// for that their is a naming convention

// **whenever we create a constructor function then we start it with the capital letter
// eg., 
// function CreateUser(){

// }

// so now i'll make createUser function capital case

// constructor function
function CreateUser(firstName, lastName, email, age, address) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return `love me like u do....`;
};
// whichever new object we will create using new keyword those 
// will automatically have these methods of CreateUser() 
// function's prototype into their __proto__ or [[prototype]]
console.log(CreateUser.prototype);
// {about: ƒ, is18: ƒ, sing: ƒ, constructor: ƒ}
// newly created instances or objects automattically have this 
// prototype into them as their __proto__ or [[prototype]]

// we need to write new keyword for creating new instances
const user1 = new CreateUser('nayan', 'sayaji', 'nayansayaji@gmail.com', 20, 'tamaswadi');
const user2 = new CreateUser('ruchi', 'dhamecha', 'ruchins@gmail.com', 20, 'tamaswadi');

console.log(user1.about());
console.log(user2.sing());