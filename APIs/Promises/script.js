//Simulando uma API com Promise:
//Crie uma função buscarDados que retorna uma Promise.
//Simule uma chamada a uma API com um setTimeout de 2 segundos e resolva a Promise com um objeto { id: 1, nome: "João" }.

function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "João" }), 2000);
    });
}

buscarDados().then((result => console.log(result)));
//Final

//Promise.all para tarefas paralelas:
//Crie duas Promises que simulam requisições a APIs diferentes 
// (ex.: API de Usuários e API de Produtos).
//Use Promise.all para resolver ambas e exiba os resultados no console.

function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Maria" }), 3000);
    });
}

function buscarProduto() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, product: "Leite" }), 4000);
    });
}

Promise.all([
    buscarUsuario(),
    buscarProduto(),
])
    .then((response) => Promise.all(response))
    .then((data) => console.log(data));
//Final

//Promise com rejeição:
//Crie uma função que retorna uma Promise.
//Resolva a Promise se um número aleatório gerado for maior que 0.5, 
// ou rejeite-a caso contrário.

function randomNumber() {
    return new Promise((resolve, reject) => {
        const nrandom = Math.random();
        console.log(nrandom);
        if (nrandom >= 0.5) {
            resolve(nrandom);
        } else {
            reject(nrandom);
        }
    });
}

randomNumber()
    .then((result => console.log(`O número é maior que 0.5 ${result}`)))
    .catch((erro => console.error(`O número é menor que 0.5 ${erro}`)));
//Final

//Encadeamento de Promises:
//Crie uma sequência de Promises que multiplica um número por 2, soma 5 
// ao resultado e divide por 3.
//Exiba cada etapa no console.

new Promise((resolve) => resolve(1))
    .then((number) => {
        const result = number * 2;
        console.log(`Multiplicação: ${result}`);
        return result;
    })
    .then((number) => {
        const result = number + 5;
        console.log(`Soma: ${number + 5}`);
        return result;
    })
    .then((number) => {
        const result = number / 3;
        console.log(`Divisão: ${number + 3}`);
        return result;
    });
// Final

//Promise.race com simulação de tempos de resposta:
//Crie três Promises que resolvem em tempos diferentes (ex.: 1s, 2s e 3s).
//Use Promise.race para exibir a primeira Promise que for resolvida.

const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Eu sou o mais rápido!"), 2000);
});

const promiseTwo = new Promise((resolve) => {
    setTimeout(() => resolve("Eu quase cheguei a tempo :("), 1000);
})

const promiseThree = new Promise((resolve) => {
    setTimeout(() => resolve("Eu sou muito lento!"), 3000);
});

Promise.race([
    promise,
    promiseTwo,
    promiseThree,
])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
//Final

//1. Consumir uma API de Tarefas com Promise:
//Faça uma requisição para a API https://jsonplaceholder.typicode.com/todos que retorna uma lista de tarefas.
//Filtre as tarefas que estão marcadas como "completadas" e exiba o título delas.

const olTasks = document.querySelector("#ol-tasks");
const btnTasks = document.querySelector("#btn-tasks");

function tasksDone() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then(data => {
            data.forEach(user => {
                if (user.completed === true) {
                    const task = user.title;
                    const liTasks = document.createElement("li");
                    liTasks.textContent = task;
                    olTasks.appendChild(liTasks);
                }
            });
        })
        .catch(error => {
            console.log("Erro ao obter os dados", error);
        });
}
btnTasks.addEventListener("click", tasksDone);

//2. Consumir uma API de Usuários com Promise:
//Faça uma requisição para a API https://jsonplaceholder.typicode.com/users que retorna uma lista de usuários.
//Filtre os usuários que possuem o nome com mais de 10 caracteres e exiba seus nomes e e-mails.

function processData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(data => {
            data.forEach(user => {
                const nameCount = user.name.length;
                if (nameCount > 10) {
                    const li = document.createElement("li");
                    li.textContent = `Nome: ${user.name} - Email:${user.email}`;
                    olTasks.appendChild(li);
                }
            });
        })
        .catch(error => {
            console.log("Erro ao obter os dados", error);
        });
}
const btnProcessData = document.querySelector("#btn-process-data");
btnProcessData.addEventListener("click", processData);