const flip = require("../scripts/topSection.js");

test("flip adds th class flipped when you click on the arrow", () => {
  document.body.innerHTML = `<div class="selector">
      <article class="selector-card">
        <img class="arrow-image" src="./assets/arrow.svg" alt="Arrow" />
      </article>
    </div>`;

  const arrowImage = document.querySelector(".arrow-image");

  flip(arrowImage);

  const article = document.querySelector(".selector-card");
  expect(article.classList.contains("flipped")).toBe(true);
});
