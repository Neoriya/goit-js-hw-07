// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// На що буде звертати увагу ментор при перевірці:
// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"

const inputId = document
  .querySelector('#name-input')
  .addEventListener('input', handlerInput);
const spanId = document.querySelector('#name-output');
// const title = document.querySelector('h1');

function handlerInput(event) {
  const name = event.currentTarget.value.trim();
  spanId.textContent = name === '' && ' ' ? 'Anonymous' : `${name}`;

  // if (event.code === 'Enter')
  //   return alert(name === '' && ' ' ? 'Anonymous' : `${name}`);
}
