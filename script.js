const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carouselContainer = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;
const size = images[0].clientWidth;

function moveCarousel() {
  carouselContainer.style.transform = `translateX(${-size * counter}px)`;
}

nextButton.addEventListener("click", () => {
  if (counter < images.length - 1) {
    counter++;
    moveCarousel();
  }
});

prevButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    moveCarousel();
  }
});
