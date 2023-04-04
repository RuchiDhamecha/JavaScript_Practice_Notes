// document.createElement()
// append
// prepend
// remove

// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("add new text");
// newTodoItem.appendChild(newTodoItemText);

// newTodoItem.textContent = "add new next";

// todoList.appendChild(newTodoItem); // appendChild is old
// todoList.append(newTodoItem); // append add in  last

// todoList.prepend(newTodoItem); // prepend add in  last

// how to remove element
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove(); 
// console.log(todo1);

// after 
// before

const newTodoItem = document.createElement("li");
const todoList = document.querySelector(".todo-list");
newTodoItem.textContent = "added new todo";
// so here one node is created that is newTodoItem 

// if we add it before todo-list then it'll not be at after todo-list or vice versa
// it can be at one place only
todoList.before(newTodoItem); // this will add the newTodoItem before todo-list class

todoList.after(newTodoItem); // this will add the newTodoItem before todo-list class
