$('.carousel').carousel({
  interval: 2000
})

var toggle;
var wrapper;
var hamburger;
const main = document.querySelector("main");

function declare(){
    toggle = document.querySelector(".toggle-btn");
    wrapper = document.querySelector(".big-wrapper");
    hamburger = document.querySelector(".hamburger-menu");
}

declare();
let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = wrapper.cloneNode(true);

  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
      document.body.classList.remove("stop-scrolling");
    wrapper.remove();
    clone.classList.remove("copy");

    //resetting variables
    declare();
    events();
  });
}

function events() {
  toggle.addEventListener("click", toggleAnimation);
  hamburger.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
}

events();









