// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// На що буде звертати увагу ментор при перевірці:
// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися

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
    return alert(`You used an invalid value.
Write a number from 1 to 100.`);
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
