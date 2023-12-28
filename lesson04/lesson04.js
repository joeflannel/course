let screenPrice = 10000;
let percentage = 10;
let fullPrice;

let titleProject = prompt('Введи название проекта');
let screensValue = prompt('Введи тип экрана');
let responsive = prompt('Нужен ли респонсивный дизайн?');

if (responsive == 'да' || responsive == 'Да' || responsive == 'true' || responsive == 'True') {
    responsive = true;
} else if (responsive == 'нет' || responsive == 'Нет' || responsive == 'не' || responsive == 'false' || responsive == 'False') {
    responsive = false;
}

let service1 = prompt("Какой нужен сервис?");
let service1Price = prompt("Сколько это будет стоить? (введи только цифру)");
let service2 = prompt("Какой еще нужен сервис?");
let service2Price = prompt("Сколько это будет стоить? (введи только цифру)");

fullPrice = screenPrice + +service1Price + +service2Price;

let servicePercentPrice = fullPrice - (fullPrice * (percentage / 100));
console.log("Цена с вычетом процентов: ", Math.round(servicePercentPrice));

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
