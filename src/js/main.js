import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      pin: true,
    },
  })
  .to("#element-1 .img", {
    scale: 0.8,
  })
  .to("#element-2", {
    top: 0,
  })
  .to("#element-2 .img", {
    scale: 0.8,
  })
  .to("#element-3", {
    top: 0,
  })
  .to("#element-3 .img", {
    scale: 0.8,
  })
  .to("#element-4", {
    top: 0,
  })
  .to("#element-4 .img", {
    scale: 0.8,
  })
  .to("#element-5", {
    top: 0,
  })
  .to("#element-5 .img", {
    scale: 0.8,
  })
  .to("#element-6", {
    top: 0,
  })
  .to("#element-6 .img", {
    scale: 0.8,
  })
  .to("#element-10", {
    top: 0,
  })
  .to("#element-10 .img", {
    scale: 0.8,
  });

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
