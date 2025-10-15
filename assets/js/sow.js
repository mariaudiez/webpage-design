document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const headerTitle = document.querySelector("#headerTitle");
    headerTitle.classList.add("active");
  }, 1000);

  const webCards = document.querySelectorAll(".web-card");

  webCards.forEach(function (card) {
    // Este bloque se ejecuta al hacer hover
    card.addEventListener("mouseover", function () {
      webCards.forEach(function (card) {
        let title = card.querySelector(".web-card-title");
        title.classList.remove("active");
      });
      let title = card.querySelector(".web-card-title");
      title.classList.add("active");

      const cardImages = document.querySelectorAll(".card-img");

      cardImages.forEach(function (img) {
        img.classList.remove("active");
      });
      const img = card.querySelector(".card-img");
      img.classList.add("active");
    });
  });
});
