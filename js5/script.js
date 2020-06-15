// 1

// const carDescription = {
//   manufacturer: "BMW",
//   model: "M340i",
//   yearOfManufacture: 2019,
//   horses: 382,
//   averageSpeed: 120
// };

// function carInformation() {
//   alert(`производитель: ${carDescription.manufacturer}, модель: ${carDescription.model}, год выпуска: ${carDescription.yearOfManufacture}, колличество лошадиных сил: ${carDescription.horses}, средняя скорость: ${carDescription.averageSpeed}`);
// }

// getTime(720);

// function getTime(distance, speed) {
//   let time = distance / carDescription.averageSpeed;
//   let timeForRest = Math.floor(time / 4);
//   alert(`Необходимое время для преодоления заданного расстояния: ${time + timeForRest}`);
// }

// 2

// const firstFraction = {
//     numerator: 20,
//     denominator: 5
//   }
  
//   const secondFraction = {
//     numerator: 12,
//     denominator: 8
//   }
  
//   reduction()
  
//   function addition() {
//     if (firstFraction.denominator === secondFraction.denominator) {
//       alert(`сложение равно: ${firstFraction.numerator + secondFraction.numerator}/${firstFraction.denominator}`);
//     }
//     else {
//       alert(`сложение равно: ${firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator} / ${firstFraction.denominator * secondFraction.denominator}`);
//     }
//   }
  
//   function subtraction() {
//     if (firstFraction.denominator === secondFraction.denominator) {
//       alert(`вычитание равно: ${firstFraction.numerator - secondFraction.numerator}/${firstFraction.denominator}`);
//     }
//     else {
//       alert(`вычитание равно: ${firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator} / ${firstFraction.denominator * secondFraction.denominator}`);
//     }
//   }
  
//   function multiplication() {
//     alert(`умножение равно: ${firstFraction.numerator * secondFraction.numerator} / ${firstFraction.denominator * secondFraction.denominator}`);
//   }
  
//   function division() {
//     alert(`деление равно: ${firstFraction.numerator * secondFraction.denominator} / ${firstFraction.denominator * secondFraction.numerator}`);
//   }
  
//   function reduction() {
//     newFirstNumerator = firstFraction.numerator, newFirstDenominator = firstFraction.denominator;
//   for (let i = 2; i <= firstFraction.numerator; i++) {
//     if (firstFraction.numerator % i === 0 &&  firstFraction.denominator % i === 0)
//     newFirstNumerator = firstFraction.numerator / i, 
//     newFirstDenominator = firstFraction.denominator / i;
//   }
//     newSecondNumerator = secondFraction.numerator, newSecondDenominator = secondFraction.denominator;
//   for (let i = 2; i <= firstFraction.numerator; i++) {
//     if (secondFraction.numerator % i === 0 &&  secondFraction.denominator % i === 0)
//     newSecondNumerator = secondFraction.numerator / i, 
//     newSecondDenominator = secondFraction.denominator / i;
//   }
//   alert(`сокращеннение равно: ${newFirstNumerator}/${newFirstDenominator} и ${newSecondNumerator}/${newSecondDenominator}`);
//   }

//   3

const time = {
    hours: 10,
    minutes: 32,
    seconds: 6
  }
  
  changeHours()
  
  function showTime() {
    alert(`Время: ${time.hours}:${time.minutes}:${time.seconds}`);
  }
  
  function changeSeconds() {
    let addSeconds = +prompt('На сколько секунд увеличить время?');
    const calcSeconds = (time.hours * 3600) + (time.minutes * 60) + time.seconds + addSeconds;
    time.hours = Math.floor(calcSeconds / 3600);
    time.minutes = Math.floor((calcSeconds - (time.hours * 3600)) / 60);
    time.seconds = calcSeconds - (time.hours * 3600) - (time.minutes * 60);
    showTime();
  }
  
  function changeMinutes() {
    let addminutes = +prompt('На сколько минут увеличить время?');
    const calcSeconds = (time.hours * 3600) + (time.minutes * 60) + time.seconds + (addminutes * 60);
    time.hours = Math.floor(calcSeconds / 3600);
    time.minutes = Math.floor((calcSeconds - (time.hours * 3600)) / 60);
    time.seconds = calcSeconds - (time.hours * 3600) - (time.minutes * 60);
    showTime();
  }
  
  function changeHours() {
    let addHours = +prompt('На сколько часов увеличить время?');
    const calcSeconds = (time.hours * 3600) + (time.minutes * 60) + time.seconds + (addHours * 3600);
    time.hours = Math.floor(calcSeconds / 3600);
    time.minutes = Math.floor((calcSeconds - (time.hours * 3600)) / 60);
    time.seconds = calcSeconds - (time.hours * 3600) - (time.minutes * 60);
    showTime();
  }