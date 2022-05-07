// Assignment code here
                          
  //Array variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "?", "/", ".", ",", "<", ">", ":", ";"];
var  possibleCharacters = [];
// console.dir (possibleCharacters);

//>>>to do>>>>
// var randomNumber = Math.floor(Math.random() * 10); 
//generate random number for array index 


// >>>>>randomize array code >>>>>
// for (var i; i < passwordLength**; i++) {
// var randomIndex = Math.floor(Math.random() * possibleCharacters.length); 
//var randomLetter = possibleCharacters[randomIndex]
// generatePassword.push(randomLetter); 
// }

// >>>>AskHowMany not working>>>
// var AskHowMany = function() {
//   var NumberOfCharacters = window.prompt("How many characters long would you like your password to be?");

//       if (NumberOfCharacters > 7 || NumberOfCharacters < 129); {
//         //  NumberOfCharacters = possibleCharacters.length;
//         // console.log (possibleCharacters);
//         AskHowMany();
//       }  
  // };
  // } else { window.alert ("Choose a number between 8 and 128."); 
  // askHowMany();
  // }




  // askLowerCase();??
  //};
  
    var askLowerCase = prompt ("Do you want to use lowercase letters? Type 1 for yes and anything else for no");
    if (askLowerCase == 1) {
      possibleCharacters.push(lowercase);
    };
    //>>>>>do i need this?>>>>
    // if (askLowerCase == 2) {
    // } else {
    //   askLowerCase();
    // }

    var askUppercase = prompt ("Do you want to use uppercase letters? Type 1 for yes and anything else for no");
    if (askUppercase == 1) {
      possibleCharacters.push(uppercase);
    };

      var askNumbers = prompt ("Do you want to use numbers? Type 1 for yes and anything else for no");
      if (askNumbers == 1) {
        possibleCharacters.push(numbers);
      };

      var askSpecialCharacters = prompt ("Do you want to use special characters? Type 1 for yes and anything else for no");
      if (askSpecialCharacters == 1) {
        possibleCharacters.push(specialCharacters);
      };
      console.log (possibleCharacters);


    

  // var askUppercase = window.alert ("Do you want to use upper case letters?");
  // var askNumbers = window.alert ("Do you want to use numbers?");
  // var askSpecialCharacters = window.alert ("Do you want to use special characters?"); 
  // var to call characters
  //prompt: how many characters (8-128)?
  //prompt: use lowercase?
  //prompt: use uppercase?
  //prompt: use numbers?
  //prompt: use characters?
  //validate input 
  //generate and display password
  // math.random
  //var random1to10 = Math.floor(Math.random() * 10); 
  function generatePassword() {
    console.log("You clicked the Button");


    return "generated password goes here";
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




