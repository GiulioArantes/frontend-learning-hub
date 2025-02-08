const menu = document.querySelector('#menu');
const displayMenu = document.querySelector('#hamburger-menu');
document.querySelector('#hamburger-btn').addEventListener('click', () => {
  if (displayMenu.style.display === 'none') {
    displayMenu.style.display = 'flex';
  } else {
    displayMenu.style.display = 'none';
  }
});

window.addEventListener('click', (event) => {
  if (event.target === displayMenu) {
    displayMenu.style.display = 'none';
  }
});
