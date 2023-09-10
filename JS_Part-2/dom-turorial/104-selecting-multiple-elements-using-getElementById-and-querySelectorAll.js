// get multiple elements using getElements by class Name

// get multiple elements using querySelectorAll

// we don't need to use # here for class we just need to write the name of that class

// const navItems = document.getElementsByClassName("nav-item");
// this will give you a HTMLCollection[] which is a array like object we can use
// only the indices property of arrays here
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));


const navItems = document.querySelectorAll(".nav-item");
// this will return a nodelist[] it is also a array like object
// array like object are which haves indices but can't apply other array methods
console.log(navItems[1]);