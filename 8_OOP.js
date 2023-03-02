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
console.log(CreateUser.prototype);

const user1 = new CreateUser('nayan', 'sayaji', 'nayansayaji@gmail.com', 20, 'tamaswadi');
const user2 = new CreateUser('ruchi', 'dhamecha', 'ruchins@gmail.com', 20, 'tamaswadi');

// we want to print all the keys in user1 so we can do this using "for in" loop
// for (const key in user1) {
//     console.log(key);
// }
// firstName
// lastName
// email
// age
// address
// about
// is18
// sing
// but this will print all the key's of user1 including the key's 
// of prototype as well
// but suppose our requirement is just to gather key's from user1 
// only and not from the prototype 

// so there is a way
// Object.hasOwnProperty(key)
// this will check is the key belongs to that object or prototype 
//it will not print obbjects of prototype
// nd return true or false

for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key);        
    }
}
// firstName
// lastName
// email
// age
// address