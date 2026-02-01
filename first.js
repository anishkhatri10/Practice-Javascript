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
d = null;
isFollow = true;
console.log(fulName);
console.log(d);
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

/* Data type in Javascript 
    1. Number = 	A number representing a mathematical value
    2. String = 	A text of characters enclosed in quotes
    3. Boolean = A data type representing true or false
    4. Undefine = 	A primitive variable with no assigned value
    5. Null = 	A primitive value representing object absence
    6 Biglnt = 	A number representing a large integer
    7. Symbol = 	A unique and primitive identifier
    8. Object = A collection of key-value pairs of data
*/

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345)

// Boolean
let x4 = true;
let y4 = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x2 = null;
let y2 = null;

// Symbol
const x3 = Symbol();
const y3 = Symbol();
    
// Create a const object called "product" to store information show your daraz product 
const product = {
    productName: "pen",
    productPrice: 20,
    productColor: "black",
    discount: "5%",
}
console.log(product);

//                                  NEW TOPIC
// Operators in JS

/* Operators are for Mathematical and Logical Computations
The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values */

// Artimetic Operators
/* + (add)
- (sub)
* (muntiply)
/ (div)
% (modulus)
** (Exponentiation)
++ (Increment)
-- (Decrement)
*/
let num3 = 10;
let num4 = 12;
console.log("num3+num4 =", num3+num4);
console.log("num3 - num4 =", num3-num4);
console.log("num3 * num4 =", num3*num4);
console.log("num3 / num4 =", num3/num4);
console.log("num3 % num4 =", num3%num4);
console.log("num3 ** num4 =", num3**num4);
console.log("num3 ++ num4 =", num3++);
console.log("num3 -- num4 =", num3--);

// Assignment operators 
let e = 40;
e += 40;
console.log("a =", e);

/* let e = 40;
e -= 40;
console.log("a =", e);

let e = 40;
e %= 40;
console.log("a =", e);

let e = 40;
e **= 40;
console.log("a =", e);

let e = 40;
e ++= 40;
console.log("a =", e);

let e = 40;
e --= 40;
console.log("a =", e);
*/



/*Comparison Operators
Comparison operators are used to compare two values.

Comparison operators always return true or false.

*/
// == (Equal to)
// === (Eqal to & type)
/* !=  (Not equal to), !== (Not wqual to & type)
 */

let ab = 52;
let aa = 12;
console.log(ab == aa);
console.log(ab === aa);
console.log(ab != aa);
console.log(ab !== aa);


// logical operators
// logical AND (&&)
// logical OR (||)
// logical NOT (!)

let aaa = 45;
let bbb = 44;

console.log("aaa || bbb =", aaa < bbb || aaa === 45);
console.log("aaa && bbb =", aaa && bbb);
console.log("aaa ! bbb =", !(aaa < bbb));


// Another topic 
// Conditional Statement

//if statement

let age4 = 2;
if (age4 > 18) {
    console.log("you can vote");
}
if (age4 < 18) {
    console.log("you can not vote");
}

// new code example
let mode = "light";
let color1;

if (mode === "dark") {
    color1 = "black";
}
if (mode === "light") {
    color1 = "white";
}

console.log(color1);


// if -else statement
/* if is correct and print this otherwise if is not correct and else is correct and print
*/
let age5 = 18;
if (age5 >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}

//Create the variable and find ood or even ?
let num5 = 25;
if (num5 %2 === 0 ) {
    console.log("Even");
} else {
    console.log("Odd");
}

// else if statement 

let personAge = 52;
if (personAge <= 18) {
    console.log("junior");
} else if (personAge <= 25) {
    console.log("middle");
} else if (personAge <= 35) {
    console.log("mid senior")
}else {
    console.log("senior")
}
// some example for else if statement
let mode1 = "light";
let color2;
if (mode1 === "dark") {
color2 = "white";
} else if (mode1 === "light") {
    color2 = "black";y
} else {
    color2 = "green";
}
console.log(color2);

// Ternary Operators
// condition ? true output : false output
// age > 18 ? "adult" : "not adult";


let age2 = 16;
let result = age2 >= 18 ? "adult" : "not adult";
console.log(result);

// Get user to input a number using prompt ("Enter the number "). Check if the number a multiple o 5 or not
/*
let num6 = prompt("Enter the number:");

if (num6 % 5 ===0) {
    console.log(num6, "is multiple of 5");
 } else {
    console.log(num6, "is not multiple of 5");
 }
*/
 // Write a code which can give grades to students according to their to their scores:
 /*let studentScore = prompt ("Enter the number 0-100");
 if (studentScore >= 80 && studentScore <= 100) {
    studentScore = "A";
 } else if (studentScore >= 70 && studentScore <= 89) {
    studentScore = "B";
 } else if (studentScore >= 60 && studentScore <= 69) {
    studentScore = "C";
 } else if (studentScore >= 50 && studentScore <= 59) {
    studentScore = "D";
 } else if (studentScore >= 0 && studentScore <= 49){
    studentScore = "E";
 } else if (studentScore >= 101) {
    studentScore = "Please enter the bellow 101";
 }

 console.log(studentScore);
 */


                                // Loops in JS 
// loops are the used to execute a piece of code again & again
// for loop

for (let count = 1; count <= 5; count++) {
    console.log("Anish khatri");
}

// calculate sum of 1 to 5
let sum1 = 0;
for (let i = 1; i<= 100; i++) {
    sum1 = sum1 + i;
}
console.log(sum1);

for (let j = 1; j<=5; j++) {
    console.log("j =", j);
}

// Infinite Loop : A loop that never ends and you use this loop and browser is crash


// while loop
// new topic











// print all even numbers from 0 to 100
for (let num7 =0; num7<= 100; num7++) {
    if (num7 %2 ===0) {
        console.log("num =", num7);
    }
}


/* Create a game where you start with any random game number . 
 Ask the user to keep gussing the game number until the
 user enters correct value.  */

 let gameNum = 25;
 let userNum = prompt("Guess the correct number");
 while(userNum != gameNum) {
   userNum = prompt("you enter wrong number. Guess Again");
 }
 console.log("Congratulation you enter the correct Number");


















