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

[...mark].forEach((item) =>
  item.addEventListener("click", () => {
    slideIndex = [...mark].indexOf(item);
    showSlide(slideIndex);
    changeMark(slideIndex);
  })
);

let overlay = document.getElementsByClassName("overlay");
let link_if = [
  "https://www.youtube.com/embed/2l8_FNIBWLM?si=UWGAok652fLAqH2x&amp",
  "https://www.youtube.com/embed/4Y1EZZnr9JI?si=PzIvGArVZoApLdrZ",
  "https://www.youtube.com/embed/JgUWVooKSrA?si=8pLB964SPUyNBdnP",
  "https://www.youtube.com/embed/HgDzVFMi238?si=j0brpIRnW-38rO38",
];
[...overlay].forEach((item) =>
  item.addEventListener("click", () => {
    let show = document.querySelector("#show-video");
    let iframe = document.querySelector("iframe");
    iframe.src = link_if[[...overlay].indexOf(item)];
    show.style.opacity = 1;
    show.style.visibility = "visible";
  })
);
let show = document.querySelector("#show-video");
show.addEventListener("click", () => {
  show.style.opacity = 0;
  show.style.visibility = "hidden";
  let iframe = document.querySelector("iframe");
  iframe.src = "";
});
