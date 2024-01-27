const buttonHero = document.getElementById("play");

//создаю новый SplitText на данный параграф
let splitHero = new SplitText("#paragraphHero", { type: "words" });

//создаю саму анимацию
let splitAnimationHero = gsap.from(splitHero.words, {
    duration: .8,
    y: 30,
    autoAlpha: 0,
    stagger: 0.05,
    paused: true
});

let state = 0; //задаю маркер состояния

buttonHero.addEventListener("click", () => {
    // Проигрываю анимацию появления первый раз и при каждом нечетном нажатии кнопки
    if (!state) {
        splitAnimationHero.play();
        state = 1;
    }
    // Проигрываю анимацию исчезновения текста при втором нажатии и каждом четном нажатии кнопки
    else if (state) {
        splitAnimationHero.reverse();
        state = 0;
    }
})
