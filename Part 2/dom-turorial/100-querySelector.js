// select elements using query selector


const mainHeading = document.querySelector(".headline");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);

// when we use like this it'll return the first element with this className or ID or tagname
// this will give the first navItem
const navItem = document.querySelectorAll(".nav-items");
console.log(navItem);


// when we want to use 
// querySelectorAll then it returns a nodelist of the elements who haves the same tagname, class or id

// nodeList is a array like list but it's not array
// NodeList(4) [ul.nav-items, li.nav-items, li.nav-items, li.nav-items]
// 0: ul.nav-items
// 1: li.nav-items
// 2: li.nav-items
// 3: li.nav-items
// length: 4

const navItems = document.querySelectorAll(".nav-items");
console.log(navItems);