const counterValue = {
  value: 0,
  increment() {
    console.log("increment ->this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector("#value");
console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEL);

decrementBtn.addEventListener("click", function () {
  console.log("Тицьнули на декремент");
  counterValue.decrement();
  console.log(counterValue);
  valueEL.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Тицьнули на інкремент");
  counterValue.increment();
  console.log(counterValue);
  valueEL.textContent = counterValue.value;
});
