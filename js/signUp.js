// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const zipcode = document.getElementById("zipcode");

// function for form varification
function formValidation() {
  // checking length of name
  if (userName.value.length < 2 || userName.value.length > 20) {
    document.getElementById("error").innerHTML = "Name length should be more than 2 and less than 21 charaters";
    userName.focus();
    return false;
  }
  // checking email format
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    document.getElementById("error").innerHTML = "Please enter a valid email!";
    email.focus();
    return false;
  }
  // checking password character pattern
  if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    document.getElementById("error").innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.";
    password.focus();
    return false;
  }
  // checking reentered password is matching with the above entered password
  if (!password2.value == password.value) {
    document.getElementById("error").innerHTML = " Reentered Password Does not match ";
    password2.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    document.getElementById("error").innerHTML = "Phone number must be 10 characters long number and first digit can't be 0!";
    phoneNumber.focus();
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    document.getElementById("error").innerHTML = "Please select your gender!";
    return false;
  }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/) || zipcode.value == "") {
    document.getElementById("error").innerHTML = "Zip code must be 6 characters long number!";
    zipcode.focus();
    return false;
  }
  document.getElementById("error").innerHTML = "Registration Successful";
  return true;
}