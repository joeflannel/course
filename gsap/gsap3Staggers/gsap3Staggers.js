gsap.to(".section-4_square", {
    scrollTrigger: {
        trigger: ".section.is-4",
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=200%',
        //markers: true
    },
    backgroundColor: '#ffffff',
    stagger: 0.2,
});