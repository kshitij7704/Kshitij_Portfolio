var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var home = document.querySelector("#nav-home");
var about = document.querySelector("#nav-about");
var project = document.querySelector("#nav-project");
var resume = document.querySelector("#nav-resume");
var contact = document.querySelector("#nav-contact");


home.addEventListener("click", () => {
    togglebtn.classList.remove("click");
    nav.classList.remove("open");
})

about.addEventListener("click", () => {
    togglebtn.classList.remove("click");
    nav.classList.remove("open");
})

project.addEventListener("click", () => {
    togglebtn.classList.remove("click");
    nav.classList.remove("open");
})

resume.addEventListener("click", () => {
    togglebtn.classList.remove("click");
    nav.classList.remove("open");
})

contact.addEventListener("click", () => {
    togglebtn.classList.remove("click");
    nav.classList.remove("open");
})

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UI Designer", "Data Analyst", "Programming Enthusiast"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});