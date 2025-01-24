//Contador com setTimeout e callback:
//Crie uma função contador que recebe dois argumentos: um número inicial e um callback.
//A cada segundo, diminua o número até chegar a 0 e, quando terminar, chame o callback. 

function contador(initialNumber, callback) {
    console.log(initialNumber); //Exibe o número inicial
    // Chama o próximo número após 1 segundo
    if (initialNumber > 0) {
        setTimeout(() => {
            contador(initialNumber - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

contador(5, () => {
    console.log("Contagem finalizada!");
})
//Final

//Filtragem de números pares:
//Crie uma função chamada filtrarPares que recebe um array de números e um callback.
//Use o callback para retornar apenas os números pares do array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((element) => {
    if (element % 2 === 0) {
        console.log(`${element} é par`);
    }
});
//Final

//Simulando uma calculadora:
//Crie uma função chamada calculadora que recebe dois números, uma operação matemática (+, -, *, /) e um callback.
//O callback será responsável por realizar a operação matemática e retornar o resultado.

function calculadora(num1, num2, operation, callback) {
    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else {
        console.log("Operação inválida");
        return
    }

    // passa o resultado para o callback
    callback(result);
}

calculadora(1, 1, "-", (result) => {
    console.log(`o resultado é ${result}`);
});
//Final

//Animação sequencial com callbacks:
//Crie três funções que simulam animações (ex.: mover um elemento, alterar sua cor, aumentar seu tamanho).
//Encadeie essas funções usando callbacks para criar uma sequência.

const movingDiv = document.createElement("div");
const coloringDiv = document.createElement("div");
const expandingDiv = document.createElement("div");
const animationSection = document.createElement("section");
const main = document.querySelector("main");

main.appendChild(animationSection);
animationSection.appendChild(movingDiv);
animationSection.appendChild(coloringDiv);
animationSection.appendChild(expandingDiv);

movingDiv.classList.add("moving-div");
coloringDiv.classList.add("coloring-div");
expandingDiv.classList.add("expanding-div");

const style = document.createElement("style");
style.textContent = `
    body {
        width: 100%;
        height: 100%;
    }
    div {
        width: 10vw;
        height: 10vh;
        background-color: blue;
    }
    section {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }`
document.head.appendChild(style);

function animarElemento(element, callback) {
    if (element === movingDiv) {
        element.style.animation = "move 5s linear";
    }
    else if (element === expandingDiv) {
        element.style.animation = "expanding 5s linear";
    }
    else {
        element.style.animation = "color 5s ease-out ";
    }


    element.addEventListener("animationend", () => {
        callback();
    }, { once: true });
}

animarElemento(movingDiv, () => { console.log("animação concluída!") });
animarElemento(expandingDiv, () => { console.log("animação concluída!") });
animarElemento(coloringDiv, () => { console.log("animação concluída!") });
//Final

//Leitura assíncrona de arquivos: 
//Simule a leitura de dois arquivos usando setTimeout.
//Use callbacks para processar os dois arquivos em sequência e exibir o conteúdo no console.

function lerArquivo1(callback) {
    setTimeout(() => {
        callback("Conteúdo do Arquivo 1");
    }, 2000);
};

function lerArquivo2(callback) {
    setTimeout(() => {
        callback("Conteúdo do arquivo 2");
    }, 3000);
};

lerArquivo1((conteudo1) => {
    console.log(conteudo1);

    lerArquivo2((conteudo2) => {
        console.log(conteudo2)
    });
});
//Final

