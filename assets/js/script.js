$(".slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: "linear",
});

// ===================================== navbar ========================================//

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
  let container = document.querySelector(".my-container");

  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    index.classList.add("z-3");
    container.classList.add("position-u");
  } else {
    contain.style.position = "unset";
  }
});

// accrodian

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-txt-or-svg");
  let svg = items.querySelector(".accordian-svg");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        let svg = other.querySelector(".accordian-svg");
        paragraph.classList.add("d-none");
        svg.style.transform = "rotate(180deg)";
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      svg.style.transform = "rotate(0deg)";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.style.transform = "rotate(180deg)";
    }
  });
});

var slider = document.getElementById("range-slider__range");
var output = document.getElementById("range-slider__value");

output.innerHTML = slider.value;

// This function input current value in span and add progress colour in range
slider.oninput = function () {
  output.innerHTML = this.value;

  var value = ((this.value - this.min) / (this.max - this.min)) * 100;

  this.style.background =
    "linear-gradient(to right, #FEF538 0%, #FEF538 " +
    value +
    "%, #d7dcdf " +
    value +
    "%, #d7dcdf 100%)";
};

// function startTimer(duration, display) {
//   var timer = duration,
//     days,
//     hours,
//     minutes,
//     seconds;

//   setInterval(function () {
//     days = Math.floor(timer / (24 * 60 * 60)); // Calculate days
//     hours = Math.floor((timer % (24 * 60 * 60)) / 3600); // Calculate hours
//     minutes = Math.floor((timer % 3600) / 60); // Calculate minutes
//     seconds = timer % 60; // Calculate seconds

//     days = days < 10 ? "0" + days : days;
//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var startTime = 12 * 60 * 60 + 46 * 60 + 19; // 12 hours, 46 minutes, 19 seconds
//   var display = document.getElementById("timer");
//   startTimer(startTime, display);
// };

  document.querySelector(".copy-btn").addEventListener("click", function () {
    var copyText = document.querySelector(".copy-txt").textContent;
    var tempInput = document.createElement("input");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Text copied to clipboard: " + copyText);
  });