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
