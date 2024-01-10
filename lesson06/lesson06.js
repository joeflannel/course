//переменные
let screenPrice = 10000;
let percentage = 10;
let service;
let serviceSecond;

//функции
function checkisNumber(thing) {
    return !isNaN(parseFloat(thing)) && isFinite(thing)
}

let getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i <= 1; i++) {
        if (i === 0) {
            service = prompt("Какая услуга нужна?");
        } else if (i === 1) {
            serviceSecond = prompt("Какая еще услуга нужна?");
        }

        do {
            textFromPrompt = prompt('Сколько это будет стоить? (Введите только число)');
        } while (!checkisNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null);

        sum += Number(textFromPrompt);
    }

    console.log("Стоимость всех услуг: ", sum);
    return sum;
}

function getFullPrice(buildingPrice, allServicePrices) {
    let res = buildingPrice + allServicePrices;
    console.log("Цена за разработку: ", res);
    return res;
}

function getTitle(titleProject) {
    let str = titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase();
    console.log("Название проекта:", str);
}

function getServicePercentPrices(fullPrice, percentage) {
    let res = Math.round(fullPrice - (fullPrice * (percentage / 100)));
    console.log("Цена с вычетом процентов: ", res);
    return res;
}

function showTypeOf(screensValue) {
    console.log("Тип экрана: ", screensValue);
}

function getRollbackMessage(fullPrice) {
    if (fullPrice > 50000) {
        console.log("сделаем скидку в 10%");
    } else if (fullPrice == 50000) {
        console.log("сделаем скидку в 10%");
    } else if ((fullPrice > 20000) && (fullPrice < 50000)) {
        console.log("сделаем скидку в 5%");
    } else if (fullPrice == 20000) {
        console.log("сделаем скидку в 5%");
    } else if ((fullPrice > 0) && (fullPrice < 20000)) {
        console.log("скидка не предусмотрена");
    } else {
        console.log("Ошибка: цена не может быть отрицательной!");
    }
}

//ввод названия проекта
let titleProject = prompt('Введи название проекта');
getTitle(titleProject);

//ввод тип экрана
let screensValue = prompt('Введи тип экрана');
showTypeOf(screensValue);

//нужен ли респонсивный дизайн
let responsive = prompt('Нужен ли респонсивный дизайн? (Введите "Да" или "Нет"');
if (responsive == 'Да') {
    responsive = true;
    console.log("Респонсивный дизайн: ", responsive.toString());
} else if (responsive == 'Нет') {
    responsive = false;
    console.log("Респонсивный дизайн: ", responsive.toString());
}

//цена на все сервисы
let allServicePrices = getAllServicePrices();

//цена без вычета процентов
let fullPrice = getFullPrice(screenPrice, allServicePrices);

//цена с вычетом процентов
let servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
