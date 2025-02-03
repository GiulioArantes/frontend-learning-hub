console.log('Olá, JavaScript')
// Seleciona o primeiro elemento com o ID "meu-id"
const elemento = document.getElementById('meu-id')

// Seleciona todos os elementos com a classe ".minha-classe"
const elementos = document.querySelectorAll('.minha-classe')

// Seleciona o primeiro parágrafo
const paragrafo = document.querySelector('p')

const titulo = document.getElementById('titulo')
titulo.textContent = 'Novo título!'
titulo.style.color = 'blue'
titulo.style.fontSize = '20px'

const botao = document.getElementById('meu-botao')

botao.addEventListener('click', function () {
  alert('Você clicou no botão!')
})
