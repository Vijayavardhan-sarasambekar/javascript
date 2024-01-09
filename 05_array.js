const myArr=[1,2,3,4,5]
console.log(myArr[0]);

//****************METHODS********************

//push() methods
myArr.push(4);
console.log(myArr);

//pop() methods
myArr.pop()
console.log(myArr);

// unshift() methods
myArr.unshift("vijay")
console.log(myArr);

myArr.unshift("vijay","jay",[1,2,3])
console.log(myArr);

// shift() methods
myArr.shift()
console.log(myArr);

// flat() methods
result_array=myArr.flat(Infinity)
console.log(result_array);

// includes() methods 
/* It returns true if element present in an array else false
if(elements==preset){return true;}
else{return false;}
*/
console.log(myArr.includes(3)); //element present in array
console.log(myArr.includes(9)); //element not present in Array

// index() methods

console.log(myArr.indexOf(5));

//slice and splice
console.log("A:",myArr);
let new_array=myArr.slice(2,4)
console.log(new_array);
console.log("B:",myArr);


console.log("C:",myArr);
let new_array1=myArr.splice(2,4)
console.log(new_array1);
console.log("D:",myArr);


let array1=[1,2,3,[4,5,6]]
let array2=[]
array2.push("vijay");
array2.unshift("Jay")
console.log(array1);

let ans_array=[...array1,...array2]
console.log(ans_array);

console.log(ans_array.flat(Infinity));