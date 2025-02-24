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

//set localStorage
// post API
const olPosts = document.querySelector('ol'),
  modalList = document.querySelector('#modal-list'),
  STORAGE_KEY = 'posts';
let postStore = JSON.parse(localStorage.getItem(STORAGE_KEY));

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(postStore)) || [];
}
// API call
let posts = [];

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`);
    }
    posts = await response.json();
    if (posts.length === postStore.length) {
      return;
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts) || []);
    }
  } catch (error) {
    console.error('Falha ao carregar os dados:', error);
  }
}
fetchPosts();

// function: posts by user (id)
const inputUserId = document.querySelector('#user-id');
function specificPosts() {
  olPosts.innerHTML = '';
  const filteredPosts = inputUserId.value,
    forUser = postStore.filter((post) => post.userId === Number(filteredPosts));
  if (forUser.length === 0) {
    alert(`Esse usuário não existe`);
    inputUserId.value = 1;
  } else {
    forUser.forEach((post) => {
      const li = document.createElement('li');
      li.textContent = post.body;
      olPosts.appendChild(li);
    });
    modalList.style.display = 'flex';
  }
}

// total users in the API
let count = 0;
let users = 0;
const totalusers = postStore.forEach((post) => {
  if (count !== post.userId) {
    users++;
    count = post.userId;
  }
});

// function: all posts
function showAllPosts() {
  olPosts.innerHTML = '';
  postStore.forEach((post) => {
    const li = document.createElement('li');
    li.textContent = post.body;
    olPosts.appendChild(li);
  });
  const li = document.createElement('li');
  li.textContent = `Total de usários cadastrados são: ${users}`;
  olPosts.appendChild(li);
  modalList.style.display = 'flex';
}

document.querySelector('#user-id-btn').addEventListener('click', specificPosts);
document.querySelector('#btn-posts').addEventListener('click', showAllPosts);

const postId = document.querySelector('#post-id');
const modalPost = document.querySelector('#modal-post');
const textarea = document.querySelector('#edit-post');

//function: edit posts
function editPosts() {
  const selectedPost = postStore.find(
    (post) => post.id === Number(postId.value)
  );
  if (selectedPost) {
    modalPost.style.display = 'flex';
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        selectedPost.body = textarea.value;
        modalPost.style.display = 'none';
        save();
      }
    });
  }
}

function removePost() {
  const postIdNumber = Number(postId.value);
  postStore = postStore.filter((post) => post.id !== postIdNumber);
  save();
}
document.querySelector('#del-btn').addEventListener('click', removePost);
document.querySelector('#post-id-btn').addEventListener('click', editPosts);
//comment API

// API call
let comments = [];
async function fetchComments() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar os dados: ${response.status}`);
    }
    comments = await response.json();
    byDomain();
  } catch (error) {
    console.error(`Falha ao carregar os dados:`, error);
  }
}
fetchComments();

// function: all mails
function allMails() {
  olPosts.innerHTML = '';
  comments.forEach((comment) => {
    if (comment.email.includes('.com')) {
      const li = document.createElement('li');
      li.textContent = comment.email;
      olPosts.appendChild(li);
    }
  });
  modalList.style.display = 'flex';
}

// function: mails by domain
function byDomain() {
  const quantity = comments.reduce((acc, comment) => {
    acc[comment.email] = (acc[comment.email] || 0) + 1;
    return acc;
  }, {});
  console.log(quantity);
}

document.querySelector('#btn-emails').addEventListener('click', allMails);

//country API
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

//movies API
// API call
let movies = [];
async function fetchMovies() {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=star');
    if (!response.ok) {
      throw new Error(`Erro na requisição ${response.status}`);
    }
    movies = await response.json();
  } catch (error) {
    console.error('Erro ao processar os filmes', error);
  }
}
fetchMovies();

// function: show all movies
function showMovies() {
  const moviesBody = document.querySelector('#movies-body');
  moviesBody.innerHTML = '';

  const filteredMovies = movies.map((movie) => ({
    name: movie.show.name,
    language: movie.show.language,
  }));

  filteredMovies.forEach((movie) => {
    const tdName = document.createElement('td');
    tdName.textContent = movie.name;

    const tdLanguage = document.createElement('td');
    tdLanguage.textContent = movie.language;

    const tr = document.createElement('tr');
    tr.append(tdName, tdLanguage);
    moviesBody.appendChild(tr);
  });
  document.querySelector('#modal-movies').style.display = 'flex';
  document.querySelector('.table-modal').scrollIntoView({
    behavior: 'smooth',
  });
}
document.querySelector('#btn-movies').addEventListener('click', showMovies);

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
