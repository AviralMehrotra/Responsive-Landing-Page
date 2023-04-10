var toggle;
var wrapper;
var hamburger;
var i=1;

function declare() {
  toggle = document.querySelector(".toggle-btn");
  wrapper = document.querySelector(".big-wrapper");
  hamburger = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

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

var images = ["assets/brown-and-white.png", "assets/cemo.png", "assets/Untitled-1.png", "assets/whitey.png"];


function slideshow(){
  var carouselImg = document.getElementById("carousel");
  carouselImg.src = images[i];
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
}

window.onload = setInterval(slideshow, 3000);






