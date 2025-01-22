// QAP1-Fullstack JS: Password Generator
// Description: This script generates random passwords based on user-specified options.
// Author: Chris M

// Import the 'process' module to access command-line arguments.
// Extract arguments passed by the user.
const process = require("process");
const cliArgs = process.argv.slice(2);
const userChoice = cliArgs[0];

// Function to display help information for the user.
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
// --uppercase   >> Setup uppercase for the password.

// Check for the --help flag before running the password generator.
if (cliArgs.includes("--help")) {
  userHelp();
  process.exit(0); // Exit after showing help.
}

// Setup function: generatePassword.
function generatePassword() {
  // Set available characters, length, and set password to empty.
  let charDefault = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  let length = 8;

  // Check if the user provided --length and a number after it.
  const passwordLengthIndex = cliArgs.indexOf("--length");
  if (passwordLengthIndex !== -1 && cliArgs[passwordLengthIndex + 1]) {
    length = parseInt(cliArgs[passwordLengthIndex + 1], 10);

    // Checks to make sure a number is valid, such as asd[isNaN] or -12[isNaN].
    if (!isNaN(length) && length > 0 && Number.isInteger(length)) {
      length = length;
    } else {
      console.log("Length not valid, defaulting to an 8-letter password.");
      length = 8;
    }
  }

  // If a user uses [--symbols], it updates the default characters with additional symbols.
  if (cliArgs.includes("--symbols")) {
    charDefault += "!@#$%^&*()_+[]{}<>?/|\\";
  }

  // If a user uses [--numbers], it updates the default characters with additional numbers.
  if (cliArgs.includes("--numbers")) {
    charDefault += "0123456789";
  }

  // Setup the loop so the password has 8 characters.
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charDefault.length);
    password += charDefault[randomIndex];
  }
  // Returns the generated password from the function.
  return password;
}

// Call function to set the password.
const password = generatePassword();

// Welcome message to confirm the script is running and that your password is generated.
console.log("");
console.log("Welcome to the Password Generator!");
console.log(`Here is your new generated password: ${password}`);
console.log("");
