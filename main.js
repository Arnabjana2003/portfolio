function loader() {
 const loader = document.querySelector("loader");
 const main = document.querySelector("main");
 const wlcm = document.querySelector("loader div p");
 const h1 = document.querySelector("loader div h1");

 window.addEventListener("load", () => {
  h1.classList.remove("slide-animation");
  wlcm.classList.remove("rotate-animation");
  setTimeout(function () {
   loader.style.height = 0;
   main.style.display = "block";
  }, 1500);
 });
}
function changeTheme() {
 const btn = document.querySelector("theme button");
 btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("light");
 });
}

function scrollAnimation() {
 const elements = document.querySelectorAll(".animation");

 window.addEventListener("scroll", () => {
  elements.forEach((item) => {
   if (
    window.scrollY >= item.offsetTop - window.outerHeight * 0.85 &&
    window.scrollY < item.offsetTop + item.offsetHeight * 0.8
   ) {
    item.classList.add("action");
   } else {
    item.classList.remove("action");
   }
  });
 });
}
function toggleNav() {
 const bar = document.querySelector(".bar i");
 bar.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("hideNav");
  bar.classList.toggle('fa-circle-xmark')
 });
}

loader();
changeTheme();
scrollAnimation();
toggleNav();
