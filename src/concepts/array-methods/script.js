// Converta um array de nomes (ex: ["ana", "carlos"]) para letras maiúsculas.
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

const arrays = [
  { name: 'Giulio', age: 26 },
  { name: 'Grace', age: 26 },
  { name: 'Rita', age: 56 },
  { name: 'Marcela', age: 21 },
];
const justNames = arrays.map((array) => array.name);
console.log(justNames);
