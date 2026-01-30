//alert("welcome to my new sesion"); // and windows.alert

// variable in javascript topic
// important topic = Null and undefine (understanding this meaning ) 
// variable name is relate you value
/* Rule of Variable 
    1. Variable name is case sensitive; "a" and "A" is different.
    2. Only letters , digits, underscore(_) and $ is allowed. (not even space)
    3. Only a letter, underscore(_) or $ should be 1st character.
    4. Reserved words cannot be variable names.
*/

// example code and show this console 
// "open browser and right click and inspect and open console"
fulName = "anish"; // "=" this sign is assignment operater
age = 19;
price = 99.99;
x = null;
isFollow = true;
console.log(fulName);
console.log(x);
console.log(age);


fulname = "anish";
section = "A";
console.log(fulname);
console.log(section);

let a = 10;
let b = 20;
let c = a+b;
console.log(c);

const add = 2+2;
console.log(add);

// use var is not wrong but as a good program is not use var 
// var use after 2015 and intruduce 2015 in ES6 and use Let and const
var sub = 2-1;
var sub = 21-12;
console.log(sub);

// pratice Question for this topic 
//Declare a variable named name and store your full name in it. Then print it to the console.
let myName = "Anish khatri";
console.log(myName);


//Create two variables num1 and num2, assign any numbers to them, and display their sum.
let num1 = 25;
let num2 = 30;
let sum = num1+num2;
console.log(sum);

//Declare a variable isStudent and store a boolean value. Print its value.
let isStudent = true;
console.log(isStudent);

//Create a variable price and assign 500. Change its value to 750 and display the updated value.

let price1 = 500;
price1 = 750;
console.log(price1);

//Declare a constant variable PI and assign the value 3.14. Try to change its value and observe what happens.
const pi = 3.14; // not working beacuse const variable cannot be re-declared or updated.
// pi = 3.15;
console.log(pi);


// block scope variable in one example code 
{
    let price2 = 100;
    console.log(price2);
}











