const username = document.getElementById('username').value;

const myform = document.getElementById("form")

myform.addEventListener('click', function(event){
if(!UsernameValidation()){


event.preventDefault();}
})


function UsernameValidation(username){
   //check for balck username
    if(!username|| username.trim() === ""){
        return " user Name cannot be black"
    }
    //check for minimum length
    if(username.length < 4){
        return " user Name must be at least 4 characters long";
    }

    //check for unique character
    const uniqueChares = new Set(username.split(""))
    if (uniqueChares.size<2)
    {
  return "username must contain at least 2 unique characters.";
    }

    //check for special characters and whitespce
    const regex =/^[a-zA-Z0-9]+$/ ;
    if(!regex.test(username)){
        return " username cannot contain special characters or whitespace.";
      }
      //user name is valid
}