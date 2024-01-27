const tabLinks = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".content-tab");
const linkNumbers = document.querySelectorAll(".link-number");

tabLinks.forEach((link, index) => {
    //предварительно удаляю все активные классы с кнопок
    link.classList.remove("is-active-tab");

    link.addEventListener("click", () => {
        //удаляю все активные классы с кнопок
        tabLinks.forEach(item => {
            item.classList.remove("is-active-tab");
        })
        //добавляю активный класс на кликнутую кнопку
        tabLinks[index].classList.add("is-active-tab");

        //удаляю все активные классы с табов
        tabContent.forEach(tab => {
            tab.classList.remove("is-active");
        })
        //добавляю активный класс на соответствующий таб
        tabContent[index].classList.add("is-active");
    })
})

linkNumbers.forEach((item, index) => {
    item.textContent = index + 1;
})