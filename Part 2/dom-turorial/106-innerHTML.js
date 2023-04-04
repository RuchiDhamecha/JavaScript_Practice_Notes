// innerHTML
// innerText returns all text contained by an element and all its child elements.
// innerHtml returns all text, including html tags, that is contained by an element.
// eg
{/* <div class="headline">
    <h2 id="main-heading">
        Manage your tasks <span style="display: none">Hello</span>
    </h2>
    <button class="btn btn-headline">Learn More</button>
</div> */}



const headline = document.querySelector(".headline");

console.log(headline.innerHTML);

// change innerHTML of element
headline.innerHTML = "<h1> Inner HTML changed. </h1>";

// if you want to add something more with the remaining content in innerHTML then we need to use +=
// this is the shorthand just like
// i = i + 1 is written as ; i += 1



// in html we dont use double qoutes we use \" else it gives error
headline.innerHTML += "<button class = \"btn\"> Learn More.</h1>";
