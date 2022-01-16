const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('change', setProperty);
  input.addEventListener('mousemove', setProperty);
});

function setProperty() {
  const syf = this.dataset.sizing || '';
  root.style.setProperty(`--${this.name}`, `${this.value}${syf}`);
}
