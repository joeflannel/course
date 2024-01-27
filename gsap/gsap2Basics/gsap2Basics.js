const shape1 = document.querySelector(".shape-1");
const shape2 = document.querySelector(".shape-2");
const contentWrapper3 = document.querySelector(".section-3_content-wrapper");
const text1 = document.querySelector(".text-color-green-blue.is-section-3");

gsap.to(shape1, {
    scrollTrigger: {
        trigger: contentWrapper3,
        scrub: true,
        start: 'top center',
        end: 'bottom center',
        //markers: true
    },
    xPercent: 900,
    rotation: 820,
    yPercent: 450,
    transformOrigin: 'center center',
});

gsap.to(shape2, {
    scrollTrigger: {
        trigger: shape2,
        scrub: true,
        start: 'top center',
        end: 'bottom center',
        //markers: true
    },
    backgroundColor: '#5234cc',
    borderRadius: 0,
});

gsap.to(text1, {
    scrollTrigger: {
        trigger: shape2,
        scrub: true,
        start: 'top center',
        end: 'bottom center',
        //markers: true
    },
    yPercent: -60,
    color: '#ffffff',
    opacity: 100
});