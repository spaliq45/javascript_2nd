/*Data Types : 1.Primitive data types - String,Number,bigInt,boolean,undefined,symbol,null
   2. Non Primitive data types  - Arrays ,objects*/

let x = 10;
let y = x;
y = 20;
//console.log(x, y); //output : 20


let a = "Hello";
let b = a;
b = "World";
//console.log(a, b); //output : Hello World
/*
console.log(typeof 42); //output : number
console.log(typeof "Hello"); //output : string
console.log(typeof true); //output : boolean
console.log(typeof undefined); //output : undefined
console.log(typeof null); //output : object  , this is a error/bugs in javascript
*/

let obj1 = { 
    name: "Alice" 
};
let obj2 = obj1;
obj2.name = "Bob";
//console.log(obj1, obj2); //output : { name: 'Bob' } { name: 'Bob' }


let numOne = 3
let numTwo = 3
//console.log(numOne == numTwo) //output : true


let nums = [1, 2, 3]
nums[0] = 10
//console.log(nums)  // [10, 2, 3]

let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]
//console.log(nums1 == numbers) //output will be false , because two are separate arrays but hold same vaues

let nums2 = [1, 2, 3]
let numbers2 = nums2
//console.log(nums2 == numbers2) //output : true


let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);//output : [1,2,3,4] [1,2,3,4]



