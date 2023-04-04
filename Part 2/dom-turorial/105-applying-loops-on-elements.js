// loop

// const navItems = document.getElementsByTagName("a");// HTMLCollection

// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection 
// simple for loop
// for of loop

// in array like objects we can access length and indexing

// simple for loop
// for(let i = 0; i < navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }


// for (const navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

// we can't use forEach method directly so before using that we need to change it to array

// navItems = Array.from(navItems);
// console.log(Array.isArray);
// navItems.forEach(navItem  => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";    
// });


// querySelectorAll
let navItems = document.querySelectorAll("a");
console.log(navItems); // it gives a nodeList same as HMTLCollection

// we can use forEach method as well in querySelectorAll to iterate through HTMLCollection 
// simple for loop
// for of loop
// forEach method
// in array like objects we can access length and indexing

// simple for loop
// for(let i = 0; i < navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }


// for (const navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }

navItems.forEach(navItem  => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "red";
    navItem.style.fontWeight = "bold";    
});
