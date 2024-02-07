// Section 1
//text appearing
const heroHeading = document.getElementById("hero-heading");
const heroParagraph = document.getElementById("hero-paragraph");

let timelineHero = gsap.timeline();

timelineHero
    .to(heroHeading, { text: { value: "animation gsap Greeeen sock", speed: 2 }, })
    .to(heroParagraph, { text: { value: "Animate with flawless, convenient and just cool library. Try it out now and build your own smooth and captivating animation.", speed: 6 }, }, ">");

//arrow moving
const heroArrow = document.getElementById("hero-arrow");

let timelineHeroArrow = gsap.timeline({ repeat: -1 });

timelineHeroArrow
    .to(heroArrow, { y: '1rem', duration: 1.2, ease: "sine.out", })
    .to(heroArrow, { y: '0rem', duration: 1.2, ease: "sine.out", }, ">");

//arrow dragging
const draggableContainer = document.getElementById("draggable");

Draggable.create(heroArrow, {
    bounds: draggableContainer,
    onPress: function () {
        timelineHeroArrow.pause();
        gsap.to(heroArrow, { scale: 1.2 });
    },
    onRelease: function () {
        gsap.to(heroArrow, { scale: 1 });
    },
});


const optionsSection = document.getElementById("options");

heroArrow.addEventListener('click', () => {
    gsap.to(window, { duration: .8, scrollTo: optionsSection });
})

//Section 2
const card1 = document.getElementById("options-card-1");
const card2 = document.getElementById("options-card-2");
const card3 = document.getElementById("options-card-3");
const textAnimationOptions = document.getElementById("options-text-animation");

let timelineOptions = gsap.timeline({
    scrollTrigger: {
        trigger: optionsSection,
        start: 'top top',
        end: '+=700%',
        pin: true,
        scrub: true
    }
})

timelineOptions
    .fromTo(card1, { x: "100vw" }, { x: "-100vw" })
    .to(textAnimationOptions, { text: "Coool Text Animations", duration: 0.08 }, "<20%")
    .fromTo(card2, { y: "100vh" }, { y: "-100vh" }, "+=33%")
    .fromTo(card3, { x: "70vw", y: "70vh", rotation: 720 }, { x: "-70vw", y: "-70vh", rotation: 0 }, "+=66%");

//Section 3
const methodsButton = document.getElementById("methods-button");
const digit1 = document.getElementById("digit-1");
const digit2 = document.getElementById("digit-2");
const digit3 = document.getElementById("digit-3");
const digit4 = document.getElementById("digit-4");
let switcher = 1;

let methodsAnimation = gsap.timeline({ paused: true });

methodsAnimation
    .from(digit1, { x: "-100vw", y: "100vh", rotation: -360, duration: 1 })
    .from(digit2, { x: "100vw", y: "100vh", rotation: 180, duration: 1.4 }, "<")
    .from(digit3, { x: "-20vw", y: "-100vh", rotation: -560, duration: 0.7 }, "<")
    .from(digit4, { x: "20vw", y: "-100vh", rotation: 560, duration: 0.8 }, "<");

methodsButton.addEventListener("click", () => {
    if (switcher) {
        methodsAnimation.play();
        switcher = 0;
    } else {
        methodsAnimation.reverse();
        switcher = 1;
    }
});