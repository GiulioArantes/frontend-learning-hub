//1.
const nums = [1, 2, 2, 4, 5, 5, 8, 8, 9];

const product = nums.reduce((index, num) => index * num, 1);
console.log(product);
console.log('---');

//2. Encontre a maior palavra em um array de strings.
const words = ['sol', 'mar', 'lua', 'casa', 'verde', 'azul'];

const bigger = words.reduce((acc, word) =>
  acc.length < word.length ? word : acc
);

console.log(bigger);
console.log('---');

//3. Concatene todas as strings de um array em uma única frase.
const concat = words.reduce((acc, word) => acc + ' ' + word);
console.log(concat);
console.log('---');

//4. Conte quantos números únicos existem em um array.
const unique = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const uniqueCount = Object.values(unique).filter((count) => count === 1).length;

console.log(unique);
console.log(uniqueCount);
console.log('---');

//5.
const numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

const positive = numbers.reduce((acc, num) => {
  if (num > 0) return acc + num;
  return acc;
}, 0);

console.log(positive);
console.log('---');

//6. Agrupe palavras por tamanho (ex: `{ 3: ["sol", "mar"], 4: ["lua"] }`).
const sameSize = words.reduce((acc, word) => {
  !acc[word.length] ? (acc[word.length] = [word]) : acc[word.length].push(word);
  return acc;
}, {});

console.log(sameSize);
console.log('---');

//7. Calcule a média das idades de um array de objetos `{ nome: string, idade: number }`.
const people = {
  person: { name: 'Pedro', age: 25 },
  person: { name: 'Maria', age: 20 },
  person: { name: 'João', age: 21 },
  person: { name: 'Alex', age: 22 },
  person: { name: 'Natalia', age: 23 },
};
