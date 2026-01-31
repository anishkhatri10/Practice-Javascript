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














