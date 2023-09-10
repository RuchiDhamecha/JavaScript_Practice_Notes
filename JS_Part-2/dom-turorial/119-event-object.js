// event object

// so now here the fisrtButton is the object 
// const firstButton = document.querySelector('#one');


// firstButton.addEventListener("click", function(event){
//     console.log(event);    
// })
// PointerEvent {isTrusted: true, pointerId: 4, width: 1, height: 1, pressure: 0, …}

// when event listener is added on any element then browser 
// keep look on that element that any action is happening on that element and 

// when browser get to know that any event happens on that element then browser do 2 things
// 1st... Gives this callback function to js engine for execution...
// 2nd ... also give the information of the event happening through the callback function .... the info will be in form of an object 
// the callback function inside the addEventListener takes a parameter it can be named anything let's call it event which returns a object which have all information related to the event



// for adding event to all buttons
const allButton = document.querySelectorAll('.my-buttons button');

for (const button of allButton) {
    button.addEventListener("click", function(e){
        // console.log(e); 
        // console.log(e.target);
        console.log(e.currentTarget);
        // target is property of object which passed as an argument inside the callback function returns.
        //  target will print the element on which the event is occured

        // currentTarget is the element to which the 
        // event is attached. It will never change. Event.
        // target is the element that triggered the event.


        // suppose event is applied on parent but it is called by child then the target is child
        // becoz event called by child 
        // and currentTarget is parent bcoz event is attached to it
    })
}