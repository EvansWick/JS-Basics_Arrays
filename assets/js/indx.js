//Перебір масиву ключовими циклами
/*
(Не використовувати методи перебору масивів (forEach, filter, map, findIndex))
2.1. Вивести елементи з парними індексами.
2.2. Знайти добуток елементів масиву.
2.3. Порахувати та вивести в консоль кількість додатних елементів у масиві.
*/
const nums = [0, 3, 78, 8, 9, 4, -2];
for (let i = 0; i < nums.length; i += 2) {
  // console.log(`${i} even num: ${nums[i]}`);
}

let multiply = 1;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) multiply *= nums[i];
}
console.log(`Multiply of nums: ${multiply}`);

let overzero = 0;
for (let i = 0; i < nums.length; i++) {
  nums[i] > 0 ? overzero++ : (overzero += 0);
}
console.log(`Count overzero numbers: ${overzero}`);
