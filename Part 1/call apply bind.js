function hello(){
    console.log("hello world");
}

// hello();
// hello.call();

//call apply bind

// const user1 = {
//     firstName: "nayan",
//     age:20,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName: "ruchi",
//     age:20
// }


// call

// we have written about method inside user1 but we want user2 to call about() method

// so we can use call() 
// this call () will show that which object is the value of this in about function..

// we want to call for user2
// user1.about.call(user2); // ruchi 20

// if we dont pass any argument inside call method then it'll give undefined value 
// user1.about.call();// undefined 




// now suppose we have two parameters inside about method 
// hobby and favMusician
// and we can write this function outside of object.. then we don't need to write object's name

function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "nayan",
    age:20
}

const user2 = {
    firstName: "ruchi",
    age:20
}

// calling it for user2 object
//about.call(user2, "reading","atif aslam");
// ruchi 20 reading atif aslam


// apply 
// apply is same as call and internal implementation of apply uses call()

// in apply we can just pass the extra arguments as a single parameter in one array instead of passing them separately
about.apply(user1,["gym","diljit dosanjh"]);


// bind
// bind returns a function by binding the function we are passing means suppose about function here then it binds the about function with it's parameter i.e., user1 , hobby, favMusician

//we can store that returned function inside a variable
const func = about.bind(user1, "guitar","neha kakkar");
func();// now this function is created for user1




const user = {
    firstName: "nayan",
    age:20,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// user1.about();

// we store this about method inside a variable
const myFunc = user.about; // we haven't called this method we just stored the reference of user1.about inside the myFunc

myFunc(); // undefined undefined
// this is happening bcoz the this keyword which we have mentioned in about method is having the value of window object... 
// this --> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// bcoz when we call the function that time we know the value of this keyword........ means which is object is the value of this keyword.

// but here we are just storing the reference inside myFunc that's why it's giving undefined undefined

// we can understand this as follows
// const myFunc = function() {
//         console.log(this.firstName, this.age);
//     };
// we have just assign this function to myFunc variable and it's same as we declare the function expression

// so if we call this myFunc(); then of course this keyword will have the value window object
// because we know this keyword have the value of object inside it's written ...
// so myFunc is now declared in the global scope and every function in global scope is comes inside the window object



// so myFunc is not binded with user1 object 
// for doing that also we need to use bind method

const myFun = user.about.bind(user);
// now user1 is the value of this keyword
myFun();