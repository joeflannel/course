const circle = document.querySelector(".circle");
let duration = 2;

gsap.to(circle,
    { duration: duration, rotation: 1080, x: '50rem', ease: "power2.out", opacity: 0 });