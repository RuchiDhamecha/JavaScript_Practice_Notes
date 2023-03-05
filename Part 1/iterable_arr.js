//iterables
//to whom we can add "for of" loop
//string, array are iterable

//example
const fname = "Ruchi";
for(let letter of fname){
    console.log(letter);
}       //R u c h i

//array like object
//to whom has length property
//and to whom we can access by index
// ex. string

const firstname = "Ruchi";
console.log("length:",firstname.length); //5
console.log('letter at 2nd index:', firstname[2]);  //c