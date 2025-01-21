const fetchPokeBtn = document.querySelector("#fetch-poke");
const pokeTableBody = document.querySelector("#poke-table-body");

const fetchPoke = async () => {
    // Exibe um indicador de carregamento
    fetchPokeBtn.textContent = "Carregando...";

}