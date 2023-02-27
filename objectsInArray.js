//objects inside  array
///veryy useful in real world application
const users =[
    {id:1,fname:'r',gender:'f'},
    {id:2,fname:'d',gender:'m'},
]
console.log(users);

for(let user of users){
    console.log(user);
}

//to print fname of user
for(let user of users){
    console.log(user.fname);
}      // prints r,d


//nested destructuring
const [user1,user2]=users;
console.log(users);
// //[
//     { id: 1, fname: 'r', gender: 'f' },
//     { id: 2, fname: 'd', gender: 'm' }
//   ]

const [{fname},use]=users;
console.log(user1);
// { id: 1, fname: 'r', gender: 'f' }


const[{fname: userfirstname,userid },,{gender: genderr}] = users;
console.log(userfirstname );
console.log(genderr);
