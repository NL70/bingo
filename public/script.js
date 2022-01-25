const numberDisplay = document.getElementById("number-display");
const numberGeneratorButton = document.getElementById(
  "number-generator-button"
);
const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

numberGeneratorButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 51);
  numberDisplay.innerText = randomNumber;
  const highlightedNumber = document.getElementById(randomNumber);
  highlightedNumber.classList.add("highlighted");
});

function generateTable() {
  for (let i = 1; i < 51; i++) {
    const number = document.createElement("p");
    number.classList.add("grid-items");
    number.setAttribute("id", i);
    number.innerText = i;
    gridContainer.appendChild(number);
  }
}

resetButton.addEventListener("click", () => {
  for (let i = 1; i < 51; i++) {
    const unhighlightedNumber = document.getElementById(i);
    unhighlightedNumber.classList.remove("highlighted");
    numberDisplay.innerText = "-";
  }
});

generateTable();
