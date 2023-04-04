// intro to events in JS

// important events are mouseEvents keyboardEvents and inputEvents

// mouse events
// click

// three ways to add events 
// 1..directly in the html using inline js
{/* <button class="btn btn-headline" onclick="console.log('you clicked me')" >Learn More</button> */}

// 2..  we can add a function to the btn.onclick property
const btn = document.querySelector(".btn-headline");
// console.log(btn); //  this will show in html format or the well reprentation of objects passed
// console.dir(btn);// this will print in form of the object form

// btn.onclick =() =>{
//     console.log("You clicked me...")
// }

// 3..
// method ----> addEventListener();
// function clickMe(){
//     console.log("You clicked Me.....")
// }
// btn.addEventListener("click",clickMe);

// addEventListener takes take 3 parameters
// first is event to be done
// and a event handler function and 3rd one is the 
// capture handler ... will learn about this in 125th file

// element.addEventListener("event", handler func()=>{}, true)


// using arrow function is the most used way 
btn.addEventListener("click",()=>{
    console.log("You clicked Me.....")
});







// Events occur when the page loads, when user interacts (clicks, hovers, changes)
// and myriad other times, and can be triggered manually too. To react to an event you 
// listen for it and supply a function which will be called by the browser when the event occurs. 
// This function is known as a callback.