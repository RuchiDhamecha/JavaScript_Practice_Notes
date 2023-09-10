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
        return 'love me like u do....'
    }
}

function createUser(firstName, lastName, email, age, address) {
// here we are creating a relationship between userMethods and createUser objects..
// usign Object.create()

    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    //user.age = userMethods.age; 
     //no need to do this..as we added proto i.e we creted empty object by Object.create()
    user.age = age;
    user.is16 = is18;
    user.address = address;
   
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');
// so this about and sing method is not in createUser method but as we created createUser by considering the userMethods as the prototype or __proto__ of the createUser method so now createUser method can access userMethods object..
console.log(user1.about());
console.log(user2.about());