const learnMore = document.querySelector(".btn2");
const omniFoodInfo = document.querySelector(".omnifood-info");
const closeBtn = document.querySelector(".close-btn");
const blurScreen = document.querySelector(".blur");
const menuIcon = document.querySelector(".ionicon");
const navLinks = document.querySelector(".nav-links");

var condition = false;
menuIcon.addEventListener("click", () => {
  if (!condition) {
    navLinks.style.display = "flex";
    navLinks.style.right = "0";
    condition = true;
  } else {
    navLinks.style.right = "-30%";
    condition = false;
  }
});

learnMore.addEventListener("click", (e) => {
  omniFoodInfo.style.display = "block";
  blurScreen.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  omniFoodInfo.style.display = "none";
  blurScreen.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    omniFoodInfo.style.display = "none";
    blurScreen.style.display = "none";
  }
});

blurScreen.addEventListener("click", (e) => {
  omniFoodInfo.style.display = "none";
  blurScreen.style.display = "none";
});
