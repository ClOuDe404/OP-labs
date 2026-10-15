'use strict';

// 1. random(min, max): випадкове ціле від min до max включно.
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(random(1, 6), random(10),random(101));

// 2. generateKey(length, characters): рядок випадкових символів
const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters[random(characters.length - 1)];
  }
  return key;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(20, characters));

// 3. IPv4 -> число через побітові зсуви та reduce
const ipToInt = (ip = '192.168.88.1') =>
  ip.split('.').reduce((res, item) => (res << 8) + +item, 0);

console.log(ipToInt());                  
console.log(ipToInt('10.0.0.1'));        
console.log(ipToInt('192.168.1.10'));    
console.log(ipToInt('195.177.124.226')); 
console.log(ipToInt('0.0.0.0'));         
console.log(ipToInt('112.12.5.2'));         

// 4. Інтроспекція об'єкта: [[ім'я методу, кількість аргументів], ...]
const introspect = (iface) => {
  const result = [];
  for (const key of Object.keys(iface)) {
    const value = iface[key];
    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }
  return result;
};

const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};
console.log(introspect(iface)); 
