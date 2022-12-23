// Assignment code here

//Generate the password
const generatePassword = () => {
  //Where the password will be pushed to as it gets pieced together. See 'helper.js' for the created functions
  solutionArray = [];
  count = 0
  while (count < passwordCriteria) {

      if(lowercasePrompt === 'yes' && count < passwordCriteria) {
        createLowercaseLetter();
        count++;
      } 

      if (uppercasePrompt === 'yes' && count < passwordCriteria){
        createUppercaseLetter();
        count++;
      } 

      if (numberPrompt === 'yes' && count < passwordCriteria) {
        createNumber();
        count++;
      } 

      if (specialPrompt === 'yes' && count < passwordCriteria) {
        createSpecial();
        count++;
      } 
      //He we check to see if the user decided he didn't want any characters in his/her password
      if (count === 0) {
        solutionArray = "You didn't select any prompts, so you end up with nothing";
        return solutionArray;
      }
  }
  return `Your new password is: \n ${solutionArray.join('')} \n \n Length of password: ${passwordCriteria} \n Lowercase character? ${lowercasePrompt} \n Uppercase characters? ${uppercasePrompt} \n Numbers? ${numberPrompt} \n Special Character? ${specialPrompt}`;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  //Call the user prompts (found in helper functions)
  gatherPasswordCriteria();
  gatherLowercasePrompt();
  gatherUppercasePrompt();
  gatherNumberPrompt();
  gatherSpecialPrompt();

  // console.log(generatePassword());
  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


