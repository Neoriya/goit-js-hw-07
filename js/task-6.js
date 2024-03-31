function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerBox = document.querySelector('#boxes');
const numberInput = document.querySelector('input');
const buttonCreate = document
  .querySelector('[data-create]')
  .addEventListener('click', createBoxesClick);
const buttonDestroy = document
  .querySelector('[data-destroy]')
  .addEventListener('click', destroyBoxesClick);

function createBoxesClick() {
  containerBox.innerHTML = '';
  if (numberInput.value <= 0 || numberInput.value > 100) {
    alert(`You used an invalid value.
Write a number from 1 to 100.`);
    numberInput.value = '';
  } else {
    createBoxes(numberInput.value);
  }
}

function destroyBoxesClick() {
  containerBox.innerHTML = '';
  const boxes = containerBox.querySelectorAll('div');
  if (boxes.length > 0) {
    boxes[boxes.length - 1].remove();
  }
  numberInput.value = '';
}

function createBoxes(amount) {
  let box;
  let minCubeDimensions = 30;
  for (let index = 0; index < amount; index++) {
    box = document.createElement('div');
    box.style.height = `${minCubeDimensions}px`;
    box.style.width = `${minCubeDimensions}px`;
    box.style.background = getRandomHexColor();
    minCubeDimensions += 10;
    numberInput.value = '';
    containerBox.append(box);
  }
}

const coverBox = document.createElement('div');
coverBox.classList.add('background-box');
const pElement = document.querySelector('p');

const parentElement = pElement.parentNode;
parentElement.insertBefore(coverBox, pElement.nextSibling);
coverBox.appendChild(document.getElementById('controls'));
coverBox.appendChild(document.getElementById('boxes'));
