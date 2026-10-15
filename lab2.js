'use strict';


// 1. Змінна з ім'ям
let name = 'Yurchenko Bogdan';
console.log(name);

// 2. Константа з роком народження
const birthYear = 2009;
console.log(birthYear);

// 3. Функція-привітання
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet(name);


// 4. Усі числа з діапазону [start, end]
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
console.log(range(15, 30));

// 5. Лише непарні числа з діапазону [start, end]
const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
};
console.log(rangeOdd(15, 30));


// 6. Вкладені виклики функцій у циклі
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(average(square(i), cube(i)));
  }
  return result;
};
console.log(calculate());


// 7. const та let з об'єктами
const fn = () => {
  const obj1 = { name: 'Yurchenko Bogdan' };
  let obj2 = { name: 'Yurchenko Bogdan' };
  
  obj1.name = 'Lucius';
  obj2.name = 'Lucius';

  //obj1 = { name: 'Julius' };   // TypeError: Assignment to constant variable
  //obj2 = { name: 'Julius' };   // працює: let дозволяє нове посилання

  return { obj1, obj2 };
};
console.log(fn());

// 8. Створення користувача
const createUser = (name, city) => ({ name, city });
console.log(createUser('Yurchenko Bogdan', 'Schastlyve'));


// 9. Телефони в масиві об'єктів
const phoneBook = [
  { name: 'Yurchenko Bogdan', phone: '+380638363021' },
  { name: 'Volodymyr Zelenskiy', phone: '+380638363022' },
  { name: 'Sydorenko Dmytro', phone: '+380638363023' },
];

const findPhoneByName = (name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) return entry.phone;
  }
  return undefined;
};
console.log(findPhoneByName('Yurchenko Bogdan'));

// 10. Телефони в хеш-таблиці (об'єкті)
const phoneHash = {
  'Yurchenko Bogdan': '+380638363021',
  'Volodymyr Zelenskiy': '+380638363022',
  'Sydorenko Dmytro': '+380638363023',
};

const findPhoneByNameHash = (name) => phoneHash[name];
console.log(findPhoneByNameHash('Yurchenko Bogdan'));
