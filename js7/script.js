//// 1

// class Circle {
//   constructor(r) {
//     this.r = r;
//   }
//   get radius() {
//     return this.r;
//   }
//   set radius(r) {
//     this.r = r;
//   }
//   get diameter() {
//     return this.r * 2;
//   }
//   getArea() {
//     return Math.PI * this.r * this.r;
//   }
//   getCircumference() {
//     return 2 * Math.PI * this.diameter * 2;
//   }

// }

// let circle = new Circle(50);
// console.log(`Радиус: ${circle.radius}, \nдиаметр: ${circle.diameter}, \nплощадь окружности: ${circle.getArea().toFixed(2)}, \nдлина коружности: ${circle.getCircumference().toFixed(2)}`);

// 2

let numb = 0;

class Marker {
  constructor(options) {
    this.color = options.color;
    this.inkQty = options.inkQty;
    this.text = options.text;
    this.newInkQty = options.newInkQty;
  }
  get symbolsQty() {
    numb = this.inkQty / 0.5;
    return this.inkQty / 0.5;
  }
  printText() {
    if (this.text.length > this.symbolsQty) {
      this.text = this.text.substring(0, this.symbolsQty);
    }
    document.write(
      `<p style = "margin: 0; display: inline; color: ${this.color}">${this.text}</p>`
    );
  }
  keepPrintText() {
    if (this.text.length > this.newInkQty / 0.5) {
      this.text = this.text.substring(numb, this.newInkQty / 0.5 + numb);
    }
    document.write(
      `<p style = "margin: 0; display: inline; color: ${this.color}">${this.text}</p>`
    );
  }
}

const marker = new Marker({
  color: "red",
  inkQty: 15,
  text:
    "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content",
});
marker.printText();

const refillMarker = new Marker({
  color: "blue",
  newInkQty: 60,
  text:
    "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content",
});
refillMarker.keepPrintText();

// 3

class Employee {
  constructor (options) {
    this.name = options.name;
    this.age = options.age;
    this.position = options.position;
  }
}

const firstEmployee = new Employee ({
  name: "Viktor",
  age: 53,
  position: "mechanic",
})
const secondEmployee = new Employee ({
  name: "Elena",
  age: 33,
  position: "SEO",
})
const thirdEmployee = new Employee ({
  name: "Vika",
  age: 25,
  position: "musician",
})
const fourthEmployee = new Employee ({
  name: "Roma",
  age: 44,
  position: "artist",
})

const employees = [firstEmployee, secondEmployee, thirdEmployee, fourthEmployee];

class EmpTable {
  constructor (arr) {
    this.arr = arr;
  }
  getHtml(arr) {
    document.write(`<table id="table" border = 4px;> <tr><td> Name </td><td> Age </td><td> Position </td></tr> </table>`);
    const table = document.getElementById('table');
    for (let i = 0; i < arr.length; i++) {
    const row = document.createElement('TR');
    table.appendChild(row);
    const firstCell = document.createElement("TD");
    const secondCell = document.createElement("TD");
    const thirdCell = document.createElement("TD");
    row.appendChild(firstCell);
    row.appendChild(secondCell);
    row.appendChild(thirdCell);
    firstCell.innerHTML = employees[i].name;
    secondCell.innerHTML = employees[i].age;
    thirdCell.innerHTML = employees[i].position;
    }
  }
}

const getTable = new EmpTable;
getTable.getHtml(employees);

