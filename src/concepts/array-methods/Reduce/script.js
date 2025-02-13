//1.
const nums = [
  1, 2, 2, 4, 5, 5, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

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
const peoples = [
  { name: 'Pedro', age: 25 },
  { name: 'Maria', age: 20 },
  { name: 'João', age: 21 },
  { name: 'Alex', age: 22 },
  { name: 'Natalia', age: 23 },
];

const averageAge = peoples.reduce((acc, person, _, array) => {
  return acc + person.age / array.length;
}, 0);

console.log(averageAge);
console.log('---');

//8. Crie um objeto com a contagem de ocorrências de cada letra em uma string (ex: `"hello"` → `{ h:1, e:1, l:2, o:1 }`).

const hello = 'hello';

const occurrence = [...hello].reduce((acc, word) => {
  acc[word] ? acc[word]++ : (acc[word] = 1);
  return acc;
}, {});

console.log(occurrence);
console.log('---');

// 9. Combine dois arrays em um único objeto chave-valor (ex: `chaves: ["a", "b"]`, `valores: [1, 2]` → `{ a:1, b:2 }`).

const letters = ['a', 'b', 'c', 'd', 'e'];
const sequence = [1, 2, 3, 4, 5];

const keyValue = letters.reduce((acc, letter, index) => {
  acc[letter] = sequence[index];
  return acc;
}, {});

console.log(keyValue);
console.log('---');

// 10. Verifique se todos os elementos de um array são pares.

const evens = [2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20];

const allEven = evens.reduce((acc, num) => acc && num % 2 === 0, true);

console.log(allEven);
