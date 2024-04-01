const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoria => {
  console.log(`Category: ${categoria.querySelector('h2').textContent}`);
  console.log(`Elements: ${categoria.querySelectorAll('li').length}`);
});
