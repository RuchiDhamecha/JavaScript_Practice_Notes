//object computed property

//key1 's value is key 
//value1's value is keys's value

const key1= 'obj1';
const key2= 'obj2';

const val1='myvalue1';
const val2='myvalue2';

//it can be computed as

const obj={
    [key1] : val1,
    [key2] : val2
}
console.log(obj);

//or

const object = {};
object[key1] = val1;
object[key2] = val2; 
console.log(object);

//{ obj1: 'myvalue1', obj2: 'myvalue2' } 


//======================================================


//Spread operator in Objects

const obj3={
    key1 : 'value1',
    key2 : 'value2',
    key1 : 'value3'  //key1 value will be value3 not value1 its redefined so value will be override
}

const obj4 ={
    //key3 : 'value1',
    key2 : 'value1', 
    key4 : 'value2'
}

//make new object and copy both thses objects into it
const new_object={...obj3, ...obj4};
console.log(new_object);

//as we clone there r 2 key2 key name should be unique , so it will overide with key of last object

//{ key1: 'value3', key2: 'value1', key4: 'value2' }

//now if we change the sequece of clone 
const newobject={...obj4, ...obj3};
console.log(newobject);

//{ key2: 'value2', key4: 'value2', key1: 'value3' }



