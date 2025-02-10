//1.
const nums = [1, 2, 2, 4, 5, 5, 8, 8, 9];

const product = nums.reduce((index, num) => index * num, 1);
console.log(product);
console.log('---');

//2. Encontre a maior palavra em um array de strings.
const words = ['Dois', 'Paralelepípedo', 'Quarenta', 'Um'];

const bigger = words.reduce((acc, word) =>
  acc.length < word.length ? word : acc
);

console.log(bigger);
console.log('---');

//3. Concatene todas as strings de um array em uma única frase.
const concat = words.reduce((acc, word) => acc + ' ' + word);
console.log(concat);
console.log('---');

//4.
const unique = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(unique);
