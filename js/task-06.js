const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const inputLength = Number(inputEl.dataset.length);
console.log(inputLength);

inputEl.addEventListener("input", onInputValid);

function onInputValid(event) {
  if (event.currentTarget.value.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
