//Switch case

let day = +prompt("enter no. betwween 1 to 7");    //+ for making string into num because prompt always take string as a value 
switch (day) {
    case 1: console.log("monday");
        break; //for stop executing further
    case 2: console.log("tuesday");
        break;
    case 3: console.log("wednesday");
        break;
    case 4: console.log("thursday");
        break;
    case 5: console.log("friday");
        break;
    case 6: console.log("satday");
        break;
    case 7: console.log("sunday");
        break;
    default: alert("invalid day");
}

//for loop
var i = 2;
for (;i<5;i++)
    {
        console.log(i);
    }

//while loop
var i = 2;
while (i<5)
    {
        console.log(i);
    }
console.log("loop stoped");



//break statement
var i = 1;
while (i>5){   
    if(i===2){
        break;   
    }   
        //when 2 comes it will break the loop and print 1 2 only though 3 4 satisfies condition it we'll not print
    console.log(i);
    }
console.log("loop stoped");         //prints 
                                    //1 2 loop stoped


//continue statement
var i = 1;
while (i>5){   
    if(i===2){
        continue;   
    }   
        //continues loop without going to next line console,log line..means- i=1 print , i=2 doent do anything direct go again continue loop , i=3 print 3, i=4 print 4 , i=5 loop stops
    console.log(i);
    }
console.log("loop stoped");         //prints 1 3 4 


//do while loop
var k=1;
do{
    console.log(k);
    k++;
}while(k<=5);       //prints 1 2 3 4 5 6 
//1st code executes then condn check