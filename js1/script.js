// 1
// const NAME = prompt("Как тебя зовут?");

// alert('Привет,' + ' ' + NAME);

// 2
// const currentYear = 2020;

// const currentAge = prompt("Сколько вам лет?");

// alert(2020 - currentAge);

// 3
// const boxSide = prompt("Скольки см равна одна из сторон квадрат?");

// alert('Периметр квадрата:' + ' ' + boxSide * 4 + 'см');

// 4
// const radius = prompt("Чему равен радиус круга?");

// alert('Площадь круга равна:' + ' ' + 3.141592 * radius * radius);

// 5
// const distance = prompt("Чему равно расстояние?");

// const time = prompt("За сколько часов вы хотите доехать?");

// alert('Вам нужно двигаться с этой скоростью:' + ' ' + distance / time + 'км/ч');

// 6
// const exchangeValue = 0.92;

// const dollarsValue = prompt("Введите нужную сумму в долларах, чтобы конвертировать в евро");

// alert('Сумма в Евро:' + ' ' + dollarsValue * exchangeValue);

// 7
// const usbSize = prompt("Укажите объем флешки в ГБ");

// const mathResult = (usbSize / 0.82);

// alert('На вашу флешку поместиться следующее колличество файлов:' + ' ' + Math.floor(mathResult));

// 8
// const moneyAmount = prompt("Сколько у вас денег?");

// const chocPrice = prompt("Сколько стоит шоколадка?");


// alert('Вы получите:' + ' ' + Math.floor(moneyAmount / chocPrice) + ' ' + 'шоколадки(-ок)' + ' ' + 'и' + ' ' + (moneyAmount - (Math.floor(moneyAmount / chocPrice) * chocPrice)).toFixed(2)  + 'грн сдачи.');

// 9
// const enterNumb = prompt("Введите 3-х значное число");

// alert((enterNumb % 10) + '' +(Math.floor(enterNumb / 10)) % 10 + '' + Math.floor(enterNumb / 100));

// 10
const moneyAmount = prompt("Какую сумму вы хотите внести в банк?");

const monthQty = prompt("На сколько месяцев вы хотите положить данную сумму?");

alert('За' + ' ' + monthQty + ' ' + 'месяца(-ов) вы заработаете:' + ' ' + (moneyAmount / 100 * ((5 / 12) * monthQty)).toFixed(2) + 'грн');