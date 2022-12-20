// DEFINE IMAGE
const images = [
  "utils/background_00.jpg",
  "utils/background_01.jpg",
  "utils/background_02.jpg",
];

// APP STATE
let index = 0;
const max = images.length;

// GET THE DOM ELEMENTS
const containerElement = document.querySelector(".container");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");

// LISTEN FOR ARROW CLICK EVENTS
prevSlideButton.addEventListener("click", function () {
  index--;
  // CHANGE IMAGE INDEX
  setImageIndex();
  // CHANGE BACKGROUND IMAGE
  changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener("click", function () {
  index++;
  // CHANGE IMAGE INDEX
  setImageIndex();
  // CHANGE BACKGROUND IMAGE
  changeBackgroundImage(images[index], containerElement);
});

// UTILITY FUNCTION
function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}
