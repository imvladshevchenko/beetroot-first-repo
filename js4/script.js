// 1

// let firstNumber = prompt('Введите первое число');
// let secondNumber = prompt('Введите второе число');
// calcNumbers();

// function calcNumbers() {
//   if (firstNumber < secondNumber) {
//     alert('-1');
//   }
//   else if (firstNumber > secondNumber) {
//     alert('1');
//   }
//   else {
//     alert('0');
//   }
// }

// 2

// let factorial = prompt('Введите число, чтобы посчитать факториал');
// let answer = factorial;
// calcFactorial();

// function calcFactorial() {
//   while (factorial > 1) {
//     factorial--;
//     answer = answer * factorial;
//   }
//   alert(`Факториал равен: ${answer}`);
// }

// 3

// calcFunction();

// function calcFunction() {
//   let firstNumber = prompt('Введите первое число');
//   let secondNumber = prompt('Введите второе число');
//   let thirdNumber = prompt('Введите третье число');
//   alert(`${firstNumber}${secondNumber}${thirdNumber}`);
// }

// 4

// let sideA = prompt('Укажите первую сторону');
// let sideB = prompt('Укажите вторую сторону');
// calcArea();

// function calcArea() {
//   let answer = sideA * sideB;
//   if (sideB == 0) {
//     answer = sideA * 4;
//   }
//   else if (sideA == 0) {
//     answer = sideB * 4;
//   }
//   alert(`Площадь прямоугольника равна: ${answer}`);
// }

// 5

// let number = +prompt('Введите число');
// let sumNumber = 0;

// function calcNumber() {
//   for (let i = 1;number > i; i++ ) {
//     if (number % i == 0) {
//       sumNumber+= i;
//     }
//   }
//   if (sumNumber == number) {
//     return true;
//   } 
//   else { 
//     return false;
//   }
// }

// let result = calcNumber();

// if (result == true) {
//   alert(`Ваше число ${number} является совершенным`);
// }
// else {
//   alert(`Ваше число ${number} не является совершенным`);
// }

// 6

// let lowerNumber = +prompt('Введите нижний диапазон');
// let upperNumber = +prompt('Введите верхний диапазон');
// let sumNumber = 0;
// let arr = [];

// while (lowerNumber < upperNumber) {
//   calcNumber();
//   function calcNumber() {
//   for (let i = 1;lowerNumber > i; i++ ) {
//     if (lowerNumber % i == 0) {
//       sumNumber+= i;
//     }
//   }
//   if (sumNumber == lowerNumber) {
//     arr.push(lowerNumber);
//   } 
//   lowerNumber++;
//   sumNumber = 0;
// }}

// alert(`В вашем диапазоне мы нашли такие совершенные числа: ${arr}`);

// 7

// let hours = prompt('Укажите часы');
// let minutes = +prompt('Укажите минуты');
// let seconds = +prompt('Укажите секунды');
// getTime();

// function calcTime(hrs, mins = '00', secs = '00') {
//   return (hrs + ':' + mins + ':'+ secs);
// }
// if (minutes == 0 && seconds == 0) {
//   alert(`${hours}:00:00`);
// }
// else if (seconds == 0) {
//   alert(calcTime(hours, minutes));
// }
// else if (minutes == 0) {
//   alert(calcTime(hours, '00', seconds));
// }
// else {
//   alert(calcTime(hours, minutes, seconds));
// }

// 8

// let hours = prompt('Укажите часы');
// let minutes = +prompt('Укажите минуты');
// let seconds = +prompt('Укажите секунды');
// calcTime();

// function calcTime() {
//   let calcSeconds = (hours * 3600) + (minutes * 60) + seconds;
//   alert(`Колличество секунд: ${calcSeconds}`);
// } 

// 9

// let seconds = +prompt('Укажите колличество секунд');
// let hours = 0;
// let minutes = 0;
// let newSeconds = 0;
// calcTime();

// function calcTime() {
//   hours = Math.floor(seconds / 3600);
//   minutes = Math.floor((seconds - (hours * 3600)) / 60);
//   newSeconds = seconds - (hours * 3600) - (minutes * 60);
// }

// alert(`Время: ${hours}:${minutes}:${newSeconds}`);

// 10

let firstDateHours = +prompt('Укажите часы для первой даты');
let firstDateMinutes = +prompt('Укажите минуты для первой даты');
let firstDateSeconds = +prompt('Укажите секунды для первой даты');
let secondDateHours = +prompt('Укажите часы для второй даты');
let secondDateMinutes = +prompt('Укажите минуты для второй даты');
let secondDateSeconds = +prompt('Укажите секунды для второй даты');
calcTime();

function calcTime() {
  let firstSeconds = (firstDateHours * 3600) + (firstDateMinutes * 60) + firstDateSeconds;
  let secondSeconds = (secondDateHours * 3600) + (secondDateMinutes * 60) + secondDateSeconds;
  let dateDifference = secondSeconds - firstSeconds;
  let hours = Math.floor(dateDifference / 3600);
  let minutes = Math.floor((dateDifference - (hours * 3600)) / 60);
  let seconds = dateDifference - (hours * 3600) - (minutes * 60);
  alert(`Разница во времени составит: ${hours}:${minutes}:${seconds}`);
}