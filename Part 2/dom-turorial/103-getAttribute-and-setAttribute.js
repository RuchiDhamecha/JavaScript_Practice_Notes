// Element.setAttribute() Sets the value of an attribute on the specified element.

// If the attribute already exists, the value is updated;
// otherwise a new attribute is added with the specified name and value.

// To get the current value of an attribute, use getAttribute() ;

// to remove an attribute, call removeAttribute() .


// set and get attributes

const linkA = document.querySelector("a");
console.log(linkA.getAttribute("href").slice(1)); // #home so slice(1) = home

linkA.setAttribute("href", "https://codprog.com")
console.log(linkA.getAttribute("href"));

// suppose we want to check the value of type attribute of html element which have form-todo id
const inputElement = document.querySelector(".form-todo");
console.log(inputElement.getAttribute("type"));
// it will print the value of type attribute


// if we want to select all the a elements then we'll use querySelectorAll
const links = document.querySelectorAll("a");

for(link of links) {
    console.log(link.getAttribute("href").slice(1));
}
