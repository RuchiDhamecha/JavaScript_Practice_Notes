// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>beforeend Added new Element</li>");

todoList.insertAdjacentHTML("afterbegin","<li> afterbegin Added new Element</li>");

todoList.insertAdjacentHTML("beforebegin"," <li>beforebegin Added new Element</li>");

todoList.insertAdjacentHTML("afterend","<li> afterend Added new Element</li>");