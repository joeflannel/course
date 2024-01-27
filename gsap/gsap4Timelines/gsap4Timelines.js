const square1 = document.querySelector(".section-5_square-1");
const square2 = document.querySelectorAll(".section-5_square-2");
const square3 = document.querySelector(".section-5_square-3");

let timelineSection5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section.is-5",
        scrub: true,
        pin: true,
        start: 'top top',
        end: "+=400%"
    }
});

timelineSection5
    .to(square1, { autoAlpha: 0, rotation: 720, backgroundColor: "#ffca0a" })
    .fromTo(square2, { autoAlpha: 0, x: "-80vw", scale: 0, stagger: 0.2 }, { autoAlpha: 1, x: "0vw", scale: 1, stagger: 0.2 })
    .set(square3, { autoAlpha: 1, x: "40vw" }, 0)
    .to(square3, { autoAlpha: 0, y: "10vh", backgroundColor: "#ffffff" }, 0.2);
