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

// ===================================== TIMER ========================================//

function getTime() {
  // Get the values from each div
  const days = document.getElementById("days").textContent;
  const hours = document.getElementById("hours").textContent;
  const mins = document.getElementById("mins").textContent;
  const secs = document.getElementById("secs").textContent;

  // Combine the values into a single time format
  const combinedTime = `${days}:${hours}:${mins}:${secs}`;

  // Display the combined time in the "combined-time" div
  document.getElementById("combined-time").textContent = combinedTime;
}

// Function to start a countdown
function startCountdown() {
  const daysDiv = document.getElementById("days");
  const hoursDiv = document.getElementById("hours");
  const minsDiv = document.getElementById("mins");
  const secsDiv = document.getElementById("secs");

  // Function to update the countdown every second
  function updateCountdown() {
    let days = parseInt(daysDiv.textContent);
    let hours = parseInt(hoursDiv.textContent);
    let mins = parseInt(minsDiv.textContent);
    let secs = parseInt(secsDiv.textContent);

    // Decrease the seconds
    if (secs > 0) {
      secs -= 1;
    } else {
      secs = 59;
      if (mins > 0) {
        mins -= 1;
      } else {
        mins = 59;
        if (hours > 0) {
          hours -= 1;
        } else {
          hours = 23;
          if (days > 0) {
            days -= 1;
          } else {
            // Stop the countdown if time is up
            clearInterval(countdownInterval);
          }
        }
      }
    }

    // Update the HTML elements
    daysDiv.textContent = days.toString().padStart(2, "0");
    hoursDiv.textContent = hours.toString().padStart(2, "0");
    minsDiv.textContent = mins.toString().padStart(2, "0");
    secsDiv.textContent = secs.toString().padStart(2, "0");

    // Update the combined time display
    getTime();
  }

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initial call to display the combined time
getTime();

// Start the countdown
startCountdown();

// ===================================== SLIDER ========================================//

$(".my-slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: true,
  cssEase: "linear",
});

// ===================================== PRELOADER ========================================//

const preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.classList.add("d-none");
}, 3000);
