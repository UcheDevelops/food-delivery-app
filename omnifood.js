const learnMore = document.querySelector(".btn2");
const omniFoodInfo = document.querySelector(".omnifood-info");
const closeBtn = document.querySelector(".close-btn");
// const blurScreen = document.querySelector(".blur");
document.querySelector(".blur").style.display = "none";

learnMore.addEventListener("click", (e) => {
  omniFoodInfo.style.display = "block";
  document.querySelector(".blur").style.display = "block";
  //   blurScreen.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  omniFoodInfo.style.display = "none";
  document.querySelector(".blur").style.display = "none";
  //   blurScreen.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    omniFoodInfo.style.display = "none";
    document.querySelector(".blur").style.display = "none";
    // blurScreen.style.display = "none";
  }
});

document.querySelector(".blur").addEventListener("click", (e) => {
  omniFoodInfo.style.display = "none";
  document.querySelector(".blur").style.display = "none";
  //    blurScreen.style.display = "none";
});





