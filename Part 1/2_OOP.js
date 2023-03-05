//  so previous way is space consuming thing bcoz this methods are same in all objects and are crearing multiple times 
// so we can create a special object which will store these methods 
// so now we stored these methods into a separate variable a separate block of memory......
// now we just need to mention the reference of those methods inside that createUser function


const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // storing the reference to that methods in this object
    user.about = userMethods.about;//giving reference
    user.is18 = userMethods.is18;
    // now methods will not be created every time instead because of this the methods will just called every time object created
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');
console.log(user1.about());
console.log(user2.is18());
//prints
// nayan is 20 years old.
//true


//now let say we want add more such functions in and we will store them into object separately...and we will just give reference of sub function in main function...so many a time it is possible that we will ferget to give reference so ...
//there is 1 more method.....in 4_oop.js file