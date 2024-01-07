// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
 
  let specialAnswer = false;
  let numericAnswer = false;
  let lowerCasedAnswer = false;
  let upperCasedAnswer = false;

  let lengthAnswer = prompt('How many characters would you like your password to contain?');
    if (lengthAnswer === null || lengthAnswer === '' || isNaN(lengthAnswer)) {
      alert('Please input a valid number');
      return false;
    } else if (lengthAnswer < 8 || lengthAnswer > 128) {
      alert('Password length must be at least 8 and no more than 128 characters');
      return false;
    } else {
      do {
        specialAnswer = confirm('Click OK to confirm including special characters');
        numericAnswer = confirm('Click OK to confirm including numeric characters');
        lowerCasedAnswer = confirm('Click OK to confirm including lowercased characters');
        upperCasedAnswer = confirm('Click OK to confirm including uppercased characters');
       
        if (!specialAnswer && !numericAnswer && !lowerCasedAnswer && !upperCasedAnswer) {
          alert('Please select at least one character type.');
        }
      } while (!specialAnswer && !numericAnswer && !lowerCasedAnswer && !upperCasedAnswer); 
        
      return {
        length: parseInt(lengthAnswer),
        special: specialAnswer,
        numeric: numericAnswer,
        lowerCased: lowerCasedAnswer,
        upperCased: upperCasedAnswer,
      }
    }
  }

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword(options) {
    
  let characters = [];
    
    if (options.special) {
      characters = characters.concat(specialCharacters);
    }
    if (options.numeric) {
      characters = characters.concat(numericCharacters);
    }
    if (options.lowerCased) {
      characters = characters.concat(lowerCasedCharacters);
    }
    if (options.upperCased) {
      characters = characters.concat(upperCasedCharacters);
    }
    
    let password = '';
    
    for (let i = 0; i < options.length; i++) {
      password += getRandom(characters);
    }

    return password;
}
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();
  if (options) {
  var password = generatePassword(options);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);