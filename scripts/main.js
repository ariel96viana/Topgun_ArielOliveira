document.addEventListener("DOMContentLoaded", function () {
  const heroHeight = document.querySelector(".hero").clientHeight;
  const favBtn = document.querySelector(".fabBtn");
  const pilotSection = document.querySelector(".container-pilots");
  const pilotCarousel = document.querySelector(".pilots-carousel");
  const heroWatchBtn = document.querySelector(".watch");
  const heroCloseBtn = document.querySelector(".close");
  const videoContainer = document.querySelector(".hero__content__video");
  const iframe = document.getElementsByTagName("iframe")[0];

  window.addEventListener("scroll", function () {
    const positionY = window.scrollY;
    if (heroHeight * 0.5 < positionY) {
      favBtn.classList.remove("hidden");
    } else {
      favBtn.classList.add("hidden");
    }
  });

  if (innerHeight < 850 || innerWidth < 850) {
    pilotCarousel.classList.remove("d-none");
    pilotSection.classList.add("d-none");
    console.log("olá");
    console.log(innerHeight, innerWidth);
  } else {
    pilotCarousel.classList.add("d-none");
    pilotSection.classList.remove("d-none");
    console.log("alô");
  }

  window.addEventListener("resize", function () {
    if (innerHeight < 850 || innerWidth < 850) {
      pilotCarousel.classList.remove("d-none");
      pilotSection.classList.add("d-none");
      console.log("olá");
      console.log(innerHeight, innerWidth);
    } else {
      pilotCarousel.classList.add("d-none");
      pilotSection.classList.remove("d-none");
      console.log("alô");
    }
  });

  heroWatchBtn.addEventListener("click", function () {
    videoContainer.classList.remove("d-none");
    heroWatchBtn.classList.add("d-none");
    heroCloseBtn.classList.remove("d-none");
  });

  heroCloseBtn.addEventListener("click", function () {
    videoContainer.classList.add("d-none");
    heroWatchBtn.classList.remove("d-none");
    heroCloseBtn.classList.add("d-none");
    iframe.src = "https://www.youtube.com/embed/qSqVVswa420";
  });
});
