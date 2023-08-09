const userNumberInput = document.getElementById("number1");
const userNumber2Input = document.getElementById("number2");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const divButton = document.getElementById("div");
const multButton = document.getElementById("mult");
const sum = document.getElementById("sum");

addButton.addEventListener("click", function () {
  //   error.textContent = "";

  userInput1 = Number(userNumberInput.value);
  userInput2 = Number(userNumber2Input.value);

  let total = userInput1 + userInput2;

  sum.textContent = `Sum: ${total}`;
});

subButton.addEventListener("click", function () {
  userInput1 = Number(userNumberInput.value);
  userInput2 = Number(userNumber2Input.value);

  let total = userInput1 - userInput2;

  sum.textContent = `Sum: ${total}`;
});

divButton.addEventListener("click", function () {
  userInput1 = Number(userNumberInput.value);
  userInput2 = Number(userNumber2Input.value);

  let total = userInput1 / userInput2;

  sum.textContent = `Sum: ${total}`;
});

multButton.addEventListener("click", function () {
  userInput1 = Number(userNumberInput.value);
  userInput2 = Number(userNumber2Input.value);

  let total = userInput1 * userInput2;

  sum.textContent = `Sum: ${total}`;
});
