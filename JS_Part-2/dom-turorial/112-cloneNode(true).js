// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new text added";
// ul.append(li);

// ul.prepend(li);  // now li is setted before end

// for getting rid of the single node placing we can clone
// nodes so that we can have multiple nodes with same specs 

// const li2 = li.cloneNode()
// if we do like this just cloneNode()  then it'll just clone the node and not the child nodes inside it that is in this li here is the child node is the text node
// for that we can do like this cloneNode(true) so that it can do deep cloning of the node
const li2 = li.cloneNode(true);

ul.append(li);
ul.prepend(li2);  // now li is setted before end
