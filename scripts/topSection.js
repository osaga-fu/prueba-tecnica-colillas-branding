
const arrowImages = document.querySelectorAll(".arrow-image");

function flip(arrow) {
  const article = arrow.closest(".selector-card");
  article.classList.toggle("flipped");
}

arrowImages.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    flip(arrow);
  });
});

module.exports = flip;
