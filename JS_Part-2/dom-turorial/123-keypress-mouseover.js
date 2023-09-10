// keypress event
// mouseover event


// there is a property called key is present inside of the event info object return by 
// eventListener which has a key property
// this key property have the value of the key which is pressed recently
const body = document.body;

body.addEventListener("keypress", (e)=>{
    // console.log(e); // this will print the complete event object
    console.log(e.key); // this will print the key property of the return object
})


// mouseover

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event occur..");
})


mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occur..");
})







// read more about the events in JS :
// https://www.freecodecamp.org/news/javascript-events-explained-in-simple-english/