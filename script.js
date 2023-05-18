var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );


  // Conditional statement to check if password length is a number or in the required length
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be a number between 8 and 128');
    return null;
  }

  var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
  var hasUpper = confirm('Click OK to confirm including uppercase characters.');
  var hasLower = confirm('Click OK to confirm including lowercase characters.');
  var hasNumeric = confirm('Click OK to confirm including numeric characters.');
    

  // Check if we are atleast using one type
if (!hasSpecialCharacters && !hasUpper && !hasLower && !hasNumeric) {
  alert('At least one character type must be selected.');
  return null;
}


  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasNumeric: hasNumeric
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

  // Start empty
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // Push characters into the array for each different option that is true
  if (options.hasSpecialCharacters) {
    possibleCharacters.push("!@#$%^&*()-_+={}[]\\|;:,./?");
    guaranteedCharacters.push(getRandom("!@#$%^&*()-_+={}[]\\|;:,./?"));
  }

  if (options.hasUpper) {
    possibleCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    guaranteedCharacters.push(getRandom("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  }

  if (options.hasLower) {
    possibleCharacters.push("abcdefghijklmnopqrstuvwxyz");
    guaranteedCharacters.push(getRandom("abcdefghijklmnopqrstuvwxyz"));
  }

  if (options.hasNumeric) {
    possibleCharacters.push("0123456789");
    guaranteedCharacters.push(getRandom("0123456789"));
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

