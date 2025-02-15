//Simulando uma requisição com async/await:
//Crie uma função simularRequisicao que retorna uma Promise resolvida
// após 2 segundos.
//Use async/await para chamar essa função e exibir o resultado no
// console.

async function simularRequisicao() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Esperou 2 segundos!');
}

simularRequisicao();
// Final

//Manipulando erros com try/catch:
//Crie uma função que usa async/await para buscar dados de uma Promise
// que pode ser rejeitada.
//Use try/catch para tratar o erro e exibi-lo no console.

const inputError = document.querySelector('#possible-error');
const btnError = document.querySelector('button');
async function searchData() {
  try {
    const number = parseInt(inputError.value, 10);
    const result = await new Promise((resolve, reject) => {
      if (number <= 10) resolve('Número válido!');
      else reject('Número muito grande!');
    });
    console.log('Sucesso', result);
  } catch (error) {
    console.error('Erro:', error);
  }
}
btnError.addEventListener('click', searchData);
//Final

//Execução paralela com async/await:
//Crie duas funções assíncronas que simulam tarefas (ex.: buscar dados
// e processar dados).
//Use Promise.all com async/await para executar ambas em paralelo e
// exibir o resultado combinado.

const promiseInfo = new Promise((resolve) => {
  setTimeout(() => {
    resolve('João, 25 anos');
  }, 1000);
});

const promiseProcess = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Processamento concluído');
  }, 3000);
});

async function parallel() {
  const [datas, process] = await Promise.all([promiseInfo, promiseProcess]);
  console.log({ datas, process });
}

parallel();

//1. Consumir uma API de Posts com Async/Await:
//Faça uma requisição para a API https://jsonplaceholder.typicode.com/posts que retorna uma lista de posts.
//Use async/await para buscar os posts e exibir o corpo do post.
const olPosts = document.querySelector('ol');
const btnPosts = document.querySelector('#btn-posts');
const modalList = document.querySelector('.modal');

async function processPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const datas = await response.json();
  datas.forEach((data) => {
    const li = document.createElement('li');
    li.textContent = data.body;
    olPosts.appendChild(li);
  });
  modalList.style.display = 'flex';
}
btnPosts.addEventListener('click', processPosts);

//2. Consumir uma API de Comentários com Async/Await:
//Faça uma requisição para a API https://jsonplaceholder.typicode.com/comments que retorna uma lista de comentários.
//Use async/await para buscar os comentários e exibir os comentários com email contendo o domínio "gmail.com".

async function processComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  comments.forEach((comment) => {
    if (comment.email.includes('.com')) {
      const li = document.createElement('li');
      li.textContent = comment.email;
      olPosts.appendChild(li);
    }
  });
  modalList.style.display = 'flex';
}
const btnEmails = document.querySelector('#btn-emails');
btnEmails.addEventListener('click', processComments);

//Exercício 2: API de Países

async function searchCountries() {
  let count = 0;
  try {
    response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error(`Erro na requisição ${response.status}`);
    }
    contries = await response.json();
    contries.forEach((country) => {
      if (country.name.common.startsWith('B')) {
        const li = document.createElement('li');
        li.textContent = `${country.name.common} - ${country.region}`;
        olPosts.appendChild(li);
        count++;
      }
      modalList.style.display = 'flex';
    });
  } catch (error) {
    console.error('Erro ao buscar países, tente novamente mais tarde', error);
  } finally {
    alert(`O total de países encontrados foram: ${count}`);
  }
}
const btnCountry = document.querySelector('#btn-country');
btnCountry.addEventListener('click', searchCountries);

//API de Filmes

const moviesBody = document.querySelector('#movies-body');
const modalMovies = document.querySelector('#modal-movies');
async function processMovies() {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=star');
    if (!response.ok) {
      throw new Error(`Erro na requisição ${response.status}`);
    }
    const movies = await response.json();
    movies.forEach((movie) => {
      const tdName = document.createElement('td');
      tdName.textContent = movie.show.name;

      const tdLanguage = document.createElement('td');
      tdLanguage.textContent = movie.show.language;

      const tr = document.createElement('tr');
      tr.append(tdName, tdLanguage);
      moviesBody.appendChild(tr);
    });
    modalMovies.style.display = 'flex';
    document.querySelector('.table-modal').scrollIntoView({
      behavior: 'smooth',
    });
  } catch (error) {
    console.error('Erro ao processar os filmes', error);
  } finally {
    alert(`Sua solicitação foi concluída!`);
  }
}
const btnMovies = document.querySelector('#btn-movies');
btnMovies.addEventListener('click', processMovies);

//Exercício 3: API de Astronomia

const modalNasa = document.querySelector('#modal-nasa');
const nasaBody = document.querySelector('#nasa-body');
async function nasaMidia() {
  try {
    const response = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    );
    if (!response.ok) {
      throw new Error(`Erro na requisição ${response.status}`);
    }
    const midias = await response.json();

    const tdTitle = document.createElement('td');
    tdTitle.textContent = midias.title;

    const tdDescription = document.createElement('td');
    tdDescription.textContent = midias.explanation;

    const imgUrl = document.createElement('img');
    imgUrl.setAttribute('src', midias.url);
    const tdImg = document.createElement('td');
    tdImg.appendChild(imgUrl);

    const tr = document.createElement('tr');
    tr.appendChild(tdTitle);
    tr.appendChild(tdDescription);
    tr.appendChild(tdImg);
    nasaBody.appendChild(tr);

    modalNasa.style.display = 'flex';
    document.querySelector('.table-modal').scrollIntoView({
      behavior: 'smooth',
    });
  } catch (error) {
    console.error(`Erro na sua solicitação: ${error}`);
  } finally {
    alert(`Requisição concluída, sucesso ou falha`);
  }
}

const btnNasa = document.querySelector('#btn-nasa');
btnNasa.addEventListener('click', nasaMidia);

//Function: hidden or show container
const infoContainer = document.querySelector('.info-container');
function toggleContainer(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    document.querySelectorAll('.item').forEach((item) => {
      if (item.id !== containerId) {
        item.classList.add('hidden');
      }
    });
    container.classList.toggle('hidden');
  }
}

//Event: hidden or show container
const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', (event) => {
  const target = event.target.closest('.section-btn');
  const targetImg = target.querySelector('.arrow-img');

  console.log(targetImg);
  if (targetImg.src.endsWith('/public/images/projects/arrow-left.svg')) {
    targetImg.src = '/public/images/projects/arrow-rigth.svg';
  } else {
    targetImg.src = '/public/images/projects/arrow-left.svg';
  }

  if (target) {
    const targetId = target.getAttribute('id');
    let containerId;

    switch (targetId) {
      case 'error-section':
        containerId = 'error-manipulation';
        break;
      case 'posts-section':
        containerId = 'container-posts';
        break;
      case 'email-section':
        containerId = 'container-emails';
        break;
      case 'country-section':
        containerId = 'container-country';
        break;
      case 'movies-section':
        containerId = 'movies-container';
        break;
      case 'nasa-section':
        containerId = 'nasa-container';
        break;
      default:
        return;
    }
    toggleContainer(containerId);
    infoContainer.classList.toggle('hidden');
  }
});

//Event: close modal
const modals = document.querySelectorAll('.modal');
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
