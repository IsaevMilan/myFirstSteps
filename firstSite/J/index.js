//переменные
var message; // в названиях переменных мы можем использовать любые буквы от aA до zZ and nambers 0-9, $, and _. !!but peremennaya cant began with number
var myMessage; //
myMessage = "hey";

var myNumber = 10.485;
var myString = "hey milan"; // '10.485'
var myBulean = true; // false
var myNull = null;
var myUndefined = undefined;
var myObject = {
  name: "Milan",
  age: "37",
};

// ЧИСЛА
//console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 * myNumber);
console.log(40 / myNumber);
myNumber;

// математические действия.,

//console.log(myNumber);

//массивы
var names = ["vasya", "petya", "ken"];
//console.log(names[1]);

//УСЛОВИЯ
//if ("vasya" !== "petya" || myNumber > 20) {
//  console.log("условия выполняются");
//}

//if (myNumber > 20) {
//console.log("number less than 20");
//} else {
//console.log("number greater than 20");
//}

//Цыклы
//for (var i = 0; i < 10; i++) {
//if (i == 4) {
// continue;
// }
//console.log(i);
//}

//for (var j = 0; j < names.length; j++) {
//console.log(names[j]);
//}

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//Функции
// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(10, 59));
// console.log(sum(4, 59));

//Объекты
var myObject = {
  name: "Vasya",
  surname: "Vasyando",
  age: 25,
  getFullName: function () {
    return this.name + " " + this.surname;
  },
};

myObject.name = "Petya";
console.log(myObject.name);
console.log(myObject.getFullName());
