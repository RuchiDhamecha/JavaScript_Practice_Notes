// static list vs live list

// querySelector, querySelectorAll gives static it gives NodeList[]

// getElementBy....... will give a live list ... it gives HTMLCollection

// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems); // NodeList(5) [li, li, li, li, li]

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";

// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);

// console.log(listItems); // NodeList(5) [li, li, li, li, li]
// this is a static static node list
// though we have added sixth li into the listItems still it'll give just 5 elements into the nodeList[]


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

console.log(listItems); // HTMLCollection(5) [li, li, li, li, li]

const sixthLi = document.createElement("li");
sixthLi.textContent = "Item 6";

ul.append(sixthLi);

console.log(listItems); // HTMLCollection(5) [li, li, li, li, li, li ]

