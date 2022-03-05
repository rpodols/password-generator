// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


var generatePassword = function() {
  //console.log("Button has been clicked.");
  var c = 0;
  var promptPasswordLength = window.prompt("How many characters should the password be?  Please select a number between or equal to 8 and 128.");
    
  if (promptPasswordLength > 128 || promptPasswordLength < 8 || promptPasswordLength === "" || promptPasswordLength === null) {
      window.alert("Please select a number between 8 and 128.");
      generatePassword();
    }
    else if (isNaN(promptPasswordLength) == true) {
      window.alert("Please select a valid number between 8 and 128.");
      generatePassword();
    } 
    //debugger;
  var isLowerCase = window.confirm("Should the password contain lower case letters?");
    if (isLowerCase) {
      c++;
    }
  var isUpperCase = window.confirm("Should the password contain upper case letters?");
    if (isUpperCase) {
      c++;
    }
  var includeNumbers = window.confirm("Should the password contain numbers?");
    if (includeNumbers) {
      c++;
    }
  var includeSymbols = window.confirm("Should the password contain symbols?");
    if (includeSymbols) {
      c++;
    }
    if (!isLowerCase && !isUpperCase && !includeNumbers && !includeSymbols) {
      window.alert("Please select at least one character type.");
      generatePassword();
    }
    const characterArray = [];
    for (i = 0; i < (promptPasswordLength/c); i++) {
      if (isLowerCase) {
        characterArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
      }
      if (isUpperCase) {
        characterArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
      }
      if (includeNumbers) {
        characterArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
      }
      if (includeSymbols) {
        characterArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
    }
    password = characterArray.join('');
  return password;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



