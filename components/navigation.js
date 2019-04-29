let navigation = document.querySelector("nav");
let navlinks = document.querySelectorAll("nav a");
navigation.addEventListener('click', function () {
  navlinks.forEach(link => link.setAttribute("style", "display: block"))
});
