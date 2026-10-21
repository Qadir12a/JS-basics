// Challenge 1 — Personal Introduction

// let myName = "Abdul Qadir";
// let myAge = 22;
// let myCity = "Karachi";
// console.log("Hello, my name is "+ myName );
// console.log("I am "+ myAge+" years old");
// console.log("I Live in "+ myCity);

// console.log("Hello, my name is "+ myName + ". I am " + myAge + " Years old and I live in "+ myCity + ".");


// Challenge 2 — Two Numbers
// Create two variables containing numbers.

// let num1 = 20;
// let num2 = 30;

// console.log("The sum of " + num1 + " and " + num2 + " is  = " + (num1 + num2));
// console.log("The difference of "+ num1 +" and "+num2+" is = "+(num1-num2));
// console.log("The product of "+ num1 +" and "+num2+" is = "+(num1*num2));
// console.log("The quotient of "+ num1 +" and "+num2+" is = "+(num1/num2));

// Challenge 3 — Student Information
// Create variables for:
// Student name
// English marks
// Math marks
// Computer marks
// Print the student's name and all three marks.
// Then calculate and print the total marks.

// let stdName = "Ali";
// let englishMarks = 85;
// let mathMarks = 90;
// let computerMarks = 95;

// console.log("Student Name " + stdName);
// console.log("English Marks " + englishMarks);
// console.log("Math Marks " + mathMarks);
// console.log("Computer Marks " + computerMarks);
// console.log("Total Marks = " + (englishMarks + mathMarks + computerMarks));

// Challenge 4— Salary Calculation
// Create variables for:
// Monthly salary
// Number of months
// Calculate the total salary earned in that number of months.
// For example:
// monthlySalary = 50000
// months = 12
// Calculate:
// 50000 * 12
// Then print the result.

// let monthlySalary = 50000;
// let months = 12;
// let totalSalary = monthlySalary * months;
// console.log("Total salary earned in " + months + " months is = " + totalSalary);


// CONDITIONAL STATEMENTS

// let age = +prompt("Enter your age: ");

// if(age >= 18){
//     console.log("You are eligible to vote.");
// }
// else{
//     console.log("You are not eligible to vote.");
// }


// let gender = prompt("Enter your gender ");

// if(gender === "male"){
//     console.log("You can join the gym.");
// }

// else{
//       console.log("sorry, you cannot join the gym. this gym is only for males.");
// }


// let num = +prompt("Enter a number: ");

// if(num > 0){
//     console.log("The number is positive.");
// }
// else if(num < 0){
//     console.log("The number is negative.");
// }
// else{
//     console.log("The number is zero.");
// }


// let num1 = +prompt("Enter the first number: ");
// let num2 = +prompt("Enter the second number: ");

// if(num1 > num2){
//     console.log("the first number is greater than the second number.")
// }
// else if(num1 <num2){
//     console.log("the second number is greater than the first number.")
// }
// else{
//     console.log("both numbers are equal.")
// }

// let num = +prompt("Enter a number: ");

// if(num % 2 === 0){
//     console.log("The number is even.");
// }
// else{
//     console.log("The number is odd.");
// }

// let num = +prompt("Enter a number: ");

// if(num % 5 === 0){
//     console.log("The number is divisible by 5.");
// }
// else{
//     console.log("The number is not divisible by 5.");
// }

// let num = +prompt("Enter a number: ");

// if(num > 0){
//     console.log("the number is positive.");
// }
// else if (num <0){
//     console.log("the number  is negative.");
// }
// else{
//     console.log("the number is zero.");
// }


// Functions

// 1. Write a function called sum that takes in two numbers as parameters
// and returns their sum.

// function sum(num1, num2){
//     return num1 + num2 ;
//     }
// console.log(sum(5, 10));


//  2. Write a function called isEven that takes in a number as a parameter and
// returns true if the number is even and false if it is odd.

// function isEven(num){
//      if(num % 2 === 0){
//       return  true
//      }
//      else{
//       return  false
//      }
// }
// console.log(isEven(9))

// 3. Write a function called reverseString that takes in a string as a
// parameter and returns the string in reverse order.

// function reverseString(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("hello"));

/*  4. Write a function called calculateFactorial that takes in a number as a
parameter and returns the factorial of that number (i.e. the product of
all positive integers up to that number).  */

// function calculateFactorial(num){

//     let result = 1 ;
//     for(let i = num; i >= 1 ; i--)
//     {
//         result = result * i ;
//     }
//     return  result

// }

// console.log(calculateFactorial(5));


/* 5. Write a function called convertTemperature that takes in a temperature
in Celsius as a parameter and returns the equivalent temperature in
Fahrenheit.  */

// function convertTemperature(celsius){

//     let fahrenheit = (celsius * 9/5) + 32 ;
//     return fahrenheit

// }

// console.log(convertTemperature(5));

/* 6. Write a function called countVowels that takes in a string as a parameter
and returns the number of vowels in the string. For example,
countVowels("hello") should return 2. */

// function countVowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
// }
// return count

// }
// console.log(countVowels("a e i o u"));


//  ********   Arrays *********

// 1. Write a program that prompts the user to enter five numbers and stores
// them in an array. Then, output the sum of the numbers to the console


// let arr = [0, 0, 0, 0, 0];

// for(let i = 0; i<=4; i++){
//   arr[i] = +prompt("enter number");
// };

// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

// 2. Write a function called findMax that takes in an array of numbers as a
// parameter and returns the largest number in the array.

// function findMax(numbers){
//      numbers.sort((a, b) => a - b);
//      console.log(numbers);

//      return numbers[numbers.length - 1];


// }

// let maximum = findMax([4, 1, 9, 2]);
// console.log("max ", maximum );


// let arr = [7, 2, 10, 5];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

/* Task 1 — Sum of Array
Ek array mein 6 numbers hain. Loop use karke un sab numbers ka sum calculate karo
 aur console mein print karo. */

// let arr = [5, 8, 9, 10, 7, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]

// }
// console.log(sum);

/*  Task 2: Find Minimum
Ek function findMin banao jo array mein se sabse chhota number return kare. */


// function findMin(arr) {
//     let smallNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] < smallNum) {
//             smallNum = arr[i];
//         }

//     }
//     return smallNum
// }

// console.log(findMin([17, 4, 9, 2, 15, 6,1]));

/*  Task 3 — Count Even Numbers
Ek function countEven(arr) banao jo array mein even numbers ki total quantity return kare. */


// function countEven(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count = ++count
//         }
//     }
//     return count
// }

// console.log(countEven([1, 2, 4, 7, 8, 11, 14, 16, 18]));

/*  Task 4 — Print Positive Numbers
Ek function printPositive(arr) banao jo array mein se sirf positive numbers print kare. */

// function printPositive(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             console.log(arr[i]);

//         }
//     }
// }

// printPositive([-3, 5, 0, 8, -1, 10, 11])



/*  Task 5 — Search a Number

Ek function searchNumber(arr, target) banao jo check kare ke target array mein mojood hai ya nahi. */

// function  searchNumber(arr, target){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === target){
//             return true
//         }

//     }
//     return false;

// }

// console.log(searchNumber([4, 8, 2, 90, 15], 9))


/*   Next Task 6 — Reverse an Array
Ek function reverseArray(arr) banao jo array ke elements ko reverse order mein print kare. */

// function reverseArray(arr) { 
//     for(let i = arr.length-1 ; i >=0 ; i--){
//         console.log(arr[i]);
        
//     }
// }

// reverseArray([10, 20, 30, 40, 50]);