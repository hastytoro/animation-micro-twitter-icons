// GLOBAL SELECTORS
let home = document.querySelector(".home");
let notification = document.querySelector(".notification");
let message = document.querySelector(".message");
let zoomBtn = document.querySelector(".zoom-btn");

// ! SETUP ANIMATION DEFAULTS:
gsap.set(".feather", { scale: 0, transformOrigin: "center" });
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });
gsap.set(".flap", { transformOrigin: "top" });

// EVENT HANDLERS
home.addEventListener("click", () => {
  let homeTL = gsap.timeline();
  homeTL.fromTo(
    ".home-svg",
    { scale: 1 },
    { scale: 0.9, yoyo: true, duration: 0.2, repeat: 1 }
  );
  homeTL.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1.5, stagger: 0.2 },
    "<100%"
  );
  homeTL.fromTo(".right-feather", { x: 0 }, { x: 5 }, "<");
  homeTL.fromTo(".feather", { opacity: 1 }, { opacity: 0, delay: 1 }, "<100%");
});

notification.addEventListener("click", () => {
  let bellTL = gsap.timeline({
    defaults: { ease: "elastic.out(5, 0.2)" },
  });
  bellTL.fromTo(".bell", { rotation: -5 }, { rotation: 0, duration: 2 });
  bellTL.fromTo(
    ".ringer",
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 1 },
    "<"
  );
  bellTL.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.4, opacity: 0, duration: 1, ease: "power2.out" },
    "<"
  );
});

message.addEventListener("click", () => {
  let messageTL = gsap.timeline({
    defaults: { duration: 0.35, ease: "power2.easeOut" },
  });
  messageTL.fromTo(".message-svg", { scale: 1 }, { scale: 0.9 });
  messageTL.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  messageTL.fromTo(".message-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  messageTL.fromTo(
    ".note",
    { y: 0, opacity: 1 },
    { y: -60, opacity: 0, duration: 1 }
  );
  messageTL.to(".flap", { scale: 1 }, "<50%");
});

zoomBtn.addEventListener("click", () => {
  let zoomTL = gsap.timeline({
    defaults: { duration: 2, ease: "elastic.out(2, 0.2)" },
  });
  if (zoomBtn.children[0].className === "fa-solid fa-magnifying-glass-plus") {
    zoomTL.fromTo(".container", { scale: 1 }, { scale: 1.5 });
    zoomTL.fromTo(
      ".zoom-btn",
      { background: "transparent" },
      { background: "var(--background)" },
      "<"
    );
    zoomBtn.children[0].className = "fa-solid fa-magnifying-glass-minus";
  } else {
    zoomTL.fromTo(".container", { scale: 1.5 }, { scale: 1 });
    zoomTL.fromTo(
      ".zoom-btn",
      { background: "var(--background)" },
      { background: "transparent" },
      "<"
    );
    zoomBtn.children[0].className = "fa-solid fa-magnifying-glass-plus";
  }
});
