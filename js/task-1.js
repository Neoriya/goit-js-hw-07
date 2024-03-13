const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoria => {
  showElements(categoria);
});

function showElements(element) {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
}
