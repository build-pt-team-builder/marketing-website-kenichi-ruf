let navigation = document.querySelector("nav");
let navlinks = document.querySelectorAll("nav a");
navigation.addEventListener('click', function () {
  navlinks.forEach(link => link.classList.add("mobile-nav-link"));
  navlinks.forEach((link, i) => link.setAttribute("style", `top: ${50+50*i}px`));
});
