let slideToShow = 0;

const modalBtns = document.querySelectorAll(".gallery-modal-btn");

modalBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    const slideNumberToShow = button.getAttribute("data-index");

    slideToShow = Number(slideNumberToShow);

    console.log(slideNumberToShow);
  });
});

//Modal window start
MicroModal.init({
  onShow: function () {
    slider.go(slideToShow);
  },
});

//Slider library start

const sliderContainer = document.querySelector(".splide");

const slider = new Splide(sliderContainer).mount();
