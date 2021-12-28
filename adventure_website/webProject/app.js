const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");
const preload = document.querySelector('.preload');


hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active")
});

window.addEventListener("load", ()=>{
    preload.classList.add('loaded');
});