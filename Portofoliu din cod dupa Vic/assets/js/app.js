const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const moon = document.getElementById("moon");

// !! Hamburger Toggle
hamburger.addEventListener("click", function () {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");

   links.forEach((link) => {
      link.addEventListener("click", function () {
         navMenu.classList.remove("active");
         hamburger.classList.remove("active");
      });
   });
});

// moon.addEventListener("click", function () {});

// !! CURSOR
let cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
   cursor.style.left = e.clientX + "px";
   cursor.style.top = e.clientY + "px";
});

// !! sticky
const nav = document.getElementById("nav");
const about = document.getElementById("about");
const button = document.querySelector("button-up");

window.onscroll = function () {
   if (window.pageYOffset >= about.offsetTop) {
      nav.classList.add("sticky");
      // button.classList.add("show");
   } else {
      nav.classList.remove("sticky");
      // button.classList.remove("show");
   }
};
