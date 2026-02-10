const toggleMenu = document.querySelector(".header__menu-toggle");
const headerNav = document.querySelector(".header__nav");
const nav__list = document.querySelector(".nav__list");
const body = document.querySelector("body");
toggleMenu.addEventListener("click", function (e) {
  body.classList.toggle("no-pseudo");
  nav__list.classList.toggle("nav__list-clicked");
});
