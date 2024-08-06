// representation of array
// []
let items = [1, 2, 3];
let frnd_age = 30;
let frnd2_age = 21;

let friendAge = [18,21,24,23,25];
let itemName = ["apple","orange", "banana",]

console.log(friendAge);

// accaessing elemets using idenxing

//  in programming language count starts from 0

let names = ["pablo","chinnu","munnu","samosa"];

console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[0]);
if(names[5]  === undefined){
    console.log("Element is not available")
}
// there is no value in the array and we are trying to print that ietem we will get undefined 

// length of the array

console.log(names.length);

let arrLength = names.length;;

console.log(arrLength);
let lastIndex =  arrLength - 1;

console.log(names[lastIndex]);

let arr=[1,"Masai",3.14,[1,2,3],false];
console.log(arr.length);
console.log(arr[3]);

console.log(arr[3][2]);

// if no element is present it will give us undefined 

let array = [];
if (array.length == 0){
    array.push(2);
}
console.log(array.length);
