const arrowImages = document.querySelectorAll(".arrow-image");

arrowImages.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const article = arrow.closest(".selector-card");
    article.classList.toggle("flipped");
  });
});
