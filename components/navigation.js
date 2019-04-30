let navigation = document.querySelector("nav");
let navlinks = document.querySelectorAll("nav a");
navigation.addEventListener('click', function () {
  navlinks.forEach(link => link.classList.add("mobile-nav-link"));
  navlinks.forEach((link, i) => link.setAttribute("style", `top: ${50+50*i}px`));
});

let mobileNav = document.querySelector(".mobile-nav");
let bars = document.querySelectorAll(".mobile-nav div");
mobileNav.addEventListener('click', function () {
  bars.forEach(bar => bar.classList.toggle("change"));
});
