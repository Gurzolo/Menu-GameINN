const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const button = document.getElementById('changeTextBtn');

button.addEventListener('click', () => {
  title.textContent = 'Hello GitHub Pages!';
  subtitle.textContent = 'Questa pagina è stata pubblicata con GitHub Pages.';
});
