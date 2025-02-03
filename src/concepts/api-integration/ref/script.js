const fetchUsersBtn = document.getElementById('fetch-users')
const usersTableBody = document.getElementById('users-table-body')

const fetchUsers = async () => {
  try {
    // Exibe um indicador de carregamento
    fetchUsersBtn.textContent = 'Carregando...'
    fetchUsersBtn.disabled = true

    // Faz a requisição para a API
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      console.log(response.status) // Exibe o código de status HTTP
      console.log(response.statusText) // Exibe a mensagem do status HTTP
      throw new Error('erro ao buscar os usuários.')
    }

    // Converte a resposta para JSON
    const users = await response.json()

    // Limpa a tabela antes de adicionar os novos dados
    usersTableBody.innerHTML = ''

    // Adiciona os usuários na tabela
    users.forEach(user => {
      const row = document.createElement('tr')

      const nameCell = document.createElement('td')
      nameCell.textContent = user.name

      const emailCell = document.createElement('td')
      emailCell.textContent = user.email

      const actionsCell = document.createElement('td')
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Remover'
      deleteBtn.classList.add('remove-user-btn')
      deleteBtn.dataset.userId = user.id // Atribuir o ID para futuras ações
      actionsCell.appendChild(deleteBtn)

      row.appendChild(nameCell)
      row.appendChild(emailCell)
      row.appendChild(actionsCell)

      usersTableBody.appendChild(row)
    })
  } catch (error) {
    console.error('Erro completo:', error)
    alert(`Erro ao carregar os usuários ${error.message}`)
  } finally {
    // Volta o botão ao estado inicial
    fetchUsersBtn, (textContent = 'Buscar usuários')
    fetchUsersBtn.disabled = false
  }
}

const handleUserActions = event => {
  if (event.target.classList.contains('remove-user-btn')) {
    const userId = event.target.dataset.userId
    const rowToRemove = event.target.closest('tr')

    // Remove o usuário da tabela
    rowToRemove.remove()

    alert(`Usuário com ID ${userId} removido.`)
  }
}

// Adiciona os eventos
fetchUsersBtn.addEventListener('click', fetchUsers)
usersTableBody.addEventListener('click', handleUserActions)
