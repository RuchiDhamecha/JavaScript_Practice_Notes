// how to get the dimension of element
// height width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

// if we just want height then we can do like this
const height = sectionTodo.getBoundingClientRect().height;
const width = sectionTodo.getBoundingClientRect().width;