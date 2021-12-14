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

// Loading Data from JSON using AJAX 
let xhr = new XMLHttpRequest();
xhr.open("GET", "./json/data.json", true);
xhr.onload = (() => {
    if (xhr.status === 200) {
        let obj = JSON.parse(xhr.responseText);
        if (document.URL.endsWith("/touristpackages.html")) {
            let tourPackages = document.getElementById("tour-packages");
            let luxuryPackages = document.getElementById("luxury-packages");
            let adventurePackages = document.getElementById("adventure-packages");
            let wildlifePackages = document.getElementById("wildlife-packages");

            let html1 = "";
            let html2 = "";
            let html3 = "";
            let html4 = "";

            for (key in obj.packages) {
                html1 += `<div class="tour-card">
                    <div class="inner-tour-content-card">
                        <img src="${obj.packages[key].image}" alt="${obj.packages[key].place}">
                        <p>${obj.packages[key].time}</p>
                        <h3>${obj.packages[key].place}</h3>
                        <p>${obj.packages[key].descreption}</p>
                    </div>
                    <div class="inner-tour-price-card">
                        <p>from <span class="price">₹ ${obj.packages[key].price} </span>per person </p>
                        <button>Book Now</button>
                    </div>
                </div>`
            }

            for (key in obj.luxuryPackages) {
                html2 += `<div class="tour-card">
                    <div class="inner-tour-content-card">
                        <img src="${obj.luxuryPackages[key].image}" alt="${obj.luxuryPackages[key].place}">
                        <p>${obj.luxuryPackages[key].time}</p>
                        <h3>${obj.luxuryPackages[key].place}</h3>
                        <p>${obj.luxuryPackages[key].descreption}</p>
                    </div>
                    <div class="inner-tour-price-card">
                        <p>from <span class="price">₹ ${obj.luxuryPackages[key].price} </span>per person </p>
                        <button>Book Now</button>
                    </div>
                </div>`
            }

            for (key in obj.adventurePackages) {
                html3 += `<div class="tour-card">
                        <div class="inner-tour-content-card">
                        <img src="${obj.adventurePackages[key].image}" alt="${obj.adventurePackages[key].place}">
                            <p>${obj.adventurePackages[key].time}</p>
                            <h3>${obj.adventurePackages[key].place}</h3>
                            <p>${obj.adventurePackages[key].descreption}</p>
                        </div>
                        <div class="inner-tour-price-card">
                            <p>from <span class="price">₹ ${obj.adventurePackages[key].price} </span>per person </p>
                            <button>Book Now</button>
                        </div>
                    </div>`
            }

            for (key in obj.wildlifePackages) {
                html4 += `<div class="tour-card">
                        <div class="inner-tour-content-card">
                            <img src="${obj.wildlifePackages[key].image}" alt="${obj.wildlifePackages[key].place}">
                            <p>${obj.wildlifePackages[key].time}</p>
                            <h3>${obj.wildlifePackages[key].place}</h3>
                            <p>${obj.wildlifePackages[key].descreption}</p>
                        </div>
                        <div class="inner-tour-price-card">
                            <p>from <span class="price">₹ ${obj.wildlifePackages[key].price} </span>per person </p>
                            <button>Book Now</button>
                        </div>
                    </div>`
            }

            tourPackages.innerHTML = html1;
            luxuryPackages.innerHTML = html2;
            adventurePackages.innerHTML = html3;
            wildlifePackages.innerHTML = html4;

        }
        else if (document.URL.endsWith("/localguides.html")) {
            let localGuideProfiles = document.getElementById("local-guides-container");
            let html = "";

            for (key in obj.localGuides) {
                html += `<div class="tour-guide-card-box">
                <div class="tour-guide-card">
                    <h3>${obj.localGuides[key].name} <span class="rating">${obj.localGuides[key].rating}</span></h3>
                    <ul>
                        <li>${obj.localGuides[key].quality[0]}</li>
                        <li>${obj.localGuides[key].quality[1]}</li>
                        <li>${obj.localGuides[key].quality[2]}</li>
                    </ul>
                    <button>Request your Travel</button>
                </div>
                <img src="${obj.localGuides[key].image}" alt="">
            </div>`
            }
            localGuideProfiles.innerHTML = html;
        }
        else if (document.URL.endsWith("/travelplanner.html")) {
            let reviewSlider = document.getElementById("review-slider");
            let html = "";
            for (key in obj.reviews) {
                html += `<div class="swiper-slide">
                    <img class="testimonial-slider-image" src="${obj.reviews[key].image}" alt="" srcset="">
                    <h3>${obj.reviews[key].name}</h3>
                    <p>${obj.reviews[key].descreption}</p>
                </div>`
            }
            reviewSlider.innerHTML = html;
        }
    }
    else {
        console.log("Error! Not Found");
    }
})
xhr.send();

// Form Validation
if (document.URL.endsWith("/travelplannerrequest.html")) {
    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("tel");
    const startDate=document.getElementById("trip-start-date");
    const endDate=document.getElementById("trip-end-date");


    let validName = false;
    let validEmail = false;
    let validPhone = false;
    let validEndDate=false;

    userName.addEventListener("blur", () => {
        let regex = /^[a-zA-Z ]{2,40}$/;
        let str = userName.value;
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

    startDate.addEventListener("blur",()=>{
        if(Date.parse(startDate.value)>=Date.parse(endDate.value)){
            endDate.classList.add("is-invalid");
            endDate.style.backgroundImage="none";
            validEndDate=false;
        }
        else{
            endDate.classList.remove("is-invalid")
            validEndDate=true;
        }
    })
    
    endDate.addEventListener("blur",()=>{
        if(Date.parse(startDate.value)>=Date.parse(endDate.value)){
            endDate.classList.add("is-invalid");
            endDate.style.backgroundImage="none";
            validEndDate=false;
        }
        else{
            endDate.classList.remove("is-invalid")
            validEndDate=true;
        }
    })

    let submit = document.getElementById("submit");
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        let alert = document.getElementById("alert");
        if (validName && validPhone && validEmail && validEndDate== true) {
            alert.classList.add("show");
            alert.classList.add("alert-success");
            alert.classList.remove("alert-danger");
            alert.innerHTML = `<p><span>Success! </span>Your travel request has been succesfully submitted</p>
            <button id="close-btn" onclick=closeAlert()><i class="fas fa-times"></i></button>`;
            userName.value = "";
            phone.value = "";
            email.value = "";
            startDate.value="";
            endDate.value="";
            document.getElementById("location").value="";
            document.getElementById("message").value="";
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
    startDate.setAttribute("min", minDate);
    endDate.setAttribute("min", minDate);
}