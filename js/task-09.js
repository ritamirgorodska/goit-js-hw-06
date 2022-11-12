// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const colorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
colorBtn.addEventListener("click", getRandomHexColor);
function getRandomHexColor() {
  const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyEl.style.backgroundColor = hex;
  colorEl.textContent = `${hex}`;
}
