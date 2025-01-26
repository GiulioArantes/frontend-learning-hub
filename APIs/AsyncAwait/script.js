//Simulando uma requisição com async/await:
//Crie uma função simularRequisicao que retorna uma Promise resolvida 
// após 2 segundos.
//Use async/await para chamar essa função e exibir o resultado no 
// console.


async function simularRequisicao() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Esperou 2 segundos!");
}

simularRequisicao();
// Final

//Manipulando erros com try/catch:
//Crie uma função que usa async/await para buscar dados de uma Promise 
// que pode ser rejeitada.
//Use try/catch para tratar o erro e exibi-lo no console.

const inputError = document.querySelector("#possible-error");
const btnError = document.querySelector("button");
async function searchData() {
    try {
        const number = parseInt(inputError.value, 10);
        const result = await new Promise((resolve, reject) => {
            if (number <= 10) resolve("Número válido!");
            else reject("Número muito grande!");
        });
        console.log("Sucesso", result);
    } catch (error) {
        console.error("Erro:", error);
    }
}
btnError.addEventListener("click", searchData);
//Final

//Execução paralela com async/await:
//Crie duas funções assíncronas que simulam tarefas (ex.: buscar dados 
// e processar dados).
//Use Promise.all com async/await para executar ambas em paralelo e 
// exibir o resultado combinado.

const promiseInfo = new Promise((resolve) => {
    setTimeout(() => {
        resolve("João, 25 anos");
    }, 1000);
});

const promiseProcess = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Processamento concluído");
    }, 3000);
});

async function parallel() {
    const [datas, process] = await Promise.all([
        promiseInfo,
        promiseProcess,
    ]);
    console.log({ datas, process });
}

parallel();

//1. Consumir uma API de Posts com Async/Await:
//Faça uma requisição para a API https://jsonplaceholder.typicode.com/posts que retorna uma lista de posts.
//Use async/await para buscar os posts e exibir o corpo do post.

const olPosts = document.querySelector("ol");
const btnPosts = document.querySelector("#btn-posts");

async function processPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datas = await response.json();
    datas.forEach(data => {
        const li = document.createElement("li");
        li.textContent = data.body;
        olPosts.appendChild(li);
    })
}

btnPosts.addEventListener("click", processPosts);