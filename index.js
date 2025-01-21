// QAP1-AJS: Password Generator
// Description: This script generates random passwords based on user-specified options.
// Author: Chris M

//import the 'process' module to access command-line arguments.
//extract arguments passed by the user
const process = require("process");
const arguments = process.argv.slice(2);
const userChoice = arguments[0];

//setup help arguments and help function for user

//--help        >> displays help information
//--length      >> setup for password length
//--numbers     >> setup numbers in the password
//--symbols     >> setup symbols for password
//--uppercase   >> setup uppercase for password

//setup function: generatePassword
function generatePassword() {
  //set available characters, length and set password to empty.
  const charDefault = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  let length = 8;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charDefault.length);
    password += charDefault[randomIndex];
  }
  return password
}

//generates a random password based on user input options.
//default: Generate an 8-character password with lowercase letters.
//customizable: Add options for length, uppercase, numbers, and symbols.

//call function to set password
const password = generatePassword();

//welcome message to confirm the script is running and your password is generated.
console.log("");
console.log("Welcome to the Password Generator!");
console.log(`Here is your new generated password: ${password}`);
console.log("");
