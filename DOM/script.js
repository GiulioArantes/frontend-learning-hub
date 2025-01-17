// 1. Um botão que altera o texto de um parágrafo.
const actionBtn = document.getElementById("action-btn");
const paraTarget = document.getElementById("para-alt");
const firstNode = document.getElementById("first-section");

if (actionBtn) {
    actionBtn.addEventListener("click", function () {
        const newPara = document.createElement("p");
        const newText = document.createTextNode("Novo texto!");
        newPara.appendChild(newText);

        firstNode.replaceChild(newPara, paraTarget);
    })
}

// 2. Uma caixa de texto onde, ao digitar, o conteúdo é exibido em tempo real em outro elemento.
const textArea = document.getElementById("textarea");
const textRealTime = document.getElementById("realtime-text");

if (textArea) {
    textArea.addEventListener("input", function () {
        textRealTime.value = textArea.value;
    })
}

// 3. Um botão que altera a cor de fundo da página.
const colorBtn = document.getElementById("color-btn");
const bodyColor = document.querySelector("body");

if (colorBtn) {
    colorBtn.addEventListener("click", function () {
        bodyColor.style.backgroundColor = "wheat";
    })
}

// 4. Ao passar o mouse sobre o título (h1), altere sua cor para uma cor aleatória.
const title = document.getElementById("title");

const changeTitleColor = () => {
    title.style.color = "blue";
}
const originalColor = () => {
    title.style.color = "";
}

if (title) {
    title.addEventListener("mouseover", changeTitleColor);
    title.addEventListener("mouseout", originalColor);
}

//Adicione um campo de entrada. Quando o usuário digitar uma tecla, exiba o
// código da tecla pressionada em tempo real - (event = keydown).

const stringInput = document.getElementById("keydown-test");

if (stringInput) {
    stringInput.addEventListener("keydown", (event) => {
        if (event.key === "1") {
            event.preventDefault();
            alert("Números não são permitidos");
        }
    });
}

//Quando o campo de entrada perder o foco, exiba uma mensagem abaixo dele informando que 
// o campo foi preenchido.

const notificationSec = document.getElementById("fourth-section");

const Notification = () => {
    const message = document.createElement("p");
    const paraMessage = document.createTextNode("O campo foi preenchido.")
    message.appendChild(paraMessage);
    notificationSec.appendChild(message);
}

if (stringInput) {
    stringInput.addEventListener("blur", Notification);
}

//Criar Lista Dinamicamente:
// Adicione um botão "Adicionar Item".
//Sempre que for clicado, insira um novo item (<li>) em uma lista não ordenada (<ul>).

const listBtn = document.getElementById("list-btn");
const listContainer = document.querySelector(".list");


const addItem = () => {
    const ulList = document.getElementById("ul");
    const itemList = document.createElement("li");
    const liText = document.createTextNode("Item");
    itemList.appendChild(liText);
    ulList.appendChild(itemList);
}

if (listBtn) {
    listBtn.addEventListener("click", addItem);
}

//Tabela Dinâmica:
//Crie um formulário com dois campos: "Nome" e "Idade".
//Adicione um botão "Adicionar à Tabela".
//Sempre que o botão for clicado, insira uma nova linha
// na tabela com os valores dos campos.

const inputName = document.getElementById("nome");
const inputAge = document.getElementById("idade");
const tBody = document.querySelector("tbody");
const tableBtn = document.getElementById("table-btn");

const addPeople = (event) => {
    event.preventDefault();

    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");

    tdName.textContent = inputName.value;
    tdAge.textContent = inputAge.value;

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tBody.appendChild(tr);
}

tableBtn.addEventListener("click", addPeople);