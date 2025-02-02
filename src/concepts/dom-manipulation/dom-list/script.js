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

listBtn.addEventListener("click", addItem);