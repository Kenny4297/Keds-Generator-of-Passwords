//The list of possible characters for each criteria 
const lowercaseLettersString = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseLettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numbersString = '1234567890';

const specialCharactersString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";

//Functions to create a character and push to to the 'soon to be' password
const createLowercaseLetter = () => {
    let lowercaseLetter = Math.floor(Math.random() * lowercaseLettersString.length);
    solutionArray.push(lowercaseLettersString[lowercaseLetter]);
  }
  
const createUppercaseLetter = () => {
  let uppercaseLetter = Math.floor(Math.random() * uppercaseLettersString.length);
  solutionArray.push(uppercaseLettersString[uppercaseLetter]);
}

const createNumber = () => {
  let numberChoice = Math.floor(Math.random() * numbersString.length);
  solutionArray.push(numbersString[numberChoice]);
}

const createSpecial = () => {
  let specialChoice = Math.floor(Math.random() * specialCharactersString.length);
  solutionArray.push(specialCharactersString[specialChoice]);
}

//List of functions that gather user input from prompts
const gatherPasswordCriteria = () => {
  while (true) {
    passwordCriteria = prompt("How many characters would you like your password to be? Length must be between 8 and 128 characters long");
    if (passwordCriteria >= 8 && passwordCriteria <= 128) {
      window.alert(`Password length: ${passwordCriteria}. \n Got it.`)
      break;
    } else if (passwordCriteria === null) {
      break;
    } else {
      window.alert("Try again! The length needs to be more than 8 characters and less than 128!");
    }
  }
};
  
const gatherLowercasePrompt = () => {
  while (true) {
    lowercasePrompt = prompt("Would you like to use lowercase characters?").toLowerCase();
    if (lowercasePrompt === 'yes' || lowercasePrompt === 'no') {
      window.alert(`You said ${lowercasePrompt} to lowercase characters in your password... \n Understood!`)
      break;
    } else if (lowercasePrompt === null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }
};
  
const gatherUppercasePrompt = () => {
  while (true) {
    uppercasePrompt = prompt("Would you like to use uppercase letters?").toLowerCase();
    if (uppercasePrompt === "yes" || uppercasePrompt === "no") {
      window.alert(`You said ${uppercasePrompt} to uppercase characters in your password... \n Heard that!`)
      break;
    } else if (uppercasePrompt == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }
};
  
const gatherNumberPrompt = () => {
  while (true) {
    numberPrompt = prompt("Would you like to use numbers?").toLowerCase();
    if (numberPrompt === "yes" || numberPrompt === "no") {
    window.alert(`You said ${numberPrompt} to numbers in your password... \n Acknowledged!`)
      break;
    } else if (numberPrompt == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }
};
  
const gatherSpecialPrompt = () => {
  while (true) {
    specialPrompt = prompt("Would you like to use special characters?").toLowerCase();
    if (specialPrompt === "yes" || specialPrompt === "no") {
    window.alert(`You said ${specialPrompt} to special characters in your password... \n Rodger!`)
      break;
    } else if (passwordCriteria == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }
};