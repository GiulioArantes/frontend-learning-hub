document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    const name = document.getElementById('name').vale;
    const email = document.getElementById('email').vale;
    const message = document.getElementById('message').vale;

    if (!name || !email || !message) {
      alert(`Por favor, preencha todos os campos.`);
      event.preventDefault();
    }
  });

document.getElementById('toggle-button').addEventListener('click', function () {
  const text = document.getElementById('hidden-text');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
});

document.getElementById('save-button').addEventListener('click', function () {
  const input = document.getElementById('user-input').value;
  localStorage.setItem('savedText', input);
  document.getElementById('saved-text').textContent = `Texto salvo: ${input}`;
});

const savedText = localStorage.getItem('savedText');
if (savedText) {
  document.getElementById('saved-text').textContent =
    `Texto salvo: ${savedText}`;
}
