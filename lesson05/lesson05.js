
//функции
let getAllServicePrices = function (price1, price2) {
    let res = price1 + price2;
    console.log("Цена на сервисы: ", res);
    return res
}

function getFullPrice(buildingPrice, allServicePrices) {
    let res = buildingPrice + allServicePrices;
    console.log("Цена за разработку: ", res);
    return res
}

function getTitle(titleProject) {
    let str = titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase();
    console.log("Название проекта:", str);
}

function getServicePercentPrices(fullPrice, percentage) {
    let res = Math.round(fullPrice - (fullPrice * (percentage / 100)));
    console.log("Цена с вычетом процентов: ", res);
    return res
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

//переменные
let screenPrice = 10000;
let percentage = 10;

//ввод названия проекта
let titleProject = prompt('Введи название проекта');
getTitle(titleProject);

//ввод тип экрана
let screensValue = prompt('Введи тип экрана');
showTypeOf(screensValue);

//нужен ли респонсивный дизайн
let responsive = prompt('Нужен ли респонсивный дизайн?');
if (responsive == 'да' || responsive == 'Да' || responsive == 'true' || responsive == 'True') {
    responsive = true;
    console.log("Респонсивность: ", responsive.toString());
} else if (responsive == 'нет' || responsive == 'Нет' || responsive == 'не' || responsive == 'false' || responsive == 'False') {
    responsive = false;
    console.log("Респонсивность: ", responsive.toString());
}

//ввод сервисов и цен на них
let service1 = prompt("Какой нужен сервис?");
console.log(service1);
let service1Price = +prompt("Сколько это будет стоить? (введи только цифру)");
let service2 = prompt("Какой ещё нужен сервис?");
console.log(service2);
let service2Price = +prompt("Сколько это будет стоить? (введи только цифру)");

//цена на все сервисы
let allServicePrices = getAllServicePrices(service1Price, service2Price);

//цена без вычета процентов
let fullPrice = getFullPrice(screenPrice, allServicePrices);

//цена с вычетом процентов
let servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
