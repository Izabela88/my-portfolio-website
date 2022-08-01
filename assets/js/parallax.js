const sun = document.getElementById("sun");
const monster = document.getElementById("monster");
const text = document.getElementById("text");
const logo = document.getElementById("logo");
const snail = document.getElementById("snail");
const skillsSnail = document.getElementById("s-snail");

window.addEventListener("scroll", function () {
  var value = this.window.scrollY;

  sun.style.left = -value * 1 + "px";
  monster.style.left = -value * 0.5 + "px";
  text.style.top = -value * 1 + "px";
  logo.style.top = -value * 1 + "px";
  snail.style.bottom = -value * 0.5 + "px";
});
