let open = document.getElementById("open");
let modal = document.getElementById("modal-content");
let close = document.getElementById("close");
let submit = document.getElementById("sbmt");
//Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

function myFunction() {
  alert("Your reservation is confirmed💥");
}
