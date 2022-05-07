// Assignment code here
                          
  //Array variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "?", "/", ".", ",", "<", ">", ":", ";"];
var  possibleCharacters = [];

  //function to generate a password 
  function generatePassword() {
    // ask prompts: how many characters? use lowercase? uppercase? numbers? special characters? 
    var numberOfCharacters = parseInt(prompt("How many characters long would you like your password to be? Choose a number between 8 and 128."));
    if (!numberOfCharacters) {
    ("You need to enter a value.");
    } else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        numberOfCharacters = parseInt(prompt("You must choose a number between 8 and 128"));
        generatePassword();
    } else  { 
      var askLowercase = confirm("Would you like to include lowercase letters?");
      var askUppercase = confirm("Would you like to include uppercase letters?");
      var askNumbers = confirm("Would you like to include numbers?");
      var askSpecialCharacters = confirm("Would you like to include special characters?"); 
    }
    if  (!askLowercase && !askUppercase && !askNumbers && !askSpecialCharacters) {
      possibleCharacters = alert ("Please enter valid selection.")
      generatePassword();

      //concat all possibilities into possibleCharacters 
      // if selects all 4
    } else if (askLowercase && askUppercase && askNumbers && askSpecialCharacters) {
      possibleCharacters = lowercase.concat(numbers, uppercase, specialCharacters);

    //if selects 3 of 4
    } else if (askLowercase && askUppercase && askNumbers) {
      possibleCharacters = lowercase.concat(numbers, uppercase);
    }  else if (askLowercase && askUppercase && askSpecialCharacters) {
      possibleCharacters = lowercase.concat(uppercase, specialCharacters);
    }  else if (askLowercase && askNumbers && askSpecialCharacters) {
      possibleCharacters = lowercase.concat(numbers, specialCharacters);
    }  else if (askUppercase && askNumbers && askSpecialCharacters) {
      possibleCharacters = uppercase.concat(numbers, specialCharacters);

        //if selects 2 of 3 
    }  else if (askLowercase && askUppercase) {
      possibleCharacters = lowercase.concat(uppercase);
    }  else if (askLowercase &&  askNumbers) {
      possibleCharacters = lowercase.concat(numbers);
    }  else if (askLowercase &&  askSpecialCharacters) {
      possibleCharacters = lowercase.concat(specialCharacters);
    }  else if (askUppercase &&  askNumbers) {
      possibleCharacters = uppercase.concat(numbers);
    }  else if (askUppercase &&  askSpecialCharacters) {
      possibleCharacters = uppercase.concat(specialCharacters);
    }  else if (askNumbers &&  askSpecialCharacters) {
      possibleCharacters = numbers.concat(specialCharacters);

          //if selects just 1 
    }  else if (askLowercase) {
      possibleCharacters = lowercase;
    }  else if (askUppercase) {
      possibleCharacters = uppercase;
    }  else if (askNumbers) {
      possibleCharacters = numbers;
    }  else if (askSpecialCharacters) {
      possibleCharacters = specialCharacters;
    }
  
    var password = [];

    //random selection variables 

    for (var i = 0; i < numberOfCharacters; i++ ) {
      var actualCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      password.push(actualCharacters);
      // console.log (actualCharacters);
      // console.log (password);
    }
    
    var newPassword = password.join("");
    return newPassword;


  };

    

  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);
  // // Get references to the #generate element
 

  // Write password to the #password input
  function writePassword(newPassword) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  };

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);




