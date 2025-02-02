// Crie um código que verifica se um número é par ou ímpar e retorna "Par" ou "Ímpar".
const divExOne = document.getElementById("div-ex-one");

document.getElementById("ex-one").addEventListener("click", () => {
    if (getComputedStyle(divExOne).display === "none") {
        divExOne.style.display = "flex";

        document.getElementById("even-odd-btn").addEventListener("click", () => {
            const input = document.getElementById("even-odd").value;
            const result = (input % 2) === 0 ? "É Par" : "É ímpar";
            document.getElementById("result").textContent = result;
        });
    } else {
        divExOne.style.display = "none";
    }
})

//Verifique se uma pessoa pode dirigir com base na idade (≥18 pode dirigir, senão "Não pode dirigir").
const divExTwo = document.getElementById("div-ex-two");

document.getElementById("ex-two").addEventListener("click", () => {
    if (getComputedStyle(divExTwo).display === "none") {
        divExTwo.style.display = "flex";

        document.getElementById("lead-btn").addEventListener("click", () => {
            const input = document.getElementById("lead").value;
            const result = input >= 18 ? "Pode dirigir" : "Não pode dirigir";
            document.getElementById("lead-result").textContent = result;
        })
    } else {
        divExTwo.style.display = "none";
    }
})

//Defina uma variável desconto que seja 10% se o total da compra for maior que 100, caso contrário, 5%.
const divExThree = document.getElementById("div-ex-three");

document.getElementById("ex-three").addEventListener("click", () => {
    if (getComputedStyle(divExThree).display === "none") {
        divExThree.style.display = "flex";

        document.getElementById("discount-btn").addEventListener("click", () => {
            const input = document.getElementById("discount").value;
            let result = input >= 100 ? `O desconto é de ${input * 0.1}` : `O desconto é de ${input * 0.05}`;
            document.getElementById("discount-result").textContent = result;
        })
    } else {
        divExThree.style.display = "none";
    }
})