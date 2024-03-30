function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const numberBodyColor = document.querySelector('.color');
const buttonClass = document
  .querySelector('.change-color')
  .addEventListener('click', handlerClick);

function handlerClick(event) {
  const randomColor = getRandomHexColor(event);
  bodyColor.style.backgroundColor = randomColor;
  numberBodyColor.textContent = `- ${randomColor}`;
}
