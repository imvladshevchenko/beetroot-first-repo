// 1

// const age = +prompt("Каков ваш возраст?");

// if (age > 0 && age <= 12) {
//   alert('Вы ребенок');
// }
// else if (age > 12 && age <= 18) {
//   alert('Вы подросток');
// }
// else if (age > 18 && age <= 60) {
//   alert('Вы взрослый');
// }
// else {
//   alert('Вы пенсионер');
// }

// 2

// const number = +prompt('Укажите число от 0 до 9, чтобы вывести спецсимвол, который расположен на этой клавише');

// switch (number) {
//   case 1: 
//     alert('!');
//     break;
//   case 2: 
//     alert('@');
//     break;
//   case 3: 
//     alert('#');
//     break;
//   case 4: 
//     alert('$');
//     break;
//   case 5: 
//     alert('%');
//     break;
//   case 6: 
//     alert('^');
//     break;
//   case 7: 
//     alert('&');
//     break;
//   case 8: 
//     alert('*');
//     break;
//   case 9: 
//     alert('(');
//     break;
//   case 0: 
//     alert(')');
//     break;
//   default:
//     alert( "Нет таких значений" )
// }

// 3

// const threeNumbers = +prompt('Укажите трёхзначное число, чтобы проверить, есть ли в нём повторяющиеся цифры');

// const firstNumber = Math.floor(threeNumbers / 100);
// const secondNumber = Math.floor(threeNumbers / 10) % 10;
// const thirdNumber = (threeNumbers % 10);

// if (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
//   alert('У вас есть повторяющиеся числа');
// }
// else {
//   alert('У вас нет повторяющихся чисел');
// }

// 4

// const currentYear = +prompt('Впишите год, чтобы узнать високосный он или нет');

// if (Number.isInteger(currentYear / 400) || Number.isInteger(currentYear / 4) && (currentYear % 100 != 0)) {
//   alert('Этот год високосный');
// } 
// else {
//   alert('Этот год невисокосный');
// }

// 5

// const fiveNumbers = +prompt('Введите пятиразрядное число и мы проверим является ли оно палиндромом');

// const numberFirst = Math.floor(fiveNumbers / 10000);
// const numberSecond = Math.floor(fiveNumbers / 1000) % 10;
// const numberThird = Math.floor(fiveNumbers / 100) % 10;
// const numberFourth = Math.floor(fiveNumbers / 10) % 10;
// const numberFifth = Math.floor(fiveNumbers % 10);

// if (numberFirst == numberFifth && numberSecond == numberFourth) {
//   alert('Это число является палиндромом');
// }
// else {
//   alert('Это число не является палиндромом');
// }

// 6

// const dollarsValue = +prompt('Укажите сумму для конвертации (в долларах)');
// const currency = +prompt('Укажите одну из цифр, которая соответствует нужной вам валюты: 1 - EUR, 2 - UAH, 3 - AZN');

// switch (currency) {
//   case 1: 
//     alert('Сумма в евро:' + ' ' + (dollarsValue * 0.92).toFixed(2));
//     break;
//   case 2: 
//     alert('Сумма в гривне:' + ' ' + (dollarsValue * 26.76).toFixed(2));
//     break;
//   case 3: 
//     alert('Сумма в Азербайджанских манатах:' + ' ' + (dollarsValue * 1.70).toFixed(2));
//     break;
//   default:
//     alert( "Нет таких значений" )
// }

// 7

// const purchaseAmount = +prompt('Укажите сумму покупки, чтобы рассчитать скидку');

// if (purchaseAmount > 200 && purchaseAmount <= 300) {
//   const sale = (purchaseAmount - ((purchaseAmount * 3) / 100))
//   alert(`Ваша сумма покупки, с учетом скидки в 3%, составит: ${sale}`);
// }
// else if (purchaseAmount > 300 && purchaseAmount <= 500) {
//   const sale = (purchaseAmount - ((purchaseAmount * 5) / 100))
//   alert(`Ваша сумма покупки, с учетом скидки в 5%, составит: ${sale}`);
// }
// else if (purchaseAmount > 500) {
//   const sale = (purchaseAmount - ((purchaseAmount * 7) / 100))
//   alert(`Ваша сумма покупки, с учетом скидки в 7%, составит: ${sale}`);
// }
// else {
//   alert(`На это цену скидка не предусмотрена и сумма покупки составит: ${purchaseAmount}`);
// }

// 8 

// const circleLength = +prompt('Введите длину окружности, чтобы узнать поместиться ли эта окружность в периметр квадрата');
// const squarePerimeter = +prompt('Введите периметр квадрата, чтобы узнать поместиться ли в него окружность введенная ранее');

// const circleDiameter = (circleLength / 3.1415).toFixed(2);
// const squareSide = (squarePerimeter / 4).toFixed(2);

// if (circleDiameter > squareSide) {
//   alert('Эта окружность не поместиться внутрь данного квадрата');
// }
// else {
//   alert('Эта окружность поместиться внутри данного квадарата');
// }

// 9

// const firstQuestion = +prompt('По какому параметру футболиста по итогам соревнований называют лучшим бомбардиром? Варианты ответа: 1 - по колличеству отданых пасов, 2 - по колличеству забитых голов, 3 - по колличеству заработанных штрафных');
// const secondQuestion = +prompt('Как называется гол, забитый игроком в ворота своей команды? Варианты ответа: 1 - автогол, 2 - самогол, 3 - никак');
// const thirdQuestion = +prompt('Сколько очков получает команда за победу, а сколько за ничью в групповых этапах футбольных чемпионатов? Вараинты ответа: 1 - 1 и 3, 2 - 2 и 1, 3 - 3 и 1');

// let pointsNumber = 0;

// if (firstQuestion == 2) {
//   pointsNumber = 2+pointsNumber;
// }
// if (secondQuestion == 1) {
//   pointsNumber = 2+pointsNumber;
// }
// if (thirdQuestion == 3) {
//   pointsNumber = 2+pointsNumber;
// }

// alert(`Вы набрали ${pointsNumber} балла(-ов)`);

// 10

let day = +prompt('Укажите день');
let month = +prompt('Укажите месяц');
let year = +prompt('Укажите год');
let leapYear = true;

if (Number.isInteger(year / 400) || Number.isInteger(year / 4) && (year % 100 != 0)) {
  leapYear = true;
}
else {
  leapYear = false;
}

if (day == 28 && month == 02 && leapYear == true ) {
  alert('Следующая дата: ' + ' ' + (day + 1) + '.' + month + '.' + year);
}
else if (day == 28 && month == 2 && leapYear == false) {
  alert('Следующая дата: ' + ' ' + 1 + '.' + (month + 1) + '.' + year);
}
else if (day == 29 && month == 2) {
  alert('Следующая дата: ' + ' ' + 1 + '.' + (month + 1) + '.' + year);
}
else if (day == 30 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 11)) {
  alert('Следующая дата: ' + ' ' + 1 + '.' + (month + 1) + '.' + year);
}
else if (day == 31 && (month == 1 || month == 4 || month == 6 || month == 9 || month == 10)) {
  alert('Следующая дата: ' + ' ' + 1 + '.' + (month + 1) + '.' + year);
}
else if (day == 31 && month == 12) {
  alert('Следующая дата: ' + ' ' + 1 + '.' + 1 + '.' + (year + 1));
}
else {
  alert('Следующая дата: ' + ' ' + (day + 1) + '.' + month + '.' + year);
}
