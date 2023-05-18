var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randString = arr[randIndex];
  var randCharIndex = Math.floor(Math.random() * randString.length);
  var randChar = randString[randCharIndex];

  return randChar;
}

// Function to generate password with user input
function generatePassword(options) {

  // If we don't have options something went wrong, so we return
  if (!options) return;

  // Array of possible characters
  var possibleCharacters = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
  ];

  // Array of special characters
var specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*',
  '(', ')', '-', '_', '+', '=', '{', '}',
  '[', ']', '\\', '|', ';', ':', ',', '.',
  '/', '?', ' '
];

  // Initialize blank array to store garunteed Chars
  var guaranteedCharacters = [];

  // If the hasSpecialCharacters boolean is true, concat it into our arrays
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Variable to store password as it's being concatenated
  var result = [];

  // Iterate over the length of options.length and add random characters to our password result
  for (var i = 0; i < options.length; i++) {
    result.push(getRandom(possibleCharacters));
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getPasswordOptions());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

