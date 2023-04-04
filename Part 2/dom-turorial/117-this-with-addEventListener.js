// this keyword

// in normal function on which element we apply the event listeners the value of this will be the element itself

// in arrow function case it is the -1 scope where the function is written


const btn = document.querySelector(".btn-headline");


// here we have created a function so that this keyword inside this eventListener have the value of btn bcoz it is written inside the btn object
// and we know that the value of this inside function is the value of that property that is btn here.
// global(window) > btn > this .... so this keyword having the value of window object 
// function click(){
//     console.log("You clicked me!!!!");
//     console.log("value of this");
//     console.log(this);
// }

// and we know that the value of this inside arrow function is one more layer above.
// global(window) > btn > this .... so this keyword having the value of window object 
btn.addEventListener("click",()=>{
    console.log("You clicked me!!!!");
    console.log("value of this");
    console.log(this);
});