
// ********** : event Bubbling : *************
// bubbling means when we click on child and if it's 
// parent's also having the same event listener then it'll 
// call all event listeners , i.e., event listener of child as well as of parent

// ********** : event capturing : *************
// means if click on parent and if the child have the 
// same eventListener then that will be called 


// element.addEventListener(event, handler, true)
// when we create a event listener then there are 3 parameters a eventListener have 
// event such as click, mouseover etc
// handler.. which will handle that event what to do if that event occurs
// 3rd is handler capture which shows do we capturing the event or not and it's a boolean value
// if true then capturing and if it's false then it's event bubbling 
// by default it is false that's why we don't write the 3rd parameter usually


const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// child.addEventListener("click", () => {
//     console.log("you clicked on child");
// });
// parent.addEventListener("click", () => {
//     console.log("you clicked on parent");
// });
// grandParent.addEventListener("click", () => {
//     console.log("you clicked on grandParent");
// });
// document.body.addEventListener("click", () => {
//     console.log("you clicked on document.body");
// });
// here if we click on child and the parent is also having the same
// parent then it will call for it's parent as well 
// this is event bubbliing 
// if we call a event on child if the event is present for the 
// parent as well then it'll get called for that parent as well
// and if the grandparent will also have the same event then it'll be called for that as well 

// the above events are normal events 





// there is a type of events which is capturing events
// For event capturing, we set the handler capture option to true:
// element.addEventListener(event, handler, true). By default, 
// it is set to bubbling: false.


// child.addEventListener("click", () => {
//     console.log(" Capture!!! you clicked on child");
// }, true);
// parent.addEventListener("click", () => {
//     console.log(" Capture!!! you clicked on parent");
// }, true);
// grandParent.addEventListener("click", () => {
//     console.log(" Capture!!! you clicked on grandParent");
// }, true);
// document.body.addEventListener("click", () => {
//     console.log(" Capture!!! you clicked on document.body");
// }, true);




// event delegation

// Event Delegation is a pattern based upon the concept of Event Bubbling. 
// It is an event-handling pattern that allows you to handle events 
// at a higher level in the DOM tree other than the level where the event was first received.

// bcoz of event delegation we don't need to use eventListener 
// separately we can use for parent only then it'll automatically 
// called for childs as well

grandParent.addEventListener("click",(e)=>{
    // console.log("you clicked on something");
    console.log(e.target); // this will print the target attribute of event object 
    // which will depict where the event is occured

    console.log(e.target.textContent);
});


// means we added a eventListener on grandParent but if we click on child then also that eventListener will be called



// learn about event propagation here:
// https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/

// learn about event bubbling and propagation in detail :
// https://www.freecodecamp.org/news/event-bubbling-in-javascript/


// event delegation
// https://www.freecodecamp.org/news/event-delegation-javascript/

// bubbling and capturing
// https://javascript.info/bubbling-and-capturing