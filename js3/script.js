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

3

const number = +prompt('Укажите число, чтобы получить все делители этого числа');
const halfNumber = number / 2;
let result = 0

for (number; result <= halfNumber; number / result++) {
  if (number % result == 0) {
  alert(result);
  }
}

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

let numbers = prompt('Укажите любое колличество чисел, чтобы получить статистику по ним (указывайте через запятую с пробелом)');
let arr = numbers.split(', ');
let minus = 0;
let plus = 0;
let zero = 0;
let even = 0;
let odd = 0;

arr.forEach(function(item, i, arr) {
  if (item < 0 && item % 2 == 0 && item != 0) {
    minus++;
    even++;
  }
  else if (item < 0 && item % 2 != 0 && item != 0) {
    minus++;
    odd++
  }
  else if (item > 0 && item % 2 == 0 && item != 0) {
    plus++;
    even++;
  }
   else if (item > 0 && item % 2 != 0 && item != 0) {
    plus++;
    odd++;
  }
  else if (item == 0) {
    zero++;
    even++;
  }
  else if (item % 2 == 0 && item != 0) {
    even++;
  }
  else if (item % 2 != 0 && item != 0) {
    odd++;
  }
});

alert(`Отрицательные числа: ${minus}, положительные числа: ${plus}, числа равные нулю: ${zero}, четные числа: ${even}, нечетные числа: ${odd}`);