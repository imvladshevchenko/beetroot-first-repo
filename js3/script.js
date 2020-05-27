// 1

// let firstNumber = +prompt('Укажите первое число');
// const secondNumber = +prompt('Укажите второе число');
// let sum = 0;

// while (firstNumber <= secondNumber) {       
//   sum += firstNumber;
//   firstNumber++;
// }
 
// alert('Сумма: ' + sum);

// 2

//Не решено//

// let numberFirst = +prompt('Укажите первое число');
// const numberSecond = +prompt('Укажите второе число');
// const firstHalf = numberFirst / 2;
// const secondHalf = numberSecond / 2;
// let number = 0;
// for (numberFirst; number <= firstHalf; numberFirst / number++)

//3

// const number = +prompt('Укажите число');
// const halfNumber = number / 2;
// let result = 0

// for (number; result <= halfNumber; number / result++) {
//   if (number % result == 0) {
//   alert(result);
//   }
// }

//4

// let number = +prompt('Укажите число');
// let numberQty = 0;

// while (number > 1) {
//   number = number / 10;
//   if (number > 0) {
//     numberQty++;
//   }
// }
// alert('Колличество цифр: ' + numberQty);

// 5

// let numbers = prompt('Укажите 10 чисел, чтобы получить статистику по ним (указывайте через запятую с пробелом)');
// let arr = numbers.split(', ');
// let minus = 0;
// let plus = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// arr.forEach(function(item, i, arr) {
//   if (item < 0 && item % 2 == 0 && item != 0) {
//     minus++;
//     even++;
//   }
//   else if (item < 0 && item % 2 != 0 && item != 0) {
//     minus++;
//     odd++
//   }
//   else if (item > 0 && item % 2 == 0 && item != 0) {
//     plus++;
//     even++;
//   }
//    else if (item > 0 && item % 2 != 0 && item != 0) {
//     plus++;
//     odd++;
//   }
//   else if (item == 0) {
//     zero++;
//     even++;
//   }
//   else if (item % 2 == 0 && item != 0) {
//     even++;
//   }
//   else if (item % 2 != 0 && item != 0) {
//     odd++;
//   }
// });

// alert(`Отрицательные числа: ${minus}, положительные числа: ${plus}, числа равные нулю: ${zero}, четные числа: ${even}, нечетные числа: ${odd}`);


// 6

// let result = 0;
// let answer = 0;

// do {
//   let firstNumber = +prompt('Укажите первое число');
//   let secondNumber = +prompt('Укажите второе число');
//   let sign = prompt('Укажите знак');
//    if (sign == '+') {
//     result = firstNumber + secondNumber;
//   }
//   if (sign == '-') {
//     result = firstNumber - secondNumber;
//   }
//   if (sign == '/') {
//     result = firstNumber / secondNumber;
//   }
//   if (sign == '*') {
//     result = firstNumber * secondNumber;
//   }
//   alert(`Ответ: ${result}`);
//   answer = +prompt('Хотите еще раз воспользоваться калькуляторм? 1 - да, 2 - нет');
// } while (answer == 1);

// 7

// let numbers = prompt('Введите число, чтобы сдвинуть его');
// let shift = prompt('На сколько цифр его сдвинуть?');
 
// alert(numbers.slice(shift) + numbers.slice(0, shift));



// 8

// let dayOfWeek = prompt('Какой сегодня день недели?');
// let arr = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// let repeat = true;

// arr.forEach(function(item, i, arr) {
//   if (dayOfWeek == "понедельник" && repeat != false) {
//    repeat = confirm(`Следующий день недели: Вторник. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'вторник';
//   }
//   if (dayOfWeek === "вторник" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Среда. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'среда';
//   }
//   if (dayOfWeek == "среда" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Четверг. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'четверг';
//   }
//   if (dayOfWeek == "четверг" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Пятница. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'пятница';
//   }
//   if (dayOfWeek == "пятница" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Суббота. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'суббота';
//   }
//   if (dayOfWeek == "суббота" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Воскресенье. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'воскресенье';
//   }
//   if (dayOfWeek == "воскресенье" && repeat != false) {
//     repeat = confirm(`Следующий день недели: Понедельник. Хотите увидеть следующий день? Нажмите "Ок", чтобы продолжить`);
//     dayOfWeek = 'понедельник';
//   }
// });

// 9

let firstNumber = [2,3,4,5,6,7,8,9];
let secondArr = [1,2,3,4,5,6,7,8,9,10];
let arr = [];

for (let firstNumber = 2; firstNumber < 10; firstNumber++) {
  for (let secondNumber = 1; secondNumber < 11; secondNumber++) {
    arr.push(` ${firstNumber}*${secondNumber}=` + firstNumber * secondNumber);
  }
}

alert(arr);