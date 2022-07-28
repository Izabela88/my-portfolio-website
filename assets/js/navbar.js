let menuToggler = document.getElementById("menuToggler");
let menuTogglerLabel = document.getElementById("menuTogglerLabel");
let sidebar = document.getElementById("sidebar");
let menuItems = document.getElementsByClassName("menu__link");
const closeButtons = document.querySelectorAll(".close-sidebar");
let open;

// open menu
open = true;
menuTogglerLabel.addEventListener("click", function () {
  if (menuToggler.checked || open) {
    open = false;
    menuTogglerLabel.setAttribute("aria-pressed", "false");
    sidebar.style.display = "none";
    console.log(open);
  } else {
    sidebar.style.display = "flex";
    menuTogglerLabel.setAttribute("aria-pressed", "true");
  }
});

function closeSidebar() {
  /* After pressing sidebar links and scrolling to a given section,
      the sidebar closes automatically*/
  for (const button of closeButtons) {
    open = false;

    let sidebar = document.querySelector("#sidebar");
    button.addEventListener("click", function (e) {
      sidebar.style.display = "none";
      menuToggler.checked = false;
    });
  }
}

closeSidebar();
