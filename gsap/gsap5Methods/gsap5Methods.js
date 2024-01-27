const playSection6 = document.getElementById("section-6-play");
const reverseSection6 = document.getElementById("section-6-reverse");
const circleSection6 = document.querySelectorAll(".section-6_circle");
const circlesWrapperSection6 = document.querySelector(".section-6_circles-wrapper");

let animationSection6 = gsap.to(circleSection6, {
    x: (i, el) => circlesWrapperSection6.offsetWidth - el.offsetLeft - el.offsetWidth,
    backgroundColor: "#ffffff",
    ease: "power3.out",
    paused: true,
    stagger: 0.2,
    duration: 3
});

playSection6.addEventListener("click", () => {
    animationSection6.timeScale(1).play();
})

reverseSection6.addEventListener("click", () => {
    animationSection6.timeScale(0.8).reverse();
})