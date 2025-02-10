// 1.Converta um array de nomes (ex: ["ana", "carlos"]) para letras maiúsculas.
const names = [
  'Giulio',
  'Gabriel',
  'Lucas',
  'Fernando',
  'Gabriela',
  'Grace',
  'Joyce',
];
const CapitalizedNames = names.map((name) => name.toUpperCase());
console.log(CapitalizedNames);
console.log('---');
// 2.
const arrays = [
  { name: 'Giulio', age: 26 },
  { name: 'Grace', age: 26 },
  { name: 'Rita', age: 56 },
  { name: 'Marcela', age: 21 },
];
const justNames = arrays.map((array) => array.name);
console.log(justNames);
console.log('---');

// 3.
const numbers = [1.628, 10, 100, 1000, 100000, 2, 20, 200, 2000, 20000];

const brCoin = numbers.map(
  (number) =>
    `R$ ${number.toLocaleString('pr-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
);
console.log(brCoin);
console.log('---');

// 4.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squared = nums.map((num) => num * num);
console.log(squared);
console.log('---');

// 5.
const firstArray = [1, 3, 5, 7, 9];
const secArray = [2, 4, 6, 8, 10];

const some = firstArray.map((first, sec) => first + secArray[sec]);
console.log(some);
console.log('---');

//6.
const dates = [
  '2025-01-01',
  '2025-02-02',
  '2025-03-03',
  '2025-04-04',
  '2025-05-05',
  '2025-06-06',
];
const datesObj = dates.map((dateString) => new Date(dateString));
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

const formattedDates = datesObj.map((date) =>
  new Intl.DateTimeFormat('pt-BR', options).format(date)
);
console.log(formattedDates);
console.log('---');

//7.
const booleanArray = [true, true, true, false, false, false];

const yesNo = booleanArray.map((unit) => (unit === true ? 'Sim' : 'Não'));
console.log(yesNo);
console.log('---');

//8.
grades = [3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

const concept = grades.map((grade) =>
  grade >= 9 ? 'A' : grade >= 7 ? 'B' : grade >= 5 ? 'C' : 'D'
);

console.log(concept);
console.log('---');

//9.
const products = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const decount = products.map((product) => product * 0.1);
console.log(decount);
console.log('---');

//10.
const fruits = ['Banana', 'Cereja', 'Abacate', 'Maçã'];
const newFruits = fruits.map((fruit) => {
  return { text: fruit, size: fruit.length };
});

console.log(newFruits);
