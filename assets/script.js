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

//The code below sets some parameters for the first question, to ensure we get a valid response.
  let lengthAnswer = prompt('How many characters would you like your password to contain?');
    if (lengthAnswer === null || lengthAnswer === '' || isNaN(lengthAnswer)) {
      alert('Please input a valid number');
      return false;
    } else if (lengthAnswer < 8 || lengthAnswer > 128) {
      alert('Password length must be at least 8 and no more than 128 characters');
      return false;
    } else {
//This code will make sure at least one of the questions below is answered positively, by alerting the user when they have not done so and displaying those options again.
      do {
        lowerCasedAnswer = confirm('Click OK to confirm including lowercased characters');
        upperCasedAnswer = confirm('Click OK to confirm including uppercased characters');
        numericAnswer = confirm('Click OK to confirm including numeric characters');
        specialAnswer = confirm('Click OK to confirm including special characters');
        
        if (!lowerCasedAnswer && !upperCasedAnswer && !specialAnswer && !numericAnswer) {
          alert('Please select at least one character type.');
        }
      } while (!lowerCasedAnswer && !upperCasedAnswer && !specialAnswer && !numericAnswer); 
        
      return {
        length: parseInt(lengthAnswer),
        lowerCased: lowerCasedAnswer,
        upperCased: upperCasedAnswer,        
        numeric: numericAnswer,
        special: specialAnswer,
      }
    }
  }

// Function for getting a random element from an array - this function will be applied to each of the arrays above.
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let passwordGenerated = false;

// Function to generate password with user input - this function gather random characters from the arrays displayed above and combines them together to make a single 'word'.
function generatePassword(options) {
    
  let characters = [];
    
    if (options.lowerCased) {
      characters = characters.concat(lowerCasedCharacters);
    }
    if (options.upperCased) {
      characters = characters.concat(upperCasedCharacters);
    }
    if (options.numeric) {
      characters = characters.concat(numericCharacters);
    }
    if (options.special) {
      characters = characters.concat(specialCharacters);
    }
    
    let password = '';

    for (let i = 0; i < options.length; i++) {
      password += getRandom(characters);
    }

    return password;
}
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input - this function displays the password in the textbox at the end of the process of selecting the desired options for the random password.
function writePassword() {
  var options;

  options = getPasswordOptions();
  
  if (options) {
    var passwordText = document.querySelector('#password');

    var password = generatePassword(options);
    passwordText.value = password;
    passwordGenerated = true;
  }
}

// Add event listener to generate button - this means the desired behaviour happens upon a click of the button.
generateBtn.addEventListener('click', writePassword);