// start nav bar animation ------------------------------------------------
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    document.querySelector(".navbar").classList.add("bg-danger");
    document.querySelector(".navbar").classList.remove("bg-light");
  } else {
    document.querySelector(".navbar").classList.remove("bg-danger");
    document.querySelector(".navbar").classList.add("bg-light");
  }
});

// handling bullits -------------------------------------------------------------------------

let bullet = document.querySelectorAll(".bullet");

bullet.forEach((a) => {
  a.addEventListener("click", function () {
    bullet.forEach((b) => {
      b.classList.remove("active");
    });
    this.classList.add("active");
  });
});
//============================================================================================

// handling date and time ------------------------------------------------------------------
let setI = setInterval(null, 1000);

function showData() {
  let DateNow = new Date();
  bullet.forEach((e) => {
    if (e.classList.contains("active")) {
      if (e.getAttribute("data-type") == "sec") {
        document.querySelector(".date").innerHTML = DateNow.toLocaleTimeString(
          "en-US",
          {
            second: "2-digit",
            hour12: true,
          }
        );
        document.querySelector(".date").classList.add("bg-black");
      } else if (e.getAttribute("data-type") == "min") {
        document.querySelector(".date").innerHTML = DateNow.toLocaleTimeString(
          "en-US",
          {
            minute: "2-digit",
            hour12: true,
          }
        );
        document.querySelector(".date").classList.add("bg-black");
      } else if (e.getAttribute("data-type") == "hour") {
        document.querySelector(".date").innerHTML = DateNow.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            hour12: true,
          }
        );
        document.querySelector(".date").classList.add("bg-black");
      } else if (e.getAttribute("data-type") == "all") {
        document.querySelector(".date").innerHTML = DateNow.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }
        );
        document.querySelector(".date").classList.add("bg-black");
      }
    }
  });
}

//============================================================================================

// handling start and stop button ---------------------------------------------------------

let swicher = true;

function start() {
  if (swicher) {
    setI = setInterval(showData, 1000);
    swicher = false;
  } else if (swicher == false) {
    clearInterval(setI);
    swicher = true;
  }
}

document.querySelector(".button").addEventListener("click", function () {
  start();
});
//============================================================================================
