// Assignment code here
let checkboxes = document.querySelectorAll(".checkbox");
let parametersSection = document.querySelector(".user-choice-section");
let selectedCheckboxes = [];

for (let checkbox of checkboxes) {
  //I create a shortcut; I add an eventListener to all the checkboxes, looking for any that are clicked
  checkbox.addEventListener('click', () => {
    console.log(this.checked);
    if(this.checked === true) {
      //I now add those checked boxes to the 'selectedCheckboxes' array.
      console.log(this.value);

    } else {
      console.log("test failed?")
    }
  })
}

const generatePassword = () => {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  parametersSection.style.display = 'block';

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


