const btn = document.querySelector(".navbar-toggler");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

btn.addEventListener("click", () => {
  mobileNav.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.right = "-350px";
});
