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

const nums = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
let positiveNums = [];
let negativeNums = [];
let index = 0;

for (let num of nums) {
  num > 0 ? (positiveNums[index] = num) : (negativeNums[index] = num);
  index++;
}
console.log(
  'Os números positivos são: ',
  positiveNums,
  '\nOs números negativos são: ',
  negativeNums
);
//revisar código acima para trocar o método de array por outro mais simples

//Crie um laço for...of que percorra uma string e crie uma nova string contendo somente os caracteres que não sejam vogais. Exiba a string resultante.

const completeWord = 'verde';
let newWord = '';

for (let consonant of completeWord) {
  if (
    consonant !== 'a' &&
    consonant !== 'e' &&
    consonant !== 'i' &&
    consonant !== 'o' &&
    consonant !== 'u' &&
    consonant !== 'A' &&
    consonant !== 'E' &&
    consonant !== 'I' &&
    consonant !== 'O' &&
    consonant !== 'U'
  ) {
    newWord += consonant;
  }
}
console.log(newWord);
console.log('---');

// Dado um array de objetos representando produtos (cada objeto com propriedades como nome e preço), use o for...of para encontrar e exibir os produtos que tenham preço acima de um valor definido.

const products = [
  {
    name: 'Pão',
    price: 1,
  },
  {
    name: 'Leite',
    price: 4,
  },
  {
    name: 'Arroz',
    price: 3,
  },
  {
    name: 'Açucar',
    price: 2,
  },
];

for (let product of products) {
  if (product.price > 2)
    console.log(`Os produtos com valor acima de R$ 2.00: ${product.name}`);
}
console.log('---');

//For...in Loop
//Crie um objeto que represente um carro com propriedades como marca, modelo, ano e cor. Use um for...in para exibir cada propriedade e seu valor.

const car = { mark: 'Ford', model: 'KA', year: 2020, color: 'Prata' };

for (let key in car) {
  console.log(`${key}:`, car[key]);
}
console.log('---');

//Escreva um laço for...in que percorra um objeto e conte quantas propriedades ele possui. Exiba a contagem final
const people = {
  age: 20,
  city: 'São Paulo',
  phone: '(11) 9 9999-9999',
  mail: 'pedro@example.com',
  name: 'Pedro',
};
let count = 0;
for (let key in people) {
  if (key) count++;
}
console.log(`Este objeto possui ${count} propriedades`);
console.log('---');

//Dado um objeto com informações de um usuário (nome, email, telefone), utilize for...in para verificar se existe a propriedade endereço. Se não existir, adicione essa propriedade com um valor padrão e exiba o objeto modificado.
person = {
  name: 'Lucas',
  mail: 'lucas@example.com',
  phone: '(11) 9 9999-9999',
};
checker = true;
for (let key in person) {
  if (key === 'address') checker = false;
  break;
}
if (checker) person.address = 'São Paulo';
console.log(person);
console.log('---');

//Crie um objeto com diversas propriedades (por exemplo, de um produto: nome, categoria, preço, estoque) e utilize for...in para criar um novo objeto contendo apenas as propriedades que você considera essenciais (por exemplo, nome e preço). Exiba o novo objeto.
goods = { name: 'Palmito', category: 'Alimentos', price: 8, estoque: 10 };
newGoods = {};
for (let key in goods) {
  if (key === 'name' || key === 'price') newGoods.key = goods.key;
}

console.log(newGoods);
