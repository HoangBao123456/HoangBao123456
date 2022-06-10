const menuBtn = document.querySelector(".menu-btn");
const navigationn = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  navigationn.classList.toggle("change");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("change");
  });
  slides.forEach((slides) => {
    slides.classList.remove("change");
  });
  btns[manual].classList.add("change");
  slides[manual].classList.add("change");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
//************************Hoàng Gia Bảo**************** */
var mybutton = document.getElementById("Top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
