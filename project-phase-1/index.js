const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar-bottom");
const faqs = document.querySelectorAll(".faq");

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