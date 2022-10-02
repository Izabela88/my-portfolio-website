const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const firstVisit = localStorage.getItem("visited");

function loadAnimation() {
  tl.to(".intro-img", { y: "0%", duration: 2 });
  tl.to(".text", { y: "0%", duration: 2 }, "-=0.75");
  tl.to(
    ".intro",
    {
      y: "-100%",
      duration: 2.5,
      delay: 2,
      opacity: 0,
    },
    "-=1"
  );
  tl.fromTo(
    "#menuTogglerLabel",
    { opacity: 0 },
    { opacity: 1, duration: 0.45, delay: 0.1 },
    "-=0.5"
  );

  tl.fromTo(
    ".hero-img-two",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, delay: 0.11 }
  );

  tl.fromTo(
    ".icon",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, delay: 0.12 }
  );
  tl.fromTo(
    ".hero-img",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, delay: 0.13 }
  );
  tl.fromTo(
    ".soc-link",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, stagger: 0.14 }
  );

  tl.fromTo(
    ".logo",
    { opacity: 0 },
    { opacity: 1, duration: 0.35, delay: 0.15 }
  );
  tl.fromTo(
    ".main-paragraph-one",
    { opacity: 0 },
    { opacity: 1, duration: 0.75, delay: 0.4 }
  );
  tl.fromTo(
    ".main-paragraph-two",
    { opacity: 0 },
    { opacity: 1, duration: 0.75, delay: 0.42 }
  );
  tl.fromTo(
    ".link-one",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, delay: 0.43 }
  );
  tl.fromTo(
    ".link-two",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, delay: 0.44 }
  );
}

function removeLoader() {
  let intro = document.querySelector(".intro");
  intro.style.display = "none";
}

window.addEventListener("load", () => {
  let session = sessionStorage.getItem("register");
  sessionStorage.setItem("register", 1);

  if (session == null) {
    loadAnimation();
  } else {
    removeLoader();
  }
});
