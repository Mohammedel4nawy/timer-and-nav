// start navbar ----------------------------------------------------------------------------------------

window.addEventListener("scroll", () => {
  let scrolly = window.scrollY;
  if (scrolly > 500) {
    document.querySelector(".navbar").classList.remove("bg-light");

    document.querySelector(".navbar").classList.add("bg-danger");
  } else {
    document.querySelector(".navbar").classList.remove("bg-danger");
    document.querySelector(".navbar").classList.add("bg-light");
  }
  console.log(scrolly);
});

// end nav bar ----------------------------------------------------------------------------------------

// start timer ----------------------------------------------------------------------------------------

let a = setInterval(null, 1000);
function Datee() {
  let da = new Date();
  document.querySelector(".date").innerHTML = da.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

x = true;

function getDate() {
  if (x == true) {
    a = setInterval(Datee, 1000);
    x = false;
    document.querySelector(".date").classList.add("bg-black");
  } else if (x == false) {
    clearInterval(a);
    x = true;
  }
}

document.querySelector(".button").addEventListener("click", getDate);

// end timer ----------------------------------------------------------------------------------------
