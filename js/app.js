const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const hLink= document.querySelectorAll("#hLink");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
})
hLinks.forEach(link=>{
    hamburger.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    })
})
