'use strict'

const openButton = document.querySelector(".cta");
const wrapper = document.querySelector(".wrapper");
const popUp = document.querySelector(".pop-up");

openButton.addEventListener("click", function () {
    wrapper.style.display = "block";
})

wrapper.addEventListener("click", function (item) {
    if (item.target.closest(".close-button")) {
        wrapper.style.display = "none";
    } else if (item.target.closest(".overlay")) {
        wrapper.style.display = "none";
    }
})