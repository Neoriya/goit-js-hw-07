const inputId = document
  .querySelector('#name-input')
  .addEventListener('input', handlerInput);
const spanId = document.querySelector('#name-output');

function handlerInput(event) {
  const name = event.currentTarget.value.trim();
  spanId.textContent = name === '' && ' ' ? 'Anonymous' : `${name}`;
}

const greetingBox = document.createElement('div');
greetingBox.classList.add('box');
const pElement = document.querySelector('p');

const parentElement = pElement.parentNode;
parentElement.insertBefore(greetingBox, pElement.nextSibling);
greetingBox.appendChild(document.getElementById('name-input'));
greetingBox.appendChild(document.querySelector('h1'));
