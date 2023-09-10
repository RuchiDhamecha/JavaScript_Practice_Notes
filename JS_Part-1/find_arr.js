//find method

const arr = ['add','dsfs','sff','dsgsfg'];

function islen3(string){
    return string.length===3;
}

//arr.find();

const ans = islen3('add');
//const ans = arr.find((string)=>string.length===3);
console.log(ans);       //true


//example==================
//to find name from age

const users=[
    {fname:"r",age:20},
    {fname:"m",age:23},
    {fname:"d",age:25},
    {fname:"s",age:26},
]
const name=users.find((user)=>user.age===20);
console.log(name);  //{ fname: 'r', age: 20 }


