// 1

// const apple = {
//   name: 'apple',
//   qty: 3,
//   bought: true,
//   toString: function() {
//     return this.name;
//   }
// }
// const pineapple = {
//   name: 'pineapple',
//   qty: 5,
//   bought: false,
//   toString: function() {
//     return this.name;
//   }
// }
// const iceCream = {
//   name: 'ice-cream',
//   qty: 1,
//   bought: true,
//   toString: function() {
//     return this.name;
//   }
// }
// const milk = {
//   name: 'milk',
//   qty: 3,
//   bought: true,
//   toString: function() {
//     return this.name;
//   }
// }
// const cucumber = {
//   name: 'cucumber',
//   qty: 6,
//   bought: false,
//   toString: function() {
//     return this.name;
//   }
// }
// const vine = {
//   name: 'vine',
//   qty: 2,
//   bought: false,
//   toString: function() {
//     return this.name;
//   }
// }


// let productList = [apple, pineapple, iceCream, milk, cucumber];

// const showList = (arr) => {
//   arr.sort (function(a) { if (a.bought === false) {
//     return 1
//   }});
// }

// showList (productList);
// alert(`Сначала идут не купленные продукты, а потом – купленные:
// ${productList.join(`, `)}`);


// // 1.2

// const addProduct = (arr, productName) => {
//   for (let i = 0; i < arr.length; i++){
//     if (arr.includes(productName) === true) {
//       if (productName === arr[i].name) {
//         ++arr[i].qty;
//       }
//     } else {
//       arr.push(productName);
//     }
//   }
// }

// addProduct(productList, 'cucumber');
// console.log(productList);

// // 1.3

// const buyProduct = (arr, productName) => {
//   for (let i = 0; i < arr.length; i++){
//     if (productName === arr[i].name) {
//       arr[i].bought = true;
//     }
//   } 
// }

// buyProduct(productList, 'pineapple');
// console.log(productList);

// 2

const apple = {
    name: 'apple',
    qty: 3,
    price: 12,
    toString: function() {
      return this.name;
    }
  }
  const pineapple = {
    name: 'pineapple',
    qty: 5,
    price: 5,
    toString: function() {
      return this.name;
    }
  }
  const iceCream = {
    name: 'ice-cream',
    qty: 1,
    price: 30,
    toString: function() {
      return this.name;
    }
  }
  const milk = {
    name: 'milk',
    qty: 3,
    price: 15,
    toString: function() {
      return this.name;
    }
  }
  
  let productList = [apple, pineapple, iceCream, milk];
  
  // // 2.1
  
  // const showBill = (arr) => {
  //   alert(`${arr[0]}: колличество -${arr[0].qty}, цена  - ${arr[0].price} \n ${arr[1]}: колличество -${arr[1].qty}, цена  - ${arr[1].price} \n ${arr[2]}: колличество -${arr[2].qty}, цена  - ${arr[2].price} \n ${arr[3]}: колличество -${arr[3].qty}, цена  - ${arr[3].price}`);
  // }
  
  // showBill(productList);
  
  // 2.2
  
  // let totalPrice = 0;
  
  // const purchaseAmount = (arr) => {
  //   for (let i = 0; i < arr.length; i++){
  //    totalPrice = totalPrice + arr[i].price;
  //   } 
  //   alert(`Общая сумма покупки составляет: ${totalPrice}$`);
  // }
  
  // purchaseAmount(productList);
  
  // 2.3
  
  // const mostExpensive = () => {
  // let answer = productList.reduce((prev, cur) => {
  //     if (prev.price > cur.price) {
  //     return prev
  //   }
  //   return cur
  // })
  //   console.log(answer);
  // }
  
  // mostExpensive();
  
  // 2.4
  
  // let totalPrice = 0;
  // let answer = 0;
   
  // const averagePrice = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     totalPrice = totalPrice + arr[i].price;
  //   } 
  //   answer = totalPrice / productList.length;
  //   alert(answer);
  // }
  
  // averagePrice(productList);
  
  // 3
  
  const color = {
    styleName: 'color',
    value: 'red'
  }
  const fontSize = {
    styleName: "font-size",
    value: "30px"
  }
  const fontFamily = {
    styleName: 'font-family',
    value: 'serif',
  }
  
  let styles = [color, fontSize, fontFamily]
  const text = 'текст';
  
  const showText = (arr, text) => {
    document.write(`<p style = "${styles[0].styleName}: ${styles[0].value}; ${styles[1].styleName}: ${styles[1].value}; ${styles[2].styleName}: ${styles[2].value};">${text}</p>`);
  }
  
  showText(styles, text);
  
  // 4.1
  
  const audienceFourth = {
    name: 'D',
    seats: 15,
    faculty: 'FEO',
    toString: function() {
      return this.name;
    }
  }
  const audienceFirst = {
    name: 'A',
    seats: 20,
    faculty: 'EMX',
    toString: function() {
      return this.name;
    }
  }
  const audienceThird = {
    name: 'C',
    seats: 13,
    faculty: 'FRAO',
    toString: function() {
      return this.name;
    }
  }
  const audienceSecond = {
    name: 'B',
    seats: 11,
    faculty: 'LOL',
    toString: function() {
      return this.name;
    }
  }
  const audienceFifth = {
    name: 'E',
    seats: 12,
    faculty: 'EMX',
    toString: function() {
      return this.name;
    }
  }
  
  const studentsGroup = {
    groupName: 'EMX-14-1',
    students: 16,
    faculty: 'EMX'
  }
  
  let audiences = [audienceFourth, audienceFirst, audienceThird, audienceSecond, audienceFifth];
  
  // const showAllAudiences = () => {
  //   alert(`Список всех аудиторий: ${audiences.join(`, `)}`);
  // }
  
  // showAllAudiences();
  
  // 4.2
  
  // const showAudiences = (arr, faculty) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (faculty === audiences[i].faculty) {
  //       alert(`Для этого факультета доступна следующая аудитория: ${audiences[i]}`)
  //     }
  //   } 
  // }
  
  // showAudiences(audiences, 'EMX');
  
  // 4.3
  
  // const showAudience = (arr, group) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (group.faculty === audiences[i].faculty && group.students <= audiences[i].seats) {
  //       alert(`Для этой группы доступна следующая аудитория: ${audiences[i]}`)
  //       break;
  //     }
  //   }
  // }
  
  // showAudience(audiences, studentsGroup);
  
  // 4.4
  
  // const sortSeats = (arr) => {
  //   arr.sort(function (a,b) {
  //     return (a.seats - b.seats);
  //   });
  //   console.log (audiences);
  // };
  
  // sortSeats (audiences);
  
  // 4.5
  
  const sortAlphabet = (arr) => {
    arr.sort(function (a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })
    console.log (audiences);
  }
  
  sortAlphabet(audiences);