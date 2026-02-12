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
let x1 = 1234567890123456789012345;
let y1 = BigInt(78345)

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

 // add new code
















 // String in JS 
 // String is a sequence of characters used to represent text

 let str = "anish khatri";
let str1 = 'anish';
console.log(str);
console.log(str[6]);

// Template Literals
// A way to have embedded expression in strings

// String Interpolation 
// To create by doing substitution of placeholders
let obj = {
    item: "pen",
    price: 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// another code for this topic

let specialString = `this a Number ${1+2+3+58}`;
console.log(specialString);

// Escape in string 
console.log("add the new feature \n Add the new feature");

// string methods in JS 
// these are built-in functions to manipulate  a string
 
let str3 = "Anish khstri";
console.log(str3);







// string method
let str4 = "anish";
let str5 = "khatri"
let res = str4.concat(str5);
console.log(res);

// Arrays in js 

// Arrays are use the store sampe data 
// using this example of loop in arrys 

let heroes = ["ironman","batman", "Spiderman", "ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman","ironman","batman", "Spiderman"];
for(let idx=0; idx <= heroes.length; idx++){
    console.log(heroes[idx]);
}


let info = ["anish khatri", 86 , "KTM"];
console.log(info);

// for of looping method
for(let hero of heroes) {
    console.log(hero);
}


let cities = ["kathmandu", "pokhara", "okhaldhunga", "kathamndu"];

for(let city of cities) {
    console.log(city);
    console.log(city.toUpperCase())
}

// Practice
// For a given arrys with marks of student = [85,97,44,89,76,60] Find the average marks of the entire class

let marks = [85,97,44,89,76,60];
let lowest = marks[0];
for(let i = 1; i < marks.length; i++) {
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}
console.log(lowest);


// For a given array with marks of student = [85,97,44,37,76,60,25,45,45,45,66,89,77,45,10,12,45,89,77,55,71] find the average marks of the entire class.
let marks1 = [85,97,44,37,76,60,25,45,45,45,66,89,77,45,10,12,45,89,77,55,71];
let sum2 = 0;
for (let val of marks ) {
    sum += val;
}

let avg = sum / marks1.length;
console.log(`the average of this number is = ${avg}`);

// second Question
// For a given array with price of 5 items = [250,645,300,900,50] All items have an offer of 10% OFF on them . Change the array to store final price after appling offer

let price2 = [250,645,300,900,50];
let i = 0;
for(let val of price2) {
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    price2[i] = price2[i] - offer;
    console.log(`The discount price2 = ${price2[i]}`);
    i++;
}

// for loop method for same coding
let price3 = [250,645,300,900,50];
for (let i = 0; i < price3.length; i++) {
     let offer1 = price3[i] / 10;
     price3[i] -= offer1;
}
console.log(price3);

// Arrays in JS 
// 1 = Push(): add to end
// 2 = pop(): delete from end & return
// 3 = toString() : converts array to string


// push () sample code
let veggies = ["potato", "tomato", "chilly"];
veggies.push("cucumber");
console.log(veggies);

// pop() 
let veggies1 = ["potato", "tomato", "chilly"];
let deletedItem = veggies1.pop();
console.log(veggies1);
console.log("deleted", deletedItem);

//toString()
let veggies2 = ["potato", "tomato", "chilly"];
console.log(veggies2);
console.log(veggies2.toString());



// Function in JS
// Block of code that performs a specific task, can be invoked whenever needed

function myFunction() {
    console.log("Hello world");
    console.log("Anish");
}
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();


function fuName(msg) { // parameter -> input
    console.log(msg)
}
fuName("hi i am fronted developer"); // argument


// create the function = 2 numbers , sum the number and find the output and print in console

function sum3(x, y, z) {
    console.log(x + y + z);
}
sum3(100,100,100);

// new code 
function sum4(x,y) { // this act like local variable and this variable work in curly bracket 
    // block scope
    s = x + y;
    console.log(x);
    return s;
}
let re = sum4(3,4);
console.log(re);



function add1(a,b) { 
    return a+b;
}

function div(a,b) {
    return a/b;
}


// Arrow Functiom
// Compact way of writting a function

function sum5(a,b) { 
    return a+b;
}
const vau = (a,b) => {
    console.log(a + b);
};



function div1(a,b) {
    return a/b;
}
const vau1 = (a,b) => {
    console.log(a / b);
};

function mul(a,b) {
    return a*b;
}
const vau2 = (a,b)

// add new code





function bName(numbers1, numbers2) {
    console.log(numbers1 + numbers2);

}
bName(10, "100")

//more code 
function bNum(ab , bc) {
    console.log(ab + bc);
    return;
}
bNum(10, 10)

// Practic Question 
//  Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels(str6) {
 let count = 0;
 for (const char of str6) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
    }
 }
 console.log(count);
}

// Create an arrow function to perform the same task.
// you do this problem ????




// and add some code for function 
function aNum(ll , llab) {
    return ll + llab;
}
aNum(10, 10000,)


// some more Array Methods
// Map 
// Create a new array with the results of some operation. the value its callback returns are used to form new array
let nums = [41, 42, 45 ];
nums.map((val) => {
console.log(val);
} )

// create new array using map
let nums1 = [10,25,85,];

let newArr = nums1.map((val1) => {
    return val1;
})
console.log(newArr);




// DOM in HTML

console.dir(document);
console.dir(document.body);
console.dir(document.head);


// DOM Manipulation
// selecting with ID

let anish = document.getElementById("anish");
console.dir(anish);


//Selecting with class

let anish1 = document.getElementsByClassName("anish1");
console.dir(anish1);

// Selecting with tag

/*let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// Query Selector
let el = document.querySelector("p");
console.dir(el);


let pl = document.querySelector("div");
console.dir(pl); */



// Create a H2 heading element with text - "Hello JavaScript". Append "from  College Student" to this text using JS.
let h2 = document.getElementsByTagName("h2")[0];
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from College Student";


// create the p element using the Javascript

const newPara = document.createElement("p");
newPara.textContent = "I am learning javascript DOM";
document.body.appendChild(newPara);


// Create the h1 ta in html ans using the JS and wlecome to the my webpage

let h1 = document.querySelector("h1");
h1.textContent = h1.textContent + "to my website";

//Create 3 <li> elements using JavaScript:

let ul = document.createElement("ul");


let li1 = document.createElement("li");
li1.innerText = "HTML";

let li2 = document.createElement("li");
li2.innerText = "CSS";

let li3 = document.createElement("li");
li3.innerText = "JavaScript";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);


//Create 3 divs with common class name "box" Access them & add some uniqu text to each of them

let divs = document.getElementsByClassName("box");
divs[0].innerText = "Hi iam a Div1";
divs[1].innerText = "Hi iam a Div2";
divs[2].innerText = "Hi iam a Div3";










