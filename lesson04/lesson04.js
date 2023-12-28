let screenPrice = 10000;
let percentage = 10;
let fullPrice;

let titleProject = prompt('Введи название проекта');
console.log(titleProject);
let screensValue = prompt('Введи тип экрана');
console.log(screensValue);
let responsive = prompt('Нужен ли респонсивный дизайн?');

if (responsive == 'да' || responsive == 'Да' || responsive == 'true' || responsive == 'True') {
    responsive = true;
    console.log(responsive);
} else if (responsive == 'нет' || responsive == 'Нет' || responsive == 'не' || responsive == 'false' || responsive == 'False') {
    responsive = false;
    console.log(responsive);
}

let service1 = prompt("Какой нужен сервис?");
console.log(service1);
let service1Price = +prompt("Сколько это будет стоить? (введи только цифру)");
console.log(service1Price);
let service2 = prompt("Какой ещё нужен сервис?");
console.log(service2);
let service2Price = +prompt("Сколько это будет стоить? (введи только цифру)");
console.log(service2Price);

fullPrice = screenPrice + service1Price + service2Price;

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
