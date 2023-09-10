// some old methods to support poor Internet Exploler

// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new todo";

const referenceNode = document.querySelector(".first-todo")
// now referenceNode = .first-todo
// ul.appendChild(li);

// now we want to add referenceNode before li
// ul.insertBefore(li, referenceNode);

// suppose we want to change li with referenceNode
ul.replaceChild(li, referenceNode);

// removing any child node 
ul.removeChild(referenceNode);