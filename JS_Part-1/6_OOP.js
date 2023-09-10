// instead of doing this let's add this methods inside of the prototype of the createUser function

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return 'love me like u do....'
//     }
// }

//why to do this when we have prototype to store info for function

function createUser(firstName, lastName, email, age, address) {

    // change declaration of user from  this..
    // const user = Object.create(userMethods);
    // to 
    // const user = Object.create(createUser.prototype);

    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}
// as we know when we create a function then there is a prototype property or a empty object {} is  created associated with it where we can store the key value pairs related to that function...

// let's check is it correct that a prototype property is present for the createUser function or now
console.log(createUser.prototype);
// {constructor: ƒ}

// so instead of creating new object userMethods for storing new methods we can add this methods inside the prototype of this function only

// and we need to change declaration of user from  this..
// const user = Object.create(userMethods);
// to 
// const user = Object.create(createUser.prototype);

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return `${this.firstName} sing a song u love....`;
};


const user1 = createUser('nayan', 'sayaji', 'nayansayaji@gmail.com', 20, 'tamaswadi');
const user2 = createUser('ruchi', 'dhamecha', 'ruchins@gmail.com', 20, 'tamaswadi');

console.log(user1.about());
console.log(user2.sing());