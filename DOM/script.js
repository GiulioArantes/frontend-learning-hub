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
const ulList = document.getElementById("ul");
const style = document.createElement("style");

const addItem = () => {
    const itemList = document.createElement("li");
    const liText = document.createTextNode("Item ");
    const removeBtnList = document.createElement("button");
    const removeBtnListText = document.createTextNode(" Remover");
    removeBtnList.style.marginLeft = "15px";
    removeBtnList.appendChild(removeBtnListText);
    itemList.appendChild(liText);
    ulList.appendChild(itemList);
    ulList.appendChild(removeBtnList);
};

//Delegação de eventos ul, li. 
//Marcar o item como concluído.

ulList.addEventListener("click", (event) => {
    const clickedItem = event.target;
    if (clickedItem.classList.contains("completed")) {
        clickedItem.classList.remove("completed");
        alert(`Você desmarcou o item: ${clickedItem.textContent}`);
    } else if (clickedItem.classList.length === 0) {
        clickedItem.classList.add("completed");
        style.textContent = `
        .completed::after {
        content: '\\2713';
        color: green;
        margin-left: 3px;
        }`;
        document.head.appendChild(style);
        alert(`Você clicou no item: ${clickedItem.textContent}`);
    }
});

if (listBtn) {
    listBtn.addEventListener("click", addItem);
}

//Tabela Dinâmica:
//Crie um formulário com dois campos: "Nome" e "Idade".
//Adicione um botão "Adicionar à Tabela".
//Sempre que o botão for clicado, insira uma nova linha na tabela com os valores dos campos.

const inputName = document.getElementById("nome");
const inputAge = document.getElementById("idade");
const tBody = document.querySelector("tbody");
const tableBtn = document.getElementById("table-btn");

const addPeople = (event) => {
    event.preventDefault();
    if (inputName.value.trim() === "" || inputAge.value.trim === "") {
        alert("Preencha todos os campos.");
    }

    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdAction = document.createElement("td");

    tdName.textContent = inputName.value;
    tdAge.textContent = inputAge.value;

    // Botão de remoção
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("remove-btn");
    tdAction.appendChild(removeBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAction);
    tBody.appendChild(tr);

    inputName.value = "";
    inputAge.value = "";
}

tableBtn.addEventListener("click", addPeople);

tBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const row = event.target.closest("tr");
        row.remove();
    }
});

//Estou testando uma branch