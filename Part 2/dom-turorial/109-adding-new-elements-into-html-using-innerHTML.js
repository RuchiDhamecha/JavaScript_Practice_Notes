// Add new HTML elements to page

// innerHTML to add HTML element
const todoList = document.querySelector(".todo-list");
// for checking the innnerHTML inside of any element
console.log(todoList.innerHTML);

// changing innerHTML of a element
todoList.innerHTML = "<li>New Todo </li>";

// adding more HTML to the already available HTML
// todoList.innerHTML = todoList.innerHTML + "<li>New todo</li>";
//       i  =   i + 1
//       i  +=  1
todoList.innerHTML += "<li>New todo</li>";
todoList.innerHTML += "<li>Gym</li>";

// but when we use innerHTML that time it dont add new html 
// only but it takes old code available and add new innerHTML
// into it and then render it that's why this cause performance issue


// when you should use it, when you should not
// use it when you have to change all html code and don't 
// want to add extra or don't want to append more code to it 

// mostly developers try to avoid using innerHTML