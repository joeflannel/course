const card = document.querySelector(".card");
const heading = document.querySelector(".card-heading");
const text = document.querySelector(".card-text");

card.addEventListener("mouseover", () => {
    card.classList.add("is-card-hover");
    heading.style.color = "#AAA";
    text.style.color = "#AAA";
});

card.addEventListener("mouseout", () => {
    card.classList.remove("is-card-hover");
    heading.style.color = "#FFF";
    text.style.color = "#FFF";
});