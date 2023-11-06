// Assignment code here

function promptQuestion() {
    var criteria = window.confirm("Would you like to choose password criteria?");

    if(!criteria) {
        return;
    }
 var length = window.prompt("Set character length (min: 8 max: 128)");

 if (length > 8 && length < 128) {
    window.alert("You have choosen to use " + length + " characters")
 } else {
    window.alert("Please choose an approiate length!")
    return;
 }

 var uppercase = window.confirm("Would you like any uppercase characters?");
 if(uppercase) {
    window.alert("You have choosen to use uppercase characters");
 } else {
    window.alert("You have choosen not to use uppercase characters");
 }

 var lowercase = window.confirm("Would you like any lowercase characters?");
 if(lowercase) {
    window.alert("You have choosen to use lowercase characters");
 } else {
    window.alert("You have choosen to not use lowercase characters");
 }

 var numeric = window.confirm("Would you like any numerical characters?");
 if (numeric) {
    window.alert("You have choosen to use numeric characters");
 } else {
    window.alert("You have choosen not to use numeric characters");
 }

 var specialCharacter = window.confirm("Are there any special characters that you would like to include?");
 if (specialCharacter) {
    window.alert("You have choosen to use special characters");
 } else {
    window.alert("You have choosen not use any special characters")
 }

 if (!uppercase && !lowercase && !numeric && ! specialCharacter) {
    window.alert("You must choose at least one character type!")
    return;
 } else {
    window.alert("Thank you!")
 }




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
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", promptQuestion);