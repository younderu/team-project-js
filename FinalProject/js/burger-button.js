const burgerBtn = document.querySelector(".header__burger-btn");
const navElement = document.querySelector(".header__nav");
const menu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-active");
  navElement.classList.toggle("active-menu");
  document.body.classList.toggle("lock");
});
menu.addEventListener("click", (ev) => {
  if (navElement.classList.contains("active-menu") && ev.target !== menu) {
    burgerBtn.click();
  }
});
