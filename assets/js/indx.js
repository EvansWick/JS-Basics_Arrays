// Методи перебору масивів
/*
3.1. Отримати новий масив із заданого, який міститиме лише ненульові числа
       (-1, 5, 0, 9, -10 => -1, 5, 9, -10). 
3.2. Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100
       (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). 
3.3. Вивести елементи масиву, зведені у куб. 
3.4. Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. 
3.5. Знайти в масиві перше число, яке є більшим за 50. Вивести це число в консоль. Якщо такого числа немає — вивести undefined.

*/
// 1
const arr2 = [99, 5, 0, 9, 30];
console.log(`Array:`, arr2);
const arrNoZero = arr2.filter((item) => item !== 0);
// console.log(arrNoZero);

// 2
const arr2Divide100 = arr2.map((item) => item / 100);
// console.log(arr2Divide100);

// 3
// arr2.forEach((item, index) =>
//   console.log(`${index} item of array in cube: ${item ** 3}`),
// );

// 4
const does100InSqrt = (item) => item ** 2 === 100;
let res = arr2.findIndex(does100InSqrt);
res === -1;
// ? console.log("No elements in array = 100 in sqrt")
// : console.log(`In array ${res} element = 100 in sqrt`);

arr2.push(10);
console.log(`Array:`, arr2);
res = arr2.findIndex(does100InSqrt);
res === -1;
// ? console.log("No elements in array = 100 in sqrt")
// : console.log(`In array ${res} element = 100 in sqrt`);

// 5
console
  .log
  // `The first element in array > 50 is: ${arr2.find((item) => item > 50)}`,
  ();
