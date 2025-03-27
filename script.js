const formElement = document.querySelector(".form");
const nameErrorElement = document.querySelector(".name-error");
const nameInputElement = document.querySelector("#name");

let trySubmitted = false;

const nameValidator = (input) => {
  const regex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
  const isCorrect = regex.test(input.value.trim());
  if (input.value.trim() === "") {
    nameErrorElement.textContent = "This field is required";
    input.classList.add("border-error");
  } else if (!isCorrect) {
    nameErrorElement.textContent =
      "Only English letters and a single space allowed.";
    input.classList.add("border-error");
  } else {
    nameErrorElement.textContent = "";
    input.classList.remove("border-error");
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  const nameInput = formElement.name;
  nameValidator(nameInput);
  if (!trySubmitted) {
    trySubmitted = true;
  }
  //   document.location = "./plan.html";
};

nameInputElement.addEventListener("input", (event) => {
  if (trySubmitted) {
    nameValidator(event.target);
  }
});
formElement.addEventListener("submit", onSubmit);
