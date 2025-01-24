//Simulando uma API com Promise:
//Crie uma função buscarDados que retorna uma Promise.
//Simule uma chamada a uma API com um setTimeout de 2 segundos e resolva a Promise com um objeto { id: 1, nome: "João" }.

function buscarDados(dados) {
    return new Promise((resolve) => setTimeout(resolve, { id: 1, name: "João" }));
};
buscarDados.then((resultado => console.log(resultado)));