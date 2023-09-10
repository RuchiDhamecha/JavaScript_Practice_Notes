// class list

const sectionTODO = document.querySelector(".section-todo");
console.log(sectionTODO);
console.log("classList of section-todo ( how many classes section-todo container has)  : ",sectionTODO.classList);


// classList of section-todo ( how many classes section-todo container has)  : 
//  DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']



// adding class in a html element using js 
// sectionTODO.classList.add("bg-dark");
// removing class using js 
// sectionTODO.classList.remove("container");


// for checking is a perticular class is there for a element with class section-todo or not 
// section-todo is stored inside the sectionTODO variable
const ans = sectionTODO.classList.contains("container");
// it will give true or false
console.log(ans);// true

sectionTODO.classList.toggle("bg-dark"); // adding
// toggle adds class to a element if it's not their already and if present then remove that class from that element
sectionTODO.classList.toggle("bg-dark");// removing



const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");
 