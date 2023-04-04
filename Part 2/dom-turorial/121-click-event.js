// litle practice with click event

const allButtons = document.querySelectorAll(".my-buttons button");

// want to change color of buttons to yellow after the click event

allButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target)
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "354";
    })
})