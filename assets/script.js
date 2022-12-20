// Assignment code here



const generatePassword = () => {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  while (true) {
    passwordCriteria = prompt("How many characters would you like your password to be? Length must be between 8 and 128 characters long");
    if (passwordCriteria >= 8 && passwordCriteria <= 128) {
      // console.log("number test Passed");
      // console.log(passwordCriteria);
      break;
    } else if (passwordCriteria === null) {
        break;
      } else {
      window.alert("Try again! The length needs to be more than 8 characters and less than 128!");
    }
  }

  while (true) {
    uppercasePrompt = prompt("Would you like to use uppercase letters?").toLowerCase();
    console.log(uppercasePrompt);
    if (uppercasePrompt === "yes" || uppercasePrompt === "no") {
      // console.log("uppercase test passed")
      break;
    } else if (passwordCriteria == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }

  while (true) {
    specialCase = prompt("Would you like to use special characters?").toLowerCase();
    console.log(specialCase);
    if (specialCase === "yes" || specialCase === "no") {
      // console.log("special char test passed")
      break;
    } else if (passwordCriteria == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


