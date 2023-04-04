const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();// default actions on this event listener will be canceled
    // console.log("form submit");
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value = "";

});

// using event delegation
// we don't need to add separate event listeners on done and submit button we can do that by adding event listener to the todo-list { the main list ul }  as well and it'll automatically applied to the childs 

todoList.addEventListener("click", (e) => {
    // console.log(e.target);
    // check if user click on done button
    // console.log(e.target.classList);// this will print the list of classes of the element with class .click 

    if (e.target.classList.contains("remove")) {
        // console.log("you want to remove something");
        const targetedLi =  e.target.parentNode.parentNode;  
        // this will select the li item whose remove button is clicked
        console.log(targetedLi)

        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        // console.log("Great !!!");
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan)
        liSpan.style.textDecoration = "line-through";
    }
})