// Challenge (за бажанням). Робота з масивами об'єкті

// Функція-конструктор для створення користувачів
function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

// Заповнення масиву десятьма об'єктами з описом користувача
for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90), // випадковий вік від 0 до 89
    Math.random() < 0.5, // випадкова стать
    `useremail${i}@gmail.com`,
    Math.random() < 0.5, // випадкова підписка
  );
  users.push(user);
}

//4.0. ⭐ Прописати в прототипі метод getFullName(), що повертає рядок з повним ім'ям для користувача.
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
// Object.assign(User.prototype, { getName });
User.prototype.getFullName = getFullName;
console.log(users[0].getFullName());

// 4.1. ⭐ Отримати масив користувачів, які не підписані (not subscribed).
const unSubscribers = users.filter((item) => item.isSubscribed);
// console.log(unSubscribers);

// 4.2. ⭐ Вивести список повних імен користувачів.
// users.forEach((item) => console.log(item.getFullName()));

// 4.3. ⭐ Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
console.log(users);
const childrenNames = users
  .filter((item) => item.age <= 18 && item.age >= 6 && !item.isMale)
  .map((item) => item.getFullName());
// console.log(childrenNames);

// 4.4. ⭐ Видалити з масиву користувача з email  useremail5@gmail.com.
if (users.findIndex((item) => item.email === "useremail5@gmail.com") !== -1)
  users.splice(
    users.findIndex((item) => item.email === "useremail5@gmail.com"),
    1,
  );
else console.log("Такого користувача не існує");
// console.log(users);

// 4.5. ⭐ Змінити email користувачу з id 2 (можна спробувати використати find).
let res = users.find((item) => item.id === 2);
if (res !== undefined)
  users[users.findIndex((item) => item.id === 2)].email =
    "useremail222@gmail.com";
else console.log("Такого користувача не існує");

// 4.6. ⭐ Визначити, який відсоток користувачів підписані (subscribed).
if (users.length !== 0)
  console.log(
    `Відсоток підписаних користувачів: ${Math.floor(
      (users.filter((item) => item.isSubscribed).length / users.length) * 100,
    )}%`,
  );
else console.log("Користувачі відсутні взагалі");

// 4.7. ⭐ Знайти середній вік користувачів (спробувати використати reduce).
console.log(
  `Середній вік користувачів: ${Math.floor(
    users.reduce((calk, item) => calk + item.age, 0) / (users.length || 1),
  )}`,
);

// 4.8. ⭐ Впорядкувати користувачів за віком (від наймолодшого до найстаршого) (sort).
users.sort((a, b) => a.age - b.age);
// console.log(users);

// 4.9. ⭐ Перевірити, чи є в масиві користувач з email'ом useremail7@gmail.com.
const result = users.findIndex((item) => item.email === "useremail7@gmail.com");
result === -1
  ? console.log("Такого користувача не існує")
  : console.log(`Це користувач з айді: ${users[result].id}`);
