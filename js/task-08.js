const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEventElem = event.currentTarget.elements;
  const email = formEventElem.email.value;
  const password = formEventElem.password.value;
  if (email.length === 0 || password.length === 0) {
    return alert("всі поля повинні бути заповнені");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formEl.reset();
}
