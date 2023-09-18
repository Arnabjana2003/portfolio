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
  bar.classList.toggle("fa-circle-xmark");
 });
}

function select() {
 const targets = document.querySelectorAll(".about-items-heading h4");
 targets.forEach((item) => {
  item.addEventListener("click", () => {
   targets.forEach((i) => i.classList.remove("select"));
   item.classList.add("select");
   const content = document.querySelector(".about-items-content");
   if (item.innerText === "Myself") {
    content.innerText = `Hey, this is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes.

I am Arnab. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I`;
   }
   if (item.innerText === "Education & Others") {
    content.innerText = `I've completed my Schooling from Haldia Govt. Sponsored Vivekananda Vidyabhawan(H.S) including Madhyamik(Secondary) and
    Higher-Secondary(H.S) both in Science streem. Recently I am pursuing BCA from Mahishaldal Raj College
    
    I am from Haldia, Purba Medinipur. Interested in Web Development and Software Development`;
   }
   // if (item.innerText === "Skills") {
   //  content.innerText = `I've completed my Schooling from Haldia Govt. Spons.
   //  Vivekananda Vidyabhawan(H.S) including Madhyamik(Secondary) and
   //  Higher-Secondary(H.S) both. Recently I am pursuing BCA from Mahishaldal Raj
   //  College `;
   // }
  });
 });
}

loader();
changeTheme();
scrollAnimation();
toggleNav();
select();
