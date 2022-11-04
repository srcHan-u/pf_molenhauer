const logo = document.querySelector(".header__logo > svg > path");
const links = Array.from(document.querySelectorAll(".menu__link"));
const switcher = document.querySelector(".header__switcher-lang");
const mainScreen = document.querySelector(".main-screen");
// const burgerIcon =

window.addEventListener("DOMContentLoaded", () => {
  let a = mainScreen.getBoundingClientRect().height;
  if (window.innerWidth > 767.98) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > a) {
        logo.style.fill = "#06255b";
        for (const link of links) {
          link.style.color = "#06255b";
        }
        switcher.style.backgroundColor = "#06255b";
        switcher.style.color = "#fff";
      } else if (window.scrollY <= a) {
        logo.style.fill = "#fff";
        for (const link of links) {
          link.style.color = "#fff";
        }
        switcher.style.backgroundColor = "#fff";
        switcher.style.color = "#06255b";
      }
    });
  }
});
