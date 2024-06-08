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

// ===================================== RANGe ========================================//

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

// ==================================== ACCORDIAN =======================================//

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-txt-or-svg");
  let svg = items.querySelector(".accordian-svg");
  let accord_svg = document.querySelector(".acc-svg1");
  const head = items.querySelector(".accordian-h");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        let svg = other.querySelector(".accordian-svg");
        const head = other.querySelector(".accordian-h");

        paragraph.classList.add("d-none");
        svg.style.transform = "rotate(0deg)";
        head.style.color = "#A9A9A9";
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      svg.style.transform = "rotate(180deg)";
      accord_svg.style.transform = "rotate(0deg)";
      head.style.color = "white";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.style.transform = "rotate(0deg)";
      head.style.color = "#A9A9A9";

      // accord_svg.style.transform = "rotate(0deg)";
    }
  });
});

// ===================================== COPY_BTN ========================================//

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
