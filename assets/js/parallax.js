let sun = document.getElementById("sun");
let monster = document.getElementById("monster");
let text = document.getElementById("text");
let logo = document.getElementById("logo");
let snail = document.getElementById("snail");

window.addEventListener("scroll", function () {
  var value = this.window.scrollY;

  sun.style.left = -value * 1 + "px";
  monster.style.left = -value * 0.5 + "px";
  text.style.top = -value * 1 + "px";
  logo.style.top = -value * 1 + "px";
  snail.style.bottom = -value * 0.5 + "px";
});
