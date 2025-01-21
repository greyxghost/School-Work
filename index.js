// QAP1-AJS: Password Generator
// Description: This script generates random passwords based on user-specified options.
// Author: Chris M

//import the 'process' module to access command-line arguments.
//extract arguments passed by the user
const process = require("process");
const arguments = process.argv.slice(2);
const userChoice = arguments[0];

// function to display help information for the user
function userHelp() {
  console.log(`
    Welcome! This program helps you generate a random password based on the options you provide.

    By default, the password length is set to 8 lowercase characters. It can be longer but not shorter.

    How to Use:
    1. Open your terminal and navigate to the correct directory where "index.js" and "package.json" are located.
    2. Run the program using the following command:
    
       node index.js 

    Available Flags:
    
      --help                   Displays this help message.
            ex: node index.js --help
      
      --length <number>        Sets the password length. Replace <number> with how long you want your password to be.
            ex: node index.js --length 12
     
      --symbols                Adds random symbols (e.g., !@#$%^&*) to your password.
            ex: node index.js --length 12 --symbols

    Examples:
    
       node index.js --length 12
       → Generates a 12-character password using lowercase letters by default.
       
       node index.js --length 16 --symbols
       → Generates a 16-character password that includes symbols.

    Notes:
    - You can combine multiple flags to customize your password.
    - If no flags are provided, the password defaults to 8 lowercase characters.

    `);
}

//--help        >> displays help information
//--length      >> setup for password length
//--numbers     >> setup numbers in the password
//--symbols     >> setup symbols for password
//--uppercase   >> setup uppercase for password

//check for the --help flag before running the password generator
if (arguments.includes("--help")) {
    userHelp();
    process.exit(0); // Exit after showing help
  }

//setup function: generatePassword
function generatePassword() {
  //set available characters, length and set password to empty.
  const charDefault = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  let length = 8;

  //setup the loop so password has 8 characters
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charDefault.length);
    password += charDefault[randomIndex];
  }
  //returns generated password from function
  return password;
}

//call function to set password
const password = generatePassword();

//welcome message to confirm the script is running and your password is generated.
console.log("");
console.log("Welcome to the Password Generator!");
console.log(`Here is your new generated password: ${password}`);
console.log("");
