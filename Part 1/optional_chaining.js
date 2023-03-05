//Optional Chaining

// optional chaining 

let user = {
    firstName: "ruchi",
    address: {houseNumber: '1234'}
}

console.log(user.firstName);
console.log(user.address.houseNumber); //1234


// user = {
//     firstName: "ruchi",
// }
// if user is not having address property then it'll give undefined

// now we removed address property from the object
user = {
    firstName: "ruchi",
}

console.log(user.address); //undefined

// if this address property is not there in user object and still we'll try to access then it'll show a error like
console.log(user.address.houseNumber); 
// Cannot read properties of undefined (reading 'houseNumber')

// this means there is not a address property so it's considering this as a undefined and then there is not a property called houseNumber of address means 
// it cannot read houseNumber property of undefined ( address is undefined)

// now we can say that if we can see there is no such a property so why do we access that ..

// but there might be some instance when there will be that property will come..
// this happens when we try to change states in react 

// so for that we can do that this will not give any error instead of error if it returns undefined when the properties not found that will be okay..



// for that we use optional chaining

// this will check if user if exist then only it checks for firstname and if not found gives undefined
console.log(user?.firstName);

// check if user exist then checks for the address then checks for houseNumber
console.log(user?.address?.houseNumber); //1234



// Optional chaining was introduced in ES2020
// Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error