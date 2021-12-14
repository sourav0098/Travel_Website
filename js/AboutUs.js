
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("contact");
const message = document.getElementById("message");

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

  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    document.getElementById("error").innerHTML = "Phone number must be 10 characters long number and first digit can't be 0!";
    phoneNumber.focus();
    return false;
  }
  // checking gender
  if (message.value === "") {
    document.getElementById("error").innerHTML = "Please enter a message";
    return false;
  }
  document.getElementById("error").innerHTML = "Message Sent";
  return true;
}
