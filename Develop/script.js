// Assignment code here
                          
  //Array variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "`", "~", "?", "/", ".", ",", "<", ">", ":", ";"];
var  possibleCharacters = [];
var prompts; 
// console.dir (possibleCharacters);

//>>>to do>>>>
//generate random number for array index 


// >>>>>randomize array code >>>>>
// for (var i; i < possibleCharacters.length; i++) {
// var randomIndex = Math.floor(Math.random() * possibleCharacters.length); 
//var randomLetter = possibleCharacters[randomIndex]
// generatePassword.push(randomLetter); 
// }


// // >>>>AskHowMany not working>>>
// var prompts = function() {
//   var NumberOfCharacters = window.prompt("How many characters long would you like your password to be?");
//       if (NumberOfCharacters > 7 && NumberOfCharacters < 129); {
//         console.log (possibleCharacters);
//         prompts();
//       }  
//   };
//   } else { window.alert ("Choose a number between 8 and 128."); 
//   askHowMany();
//   }




//   // askLowerCase();??
//   //};
//   var inputCharacters = function() {
//     var askLowerCase = prompt ("Do you want to use lowercase letters? Type 1 for yes and anything else for no");
//     if (askLowerCase == 1) {
//       possibleCharacters.push(lowercase);
//     }
//   };
//     //>>>>>do i need this?>>>>
//     // if (askLowerCase == 2) {
//     // } else {
//     //   askLowerCase();
//     // }

//     var askUppercase = prompt ("Do you want to use uppercase letters? Type 1 for yes and anything else for no");
//     if (askUppercase == 1) {
//       possibleCharacters.push(uppercase);
//     };

//       var askNumbers = prompt ("Do you want to use numbers? Type 1 for yes and anything else for no");
//       if (askNumbers == 1) {
//         possibleCharacters.push(numbers);
//       };

//       var askSpecialCharacters = prompt ("Do you want to use special characters? Type 1 for yes and anything else for no");
//       if (askSpecialCharacters == 1) {
//         possibleCharacters.push(specialCharacters);
//       };
//       console.log (possibleCharacters);


    

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

 var generateBtn = document.querySelector("#generate");


  function generatePassword() {
    console.log("You clicked the Button");
    var NumberOfCharacters = parseInt(prompt("How many characters long would you like your password to be? Choose a number between 8 and 128."));
    if (!NumberOfCharacters) {
    ("You need to enter a value.");
    } else if (NumberOfCharacters < 8 || NumberOfCharacters > 128) {
        NumberOfCharacters = parseInt(prompt("You must choose a number between 8 and 128"));
        generatePassword();
    } else  { 
      askLowercase = confirm("Would you like to include lowercase letters?");
      askUppercase = confirm("Would you like to include uppercase letters?");
      askNumbers = confirm("Would you like to include numbers?");
      askSpecialCharacters = confirm("Would you like to include special characters?"); 
      console.log (NumberOfCharacters);
    }
    if  (!askLowercase && !askUppercase && !askNumbers && !askSpecialCharacters) {
      prompts = alert ("Please enter valid selection.")
      generatePassword();
      // if selects all 4
    } else if (askLowercase && askUppercase && askNumbers && askSpecialCharacters) {
      prompts = lowercase.concat(numbers, uppercase, specialCharacters);

    //if selects 3 of 4
    } else if (askLowercase && askUppercase && askNumbers) {
      prompts = lowercase.concat(numbers, uppercase);
    }  else if (askLowercase && askUppercase && askSpecialCharacters) {
      prompts = lowercase.concat(uppercase, specialCharacters);
    }  else if (askLowercase && askNumbers && askSpecialCharacters) {
      prompts = lowercase.concat(numbers, specialCharacters);
    }  else if (askUppercase && askNumbers && askSpecialCharacters) {
      prompts = uppercase.concat(numbers, specialCharacters);

        //if selects 2 of 3 
    }  else if (askLowercase && askUppercase) {
      prompts = lowercase.concat(uppercase);
    }  else if (askLowercase &&  askNumbers) {
      prompts = lowercase.concat(numbers);
    }  else if (askLowercase &&  askSpecialCharacters) {
      prompts = lowercase.concat(specialCharacters);
    }  else if (askUppercase &&  askNumbers) {
      prompts = uppercase.concat(numbers);
    }  else if (askUppercase &&  askSpecialCharacters) {
      prompts = uppercase.concat(specialCharacters);
    }  else if (askNumbers &&  askSpecialCharacters) {
      prompts = numbers.concat(specialCharacters);

          //if selects just 1 
    }  else if (askLowercase) {
      prompts = lowercase;
    }  else if (askUppercase) {
      prompts = uppercase;
    }  else if (askNumbers) {
      prompts = numbers;
    }  else if (askSpecialCharacters) {
      prompts = specialCharacters;
    }
    console.log (prompts);
  };


    
  


  //   return "generated password goes here";
  // }



  // // Get references to the #generate element
 

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);




