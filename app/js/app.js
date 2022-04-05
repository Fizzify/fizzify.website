new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  licenseKey: 'zhFWUVA@k0'
});

$("document").ready(function () {
  var typed = new Typed(".typing", {
    strings: ["YouTuber", "Web Developer", "Graphic Designer", "Freelancer", "Rubik's cube enthusiast", "Music enjoyer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

VANTA.NET({
  el: "#vanta-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3dd6d0,
  backgroundColor: 0x181818,
});

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".container", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger2",
  {
    opacity: 0,
    x: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);

tl.from(
  ".vanta-canvas",
  {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.75"
);

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
});
