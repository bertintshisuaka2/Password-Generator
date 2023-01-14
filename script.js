// Assignment code here
var generatePassword
var upercaseList =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialcharacterList=["$","%","@","!","#"];
var numberList =["0","1","2","3","4","5","6","7","8","9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword (){
 
  var length = prompt("what is the length of the password?");
  

  var lowercase = confirm("Do you want lowercase character?");
  var specialcharacter = confirm("do you want special character?");
  var upercase =confirm("do you want upercase character?");
  var number = confirm("do you want number?");
  console.log(length, lowercase, upercase, specialcharacter, number)
 var choiceList =[]
 if(lowercase == true){
  choiceList = choiseList.concat(lowercaseList)
  console.log(lowercase)
  }
  if(lowercase == true){
    choiceList = choiseList.concat(upercaseList)
    }
    if(lowercase == true){
      choiceList = choiseList.concat(specialcharacterList)
      }
      
      if(lowercase == true){
        choiceList = choiseList.concat(numberList)
        }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
