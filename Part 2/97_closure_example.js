// create a function which will return "Hi, You called me"
// when that function is called for first time
// and return "Main already ek bar call ho chuka hu"
// when it called again

function func(){
    let counter = 0;
    return function(){
        if (counter < 1) {
            console.log("Hi, You called me");
            counter++;
        }
        else{
            console.log("Main already ek bar call ho chuka hu");
        }
    }
}

const myFunc= func(); // here we have stored that func() inside of the myFunc variable 
myFunc(); // calling for 1st time: Hi, You called me
myFunc(); // calling for 2nd time : Main already ek bar call ho chuka hu
myFunc(); // calling for 3rd time : Main already ek bar call ho chuka hu