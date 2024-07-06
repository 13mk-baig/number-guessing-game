#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n************welcome to number guessing game************* ");
// making variable and using propmpt function for taking input
const randomNumber = Math.floor(Math.random() * 10 + 1);
//making variable and ask questiion with user using await
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "now guess the number between 1 till 10",
    }
]);
// here we comparing user guess number to random number using if 
if (answers.userguessedNumber === randomNumber) {
    console.log("your guess is correct");
}
else {
    console.log("your guess is wrong ");
}
