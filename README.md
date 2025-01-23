# Password Generator CLI for QAP1 Fullstack JavaScript

## Description
This Node.js command-line application generates random passwords based on user-specified options. 
It allows users to customize the length of the password and include symbols, numbers, or uppercase letters.

## Table of Contents
- Installation
- Usage
- Available Flags
- Examples
- Features
- License

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/password-generator-cli.git

## Usage
To generate a password, run the following command:
```bash
node index.js
```

## Available Flags
- `--help`: Displays the help message.  
  ```bash
  node index.js --help
  ```
- `--length <number>`: Sets the password length.  
  ```bash
  node index.js --length 12
  ```
- `--symbols`: Includes symbols in the password.  
  ```bash
  node index.js --length 12 --symbols
  ```
- `--numbers`: Includes numbers in the password.  
  ```bash
  node index.js --length 12 --numbers
  ```
- `--uppercase`: Includes uppercase letters in the password.  
  ```bash
  node index.js --length 12 --uppercase  ```

## Examples
- Generate a 12-character password:  
  ```bash
  node index.js --length 12
  ```
- Generate a 16-character password with symbols:  
  ```bash
  node index.js --length 16 --symbols
  ```
- Generate a 10-character password with numbers and uppercase letters:  
  ```bash
  node index.js --length 10 --numbers --uppercase
  ```
  
## Features
Generate passwords with lowercase letters.  
Specify password length.  
Include symbols in the password.  
Include numbers in the password.  
Include uppercase letters in the password.  
Contributing  
Contributions are welcome! Please fork the repository and submit a pull request.  

## License
This project is licensed under the MIT License.
