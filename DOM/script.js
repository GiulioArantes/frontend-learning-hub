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
const inputItem = document.getElementById("unit-item");

const addItem = () => {
    if (inputItem.value.trim() === "") {
        alert(`Digite o item que deseja adicionar`);
    } else {
        alertMessage = inputItem.value;
        const itemList = document.createElement("li");
        itemList.textContent = inputItem.value;
        const removeBtnList = document.createElement("button");
        const removeBtnListText = document.createTextNode(" Remover");
        removeBtnList.style.marginLeft = "15px";
        removeBtnList.appendChild(removeBtnListText);
        ulList.appendChild(itemList);
        itemList.appendChild(removeBtnList);
    }
};


//Delegação de eventos ul, li. 
//Marcar o item como concluído.
let timer = null;
let editInput = null;

ulList.addEventListener("click", (event) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        if (event.detail === 1) {
            const clickedItem = event.target;
            if (clickedItem.classList.contains("completed") && clickedItem.tagName === 'LI') {
                clickedItem.classList.remove("completed");
                alert(`Você desmarcou o item: ${clickedItem.firstChild.textContent}`);
            } else if (clickedItem.classList.length === 0 && clickedItem.tagName === 'LI') {
                clickedItem.classList.add("completed");
                style.textContent = `
                .completed::before {
                content: '\\2713';
                color: green;
                margin-right: 3px;
                }`;
                document.head.appendChild(style);
                alert(`Você clicou no item: ${clickedItem.firstChild.textContent}`);
            } else if (clickedItem.tagName === 'BUTTON') {
                const deleteItemList = clickedItem.parentElement;
                deleteItemList.remove();
            }
        }
    }, 200);
});

if (listBtn) {
    listBtn.addEventListener("click", addItem);
}

ulList.addEventListener("dblclick", (event) => {
    clearTimeout(timer);
    const clickedItem = event.target;
    if (clickedItem.tagName === "LI") {
        editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = clickedItem.firstChild.textContent;
        ulList.replaceChild(editInput, clickedItem);

        alert(`Edite o item e pressione Enter para confirmar`);
        editInput.focus();
    }
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && editInput) {
        const newLi = document.createElement("li");
        newLi.textContent = editInput.value;
        ulList.replaceChild(newLi, editInput);
        const removeBtnList = document.createElement("button");
        const removeBtnListText = document.createTextNode(" Remover");
        removeBtnList.style.marginLeft = "15px";
        removeBtnList.appendChild(removeBtnListText);
        newLi.appendChild(removeBtnList);
        editInput = null;
    }
})

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
    if (inputName.value.trim() === "" || inputAge.value.trim() === "") {
        alert("Preencha todos os campos.");
    }

    const tr = document.createElement("tr");
    tr.classList.add("standard-tr");
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
    const row = event.target.closest("tr");
    const allrows = document.querySelectorAll("tr");
    if (event.target.classList.contains("remove-btn")) {
        row.remove();
    } else if (row.classList.contains("color-row")) {
        row.classList.remove("color-row");
    } else {
        style.textContent = `
        .color-row {
        background-color: lightblue;
        }`;
        document.head.appendChild(style);
        row.classList.add("color-row");
    }
});

//Estou testando uma branch