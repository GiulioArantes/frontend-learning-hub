const minhaPromisse = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valor === "error") {
                reject("Promessa rejeitada");
            } else {
                resolve("Promessa cumprida!")
            }
        }, 2000);
    });
};

minhaPromisse("Sucesso")
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
// .catch(err => ...)