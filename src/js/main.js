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
  .to("#element-7", {
    top: 0,
  })
  .to("#element-7 .img", {
    scale: 0.8,
  })
  .to("#element-8", {
    top: 0,
  })
  .to("#element-8 .img", {
    scale: 0.8,
  })
  .to("#element-9", {
    top: 0,
  })
  .to("#element-9 .img", {
    scale: 0.8,
  })
  .to("#element-11", {
    top: 0,
  })
  .to("#element-11 .img", {
    scale: 0.8,
  })
  .to("#element-10contact", {
    top: 0,
  })
  .to("#element-10contact .img", {
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

// page galerie ci dessous

/* Parallax doux sans lib — prêt à coller */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const items = Array.from(document.querySelectorAll(".item"));
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const rect = e.target.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          e.target.dataset.anchor = rect.top + scrollTop;
        }
      });
    },
    { rootMargin: "200px 0px 200px 0px" }
  );
  items.forEach((el) => io.observe(el));

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      for (const el of items) {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.12");
        const anchor = parseFloat(el.dataset.anchor || 0);
        let dy = (y - anchor) * speed;
        if (dy > 60) dy = 60;
        if (dy < -60) dy = -60;
        el.style.setProperty("--float", dy + "px"); // ← on n’écrase pas transform
      }
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      items.forEach((el) => el.removeAttribute("data-anchor"));
    },
    { passive: true }
  );
  onScroll();
})();
