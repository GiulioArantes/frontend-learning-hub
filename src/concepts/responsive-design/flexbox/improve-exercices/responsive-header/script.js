const menu = document.querySelector('#menu');
const displayMenu = document.querySelector('#hamburger-menu');
document.querySelector('#hamburger-btn').addEventListener('click', () => {
  displayMenu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) displayMenu.classList.remove('active');
});

window.addEventListener('click', (event) => {
  if (event.target === displayMenu) {
    displayMenu.classList.remove('active');
  }
});
