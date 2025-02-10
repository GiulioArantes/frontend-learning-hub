//Filter 1.

const numerics = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const bigger = numerics.filter((num) => num > 50);
console.log(bigger);
console.log('---');

//2.
const words = ['Abelha', 'Leão', 'Elefante', 'Aline', 'Arco', 'Alavanca'];

const justA = words.filter((word) => word.includes('a'));
console.log(justA);
console.log('---');

//3.
const arrayObj = [
  {
    name: 'Alavanca',
    active: true,
  },
  {
    name: 'Interruptor',
    active: false,
  },
  {
    name: 'Luz',
    active: false,
  },
  {
    name: 'Porta',
    active: true,
  },
];

const isTrue = arrayObj.filter((obj) => obj.active === true);
console.log(isTrue);
console.log('---');

//4.
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const isPrime = numbers.filter(
  (num) =>
    num > 1 && [...Array(num).keys()].slice(2).every((n) => num % n !== 0)
);
console.log(isPrime);
console.log('---');

//5.
const products = [
  {
    product: 'Monitor',
    price: 400,
  },
  {
    product: 'Notebook',
    price: 2000,
  },
  {
    product: 'Carro',
    price: 20000,
  },
  {
    product: 'Teclado',
    price: 120,
  },
  {
    product: 'Móvel',
    price: 450,
  },
  {
    product: 'Feijão',
    price: 5,
  },
];

const inInterval = products.filter(
  (product) => product.price >= 100 && product.price <= 500
);
console.log(inInterval);
console.log('---');

// 6.

const dates = [
  '2023-02-02',
  '2022-02-02',
  '2021-02-02',
  '2024-02-02',
  '2023-03-03',
  '2023-03-04',
  '2023-03-05',
];

const isAfter = dates.filter((date) => date > '2023-01-01');
console.log(isAfter);

//7.
const ages = [15, 16, 17, 20, 21, 22, 25, 27, 30, 31, 32, 34];

const adults = ages.filter((age) => age <= 30 && age >= 18);
console.log(adults);
console.log('---');

// 8.
const mixedArray = [
  42,
  'name',
  true,
  false,
  { name: 'João' },
  [1, 2, 3],
  null,
  undefined,
];

const justValid = mixedArray.filter(
  (unit) => unit !== null && unit !== undefined
);
console.log(justValid);
console.log('---');

//9.

const wordsArray = ['Arroz', 'Feijão', 'Ali', 'Fátima', 'Alias', 'Oi'];
const vogals = 'aeiouAEIOU';

const justVogals = wordsArray.filter(
  (unit) => vogals.includes(unit.charAt(0)) && unit.length > 3
);

console.log(justVogals);

//10. Filtre transações bancárias com valor positivo (entradas).
const values = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5];

const positive = values.filter((value) => value > 0);
console.log(positive);
