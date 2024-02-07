const buttonSection9 = document.querySelector(".section-9_button");
const textSection9 = document.querySelector(".section-9_button-text");
const windowSection9 = document.querySelector(".section-9_window");
let switcher = 1;

let changeText = gsap.to(textSection9, {
    text: {
        value: "Close modal window",
        speed: 6,
    },
    paused: true,
    ease: "power1.out",
});

buttonSection9.addEventListener("click", () => {
    if (switcher) {
        changeText.play();
        switcher = 0;
        windowSection9.style.display = "flex";

    } else if (!switcher) {
        changeText.reverse();
        switcher = 1;
        windowSection9.style.display = "none";

    }
});