let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let index = currentSlide + 1;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

function prevSlide() {
  let index = currentSlide - 1;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
}

function goToSlide(index) {
  showSlide(index);
}
