const fetchPokeBtn = document.querySelector('#fetch-poke')
const pokeTableBody = document.querySelector('#poke-table-body')

const fetchPoke = async () => {
  try {
    // Obtém os valores do input e converte para minúsculo
    const pokeInput = document.querySelector('#poke-name').value.toLowerCase()
    const pokeNumb = document.querySelector('#poke-numb').value

    //Verificar se ambos os campos estão vazios
    if (pokeInput === '' && pokeNumb === '') {
      alert(`Preencha algum dos campos.`)
      return
    }

    //Definir os parâmetros da API como o nome ou ID preenchido
    const query = pokeInput || pokeNumb
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}/`

    // Exibe um indicador de carregamento
    fetchPokeBtn.textContent = 'Carregando...'
    fetchPokeBtn.desabled = true

    // Faz a aquisição para a API
    const response = await fetch(apiUrl)
    if (!response.ok) {
      console.log(response.status)
      console.log(response.statusText)
      throw new Error('erro ao buscar o Pokemon.')
    }

    const pokemon = await response.json()

    //if (pokeInput != pokemon.name || pokeNumb.textContent != pokemon.id) {
    //    alert(`Valor inválido.`)
    //} else {

    pokeTableBody.innerHTML = ''

    const row = document.createElement('tr')

    // Nome do Pokemon
    const nameCell = document.createElement('td')
    nameCell.textContent = pokemon.name

    //Sprite do Pokemon
    const spritesCell = document.createElement('td')
    const spriteImg = document.createElement('img')
    spriteImg.src = pokemon.sprites.front_shiny
    spritesCell.appendChild(spriteImg)

    //Tipos do Pokemon
    const typesCell = document.createElement('td')
    const types = pokemon.types.map(type => type.type.name).join(', ')
    typesCell.textContent = types

    const actionsCell = document.createElement('td')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remover'
    deleteBtn.classList.add('remove-poke-btn')
    deleteBtn.dataset.pokemonId = pokemon.id
    actionsCell.appendChild(deleteBtn)

    row.appendChild(nameCell)
    row.appendChild(spritesCell)
    row.appendChild(typesCell)
    row.appendChild(actionsCell)

    pokeTableBody.appendChild(row)

    //};
  } catch (error) {
    console.error('Erro completo:', error)
    alert(`Erro ao carregar o Pokemon ${error.message}`)
  } finally {
    //Volta o botão ao estado inicial
    fetchPokeBtn.textContent = 'Pesquisar'
    fetchPokeBtn.desabled = false
  }
}

const handleUserActions = event => {
  if (event.target.classList.contains('remove-poke-btn')) {
    const pokemonId = event.target.dataset.pokemonId
    const rowToRemove = event.target.closest('tr')

    rowToRemove.remove()

    alert(`Pokemon com ID ${pokemonId} removido.`)
  }
}

//Adicionar Eventos
fetchPokeBtn.addEventListener('click', fetchPoke)
pokeTableBody.addEventListener('click', handleUserActions)
