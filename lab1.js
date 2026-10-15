'use strict';


// Варіант 1: скаляр передається за значенням, оригінал не змінюється
const inc = (n) => n + 1;

const a = 5;
const b = inc(a);
console.dir({ a, b }); // { a: 5, b: 6 }

// Варіант 2: об'єкт передається за посиланням, змінюється поле оригіналу
const incObj = (num) => {
  num.n++;
};

const obj = { n: 5 };
incObj(obj);
console.dir(obj); // { n: 6 }



const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, 3.14, {}, [], () => {}, 10n, Symbol('id'), 'x', 0,
];

// Версія 1: ключі заздалегідь задані в колекції
const counters = {
  number: 0, string: 0, boolean: 0, object: 0,
  undefined: 0, function: 0, bigint: 0, symbol: 0,
};
for (const value of values) {
  counters[typeof value]++;
}
console.dir(counters);

// Версія 2: початкова колекція порожня, ключі додаються динамічно
const dynamic = {};
for (const value of values) {
  const type = typeof value;
  if (dynamic[type] === undefined) dynamic[type] = 0;
  dynamic[type]++;
}
console.dir(dynamic);
