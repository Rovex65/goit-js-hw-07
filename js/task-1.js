const categories = document.querySelectorAll("#categories > li.item");
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
