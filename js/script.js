$(document).ready(() => {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#go-top").fadeIn("fast");
    } else {
      $("#go-top").fadeOut("fast");
    }
  });
  $("#go-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});

let showImages = document.getElementsByClassName("show");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let slideIndex = 0;
function showSlide(index) {
  if (index < 0) slideIndex = showImages.length - 1;
  else if (index > showImages.length - 1) slideIndex = 0;

  const offset = -slideIndex * 100;
  for (let i = 0; i < showImages.length; i++) {
    showImages[i].style.transform = `translateX(${offset}%)`;
  }
}
let ord = document.getElementsByClassName("ordinal-number")[0];
// console.log(ord);
for (i = 0; i < showImages.length; i++) {
  let element = document.createElement("div");
  element.classList.add("mark");
  ord.appendChild(element);
}

let mark = document.getElementsByClassName("mark");
function changeMark(slideIndex) {
  for (let i = 0; i < showImages.length; i++) {
    if (i == slideIndex) {
      mark[i].style.backgroundColor = "#ec7e33";
    } else {
      mark[i].style.backgroundColor = "#ccc";
    }
  }
}
prev?.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
  changeMark(slideIndex);
});
next?.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
  changeMark(slideIndex);
});

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
  changeMark(slideIndex);
}, 3500);
