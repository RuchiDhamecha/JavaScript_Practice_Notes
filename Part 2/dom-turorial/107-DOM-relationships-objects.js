// DOM relationships 
// getRootNode
// htmlElementNode.childNodes = returns a NodeList[]
// 


// const rootNode = document.getRootNode();
// // rootNode of the html file is document
// console.log(rootNode); // #document


// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);
// // NodeList(3) [head, text, body.container]


// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];



// // checking parent node of the headElementNode
// console.log(headElementNode.parentNode);

// // sibling relationship
// console.log(headElementNode.nextSibling);

// // we can traverse from one sibling to sibling
// // console.log(headElementNode.nextSibling.nextSibling);

// console.log(headElementNode.nextElementSibling);
// any new line and space is also considered as a child node in DOM

/*
An example of the DOM
Let’s start with the following simple document:

<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
The DOM represents HTML as a tree structure of tags. Here’s how it looks:


HTML
    HEAD
        #text ↵␣␣
        TITLE
            #text About elk
        #text ↵
    #text ↵
    BODY
        #text ↵␣␣The truth about elk.↵
*/
// above example we can see that new line and text is also getting considered as a child node

// console.log(headElementNode.childNodes)

// 


// const h1 =document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#ffeeef";
// div.style.backgroundColor = "833"

// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "333"

const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);



// The HTML DOM children property is used to 
// return all the child elements of the 
// specified element in the form of HTML collection.

// and it don't read the white space text line and new line as a child node it only return the HTML elements as a children
const container = document.querySelector(".container");
console.log(container.childNodes);
// NodeList(4) [text, h1, text, p]

console.log(container.children);
// HTMLCollection(2) [h1, p]