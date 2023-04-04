// const firstButton = document.querySelectorAll('#one');

// firstButton.addEventListener("click", function(){
//     console.log("you clicked me");
// })
    
const allButton = document.querySelectorAll('.my-buttons button');
// for (const button of allButton) {
//     button.addEventListener("click", function(){
//         // console.log("you clicked me !!!");
//         // console.log(this); // value of this will be each button

//         console.log(this.textContent); // this will print the text content of each group
//     })
// }

// here when we create arrow function and we try to do 
// like this.textContent then it'll give undefined bcoz 
// this of arrow function is window and window don't have anything like textContent inside of that


// for (let i = 0; i < allButton.length; i++) {
//         allButton[i].addEventListener("click", function(){
//             console.log(this);
//         })
// }

allButton.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    }) 
});