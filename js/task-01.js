const itemEls = document.querySelectorAll(".item");
console.log("Number of categories:", itemEls.length);

itemEls.forEach(amountOfEls);
function amountOfEls(category) {
  const categoryTitleEl = category.firstElementChild;
  console.log("Category:", categoryTitleEl.textContent);
  const categoryListEl = categoryTitleEl.nextElementSibling;
  console.log("Elements:", categoryListEl.childElementCount);
}
