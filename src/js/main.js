import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".scroll-content div", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".scroll-content div",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    markers: false, // Passez à true pour le débogage
  },
});
