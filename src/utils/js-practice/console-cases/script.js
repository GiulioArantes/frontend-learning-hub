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
console.log('---');
console.log('Agora vamos fazer exercícios de While e Do...While Loops');

let regressive = 10;
while (regressive > 0) {
  console.log(regressive);
  regressive--;
}
console.log('fogo');
console.log('---');

//Utilize um laço while para somar os números de 1 até que a soma atinja ou ultrapasse 100. Exiba o valor final da soma e quantas iterações foram realizadas.
let total = 1;
let iterations = 0;

while (total <= 100) {
  total++;
  iterations++;
}
console.log(
  'O total é: ',
  total,
  '\nO total de interações foram: ',
  iterations
);
console.log('---');

// Com um laço while, comece com um número inicial (por exemplo, 1) e, a cada iteração, multiplique-o por 2 até que o resultado seja maior que 1000. Exiba o número de iterações necessárias e o valor final.
let initialNumber = 1;
let totalInteraction = 0;

while (initialNumber < 1000) {
  initialNumber *= 2;
  totalInteraction++;
}
console.log(
  'O resultado é: ',
  initialNumber,
  '\n o total de interações foram:',
  totalInteraction
);
console.log('---');

let numbers = [1, 2, 3, 4, 5];
let result = 0;
for (let number of numbers) {
  result += number;
}
console.log(result);
console.log('---');

// Crie um array de palavras e utilize o for...of para transformar cada palavra em letras maiúsculas, armazenando-as em um novo array. Exiba o novo array.
let words = ['Giulio, Gabriel, Lucas, Guilherme, João'];
let captalLetters = [];
for (let word of words) {
  captalLetters = word.toUpperCase();
}
console.log(captalLetters);

nums = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
positiveNums = [];
negativeNums = [];

for (let num of nums) {
  num < 0 ? positiveNums.push(num) : negativeNums.push(num);
}
console.log(
  'Os números positivos são: ',
  positiveNums,
  '\nOs números negativos são: ',
  negativeNums
);
//revisar código acima para trocar o método de array por outro mais simples
