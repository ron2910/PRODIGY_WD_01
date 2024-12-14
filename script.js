// Select the navigation bar
const navbar = document.querySelector(".navbar");

// Add a scroll event listener to change the navbar's style on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
