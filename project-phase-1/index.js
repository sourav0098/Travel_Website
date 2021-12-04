const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar-bottom");
const faqs = document.querySelectorAll(".faq");

// Hamburger Menu
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
    navBar.classList.toggle("open");
});

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

// Form Validation
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("tel");

let validName = false;
let validEmail = false;
let validPhone = false;

userName.addEventListener("blur", () => {
    let regex = /^[a-zA-Z ]{2,30}$/;
    let str = userName.value;
    console.log("hello");
    if (regex.test(str)) {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        validName = true;
    }
    else {
        userName.classList.add("is-invalid");
        validName = false;
    }
})

email.addEventListener("blur", () => {
    let regex = /^([-_\.a-zA-Z0-9]+)@([-_\.a-zA-Z0-9]+)\.([a-zA-Z0-9]){2,9}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        validEmail = true;
    }
    else {
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

phone.addEventListener("blur", () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        validPhone = true;
    }
    else {
        phone.classList.add("is-invalid");
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    let alert = document.getElementById("alert");
    if (validName && validPhone && validEmail == true) {
        alert.classList.add("show");
        alert.classList.add("alert-success");
        alert.classList.remove("alert-danger");
        alert.innerHTML = `<p><span>Success! </span>Your travel request has been succesfully submitted</p>
        <button id="close-btn" onclick=closeAlert()><i class="fas fa-times"></i></button>`;
    }
    else {
        alert.classList.add("show");
        alert.classList.add("alert-danger");
        alert.classList.remove("alert-success");
        alert.innerHTML = `<p><span>Error!</span> Your travel request has not been sent due to error</p>
        <button id="close-btn" onclick=closeAlert()><i class="fas fa-times"></i></button>`;
    }
})

// To close alert
function closeAlert() {
    let alert = document.getElementById("alert");
    alert.classList.remove("show");
}

// To restrict previous date
let date = new Date;
let tdate = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (tdate < 10) {
    tdate = "0" + tdate;
}
if (month < 10) {
    month = "0" + month;
}

let minDate = `${year}-${month}-${tdate}`;
document.getElementById("trip-start-date").setAttribute("min", minDate);
document.getElementById("trip-end-date").setAttribute("min", minDate);