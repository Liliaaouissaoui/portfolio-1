import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: { trigger: "main", pin: true, scrub: true, end: "+=300vh" },
// });
// tl.to("#section-2", { y: "100%" });

// gsap.to("#img-test-1", {
//   scrollTrigger: {
//     trigger: "#img-test-1",
//     //start: "end center",
//     end: "+=300vh",
//     pin: true,
//   },
//   y: "0px",
// });

// gsap.to("#img-test-2", {
//   scrollTrigger: {
//     trigger: ".img-test-1",
//     start: "top center",
//     end: "+=300px",
//   },
//   y: "-730px",
// });
