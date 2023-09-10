//callback function
//one func calling another
function myFunc2(name) {
  console.log("hello myFunc2");
  console.log(``);  
}
function myFunc(callback){
    console.log("hello there myFunc");
    callback();
    callback("ruchi");
}

myFunc(myFunc2);


//=====================================================
//function returning func
function myFuncc() {
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans = myFuncc();
console.log(ans());     //hello world undefined