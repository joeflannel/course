const buttonSection7 = document.querySelectorAll(".section-7_button");

buttonSection7.forEach((link, index) => {
    link.addEventListener('click', () => {
        gsap.to(window, { duration: .8, scrollTo: { y: "#lesson0" + (index + 1) }, ease: "power2" });
    })
})