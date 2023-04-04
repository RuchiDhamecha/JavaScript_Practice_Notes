// change the style of elements

const mainHeading = document.querySelector("section.container h2");

console.log(mainHeading.style);
// there is style object for each of the element which haves
// all the style properties present in css whether they have applied or not 
// if not applied then by default it is not applied



// we can use it by selecting the properties from the style object
mainHeading.style.backgroundColor = "red";
mainHeading.style.border = "10px double black";