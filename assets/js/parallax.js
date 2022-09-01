const sun = document.getElementById("sun");
const monster = document.getElementById("monster");
const text = document.getElementById("text");
const logo = document.getElementById("logo");
const snail = document.getElementById("snail");
const skillsSnail = document.getElementById("s-snail");
const linkedin = document.getElementById("soc-linkedin");
const github = document.getElementById("soc-github");

window.addEventListener("scroll", function () {
  var value = this.window.scrollY;

  if (sun && monster && text && logo && snail && linkedin && github) {
    sun.style.left = -value * 1 + "px";
    monster.style.left = -value * 0.5 + "px";
    text.style.top = -value * 1 + "px";
    logo.style.top = -value * 1 + "px";
    snail.style.bottom = -value * 0.5 + "px";
    linkedin.style.top = -value * 1 + "px";
    github.style.top = -value * 1 + "px";
  }
});
