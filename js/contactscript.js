const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telno = document.getElementById("tel");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "contact-left error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "contact-left success";
}
//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(username.value);

  if (username.value === "") {
    showError(username, "Field is required");
  } else {
    showSuccess(username);
    alert("We have recieved your message 👍");
  }
});
