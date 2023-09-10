//make a function for user to show their info ..info as input will be given as aurgument while cclling funn

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    user.is18 = function() {
        return this.age >= 18;
    },  
    user.sing = function () {
        return 'bhakti geet....'
    };
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');

const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');

console.log(user1);
console.log(user2);

//this prints:
// {
//     firstName: 'nayan',
//     lastName: 'sayaji',
//     email: 'nayansayaji@gmail.com',
//     age: 20,
//     address: 'tamaswadi',
//     about: [Function (anonymous)],
//     is18: [Function (anonymous)],
//     sing: [Function (anonymous)]
//   }
//   {
//     firstName: 'ruchi',
//     lastName: 'dhamecha',
//     email: 'ruchins@gmail.com',
//     age: 20,
//     address: 'tamaswadi',
//     about: [Function (anonymous)],
//     is18: [Function (anonymous)],
//     sing: [Function (anonymous)]
//   }

//now to call funn inside function for usser
const is18 = user1.is18();
console.log(is18);  //true

const abt = user2.about();
console.log(abt);  //ruchi is 20 years old.




//now if we want to add such 100000 persons it will be tedious bcoz lot of new function and objects will be formed if we make function and object inside same function ,it will take more memory instead make subfunctions outside of the function

//to avoid this we can crete function outside of the object as shown in file 2_OOP.js


