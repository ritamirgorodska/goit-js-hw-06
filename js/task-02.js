const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEls = document.querySelector("#ingredients");

// const elements = doIngredientsList(ingredients);
const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
});
console.log(elements);

listEls.append(...elements);
