// conditionals
const userType = 'admin';

switch (userType) {
  case 'admin':
    console.log('Acesso total ao painel.');
    break;
  case 'editor':
    console.log('Acesso para editar o conteúdo.');
    break;
  case 'visitante':
    console.log('Acesso limitado à visualização.');
    break;
  default:
    console.log('Tipo de usuário inválido.');
}

console.log('---');

let shopCart = 'Produto 1';
if (shopCart === '') console.log('Carrinho vazio');
else console.log('Itens no carrinho');

console.log('---');

let day = 'Quarta';

switch (day) {
  case 'Segunda':
    console.log('Hoje você será produtivo!');
    break;
  case 'Terça':
    console.log('Hoje o dia será desafiador!');
    break;
  case 'Quarta':
    console.log('Hoje você receberá uma surpresa!');
    break;
  case 'Quinta':
    console.log('Hoje você receberá um aumento!');
    break;
  case 'Sexta':
    console.log('Fique atento aos detalhes.');
    break;
  case 'Sábado':
    console.log('Aproveite o dia para descansar!');
    break;
  case 'Domingo':
    console.log('Porque ainda está aqui? Vá descansar!');
    break;
}

//Loops
const numbers = [2, 2, 2, 2, 2];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}

console.log(soma);
console.log('---');

const invertedNumbers = [5, 4, 3, 2, 1];
let organize = [];

for (let i = 1; i <= invertedNumbers.length; i++) {
  organize.push(invertedNumbers[invertedNumbers.length - i]);
}

console.log(organize);
console.log('---');

//Escreva um laço for que percorra cada caractere de uma string e conte quantas vogais ela possui. Exiba o total.
let word = 'Palavras';
let count = 0;
const vowels = 'aeiouAEIOU';

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    count++;
  }
}

console.log(count);
console.log('---');

//Utilizando um array de números, crie um laço for que multiplique cada elemento por um valor fixo (por exemplo, 2) e armazene os resultados em um novo array. Exiba o novo array.
const arrayN = [1, 2, 3, 4, 5];
const arrayM = [];
for (let i = 0; i < arrayN.length; i++) {
  arrayM[i] = 2 * arrayN[i];
}

console.log(arrayM);
console.log('---');
//Dado um array de nomes, crie um laço for que verifique se um determinado nome existe no array. Se encontrar, exiba uma mensagem indicando sua posição; caso contrário, informe que o nome não foi encontrado.

const names = ['giulio', 'gabriel', 'lucas', 'grace'];
let found = false;

for (let i = 0; i < names.length; i++) {
  targetName = 'jones';
  if (names[i] === targetName) {
    console.log(names.indexOf(targetName));
    found = true;
  }
}
if (!found) console.log('nome não foi encontrado');

const users = [
  {
    name: 'Gabriel',
    age: 25,
    email: 'gabriel@example.com',
  },
  {
    name: 'Lucas',
    age: 30,
    email: 'lucas@example.com',
  },
  {
    name: 'Sandra',
    age: 17,
    email: 'sandra@example.com',
  },
  {
    name: 'Marcos',
    age: 17,
    email: 'marcos@example.com',
  },
];
legalAge = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) legalAge.push(users[i]);
}

console.log(legalAge);
