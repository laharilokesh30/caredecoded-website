function showSkin() {
  document.getElementById("skinConcerns").classList.add("visible");
  document.getElementById("hairConcerns").classList.remove("visible");

  document.querySelectorAll(".toggle-btn")[0].classList.add("active");
  document.querySelectorAll(".toggle-btn")[1].classList.remove("active");
}

function showHair() {
  document.getElementById("hairConcerns").classList.add("visible");
  document.getElementById("skinConcerns").classList.remove("visible");

  document.querySelectorAll(".toggle-btn")[1].classList.add("active");
  document.querySelectorAll(".toggle-btn")[0].classList.remove("active");
}
