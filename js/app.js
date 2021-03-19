const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const backToTop = document.querySelector(".scroll");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
for (let link of navLinks) {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
}
