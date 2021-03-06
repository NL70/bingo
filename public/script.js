const numberDisplay = document.getElementById("number-display");
const numberGeneratorButton = document.getElementById(
  "number-generator-button"
);
const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
let possibleNumbers = [];
const numberCount = 76;
const toggleThemesButton = document.getElementById("toggle-themes-button");

function generatePossibleNumbers() {
  for (let i = 1; i < numberCount; i++) {
    possibleNumbers.push(i);
  }
}

toggleThemesButton.addEventListener("click", () => {
  document.querySelector(":root").classList.toggle("light-mode");
});

numberGeneratorButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
  const randomNumber = possibleNumbers[randomIndex];
  if (!randomNumber) {
    numberDisplay.innerText = "All positions filled.";
  } else {
    numberDisplay.innerText = randomNumber;
    const highlightedNumber = document.getElementById(randomNumber);
    highlightedNumber.classList.add("highlighted");
    possibleNumbers.splice(randomIndex, 1);
  }
});

generatePossibleNumbers();
function generateTable() {
  for (let i = 1; i < numberCount; i++) {
    const number = document.createElement("p");
    number.classList.add("grid-items");
    number.setAttribute("id", i);
    number.innerText = i;
    gridContainer.appendChild(number);
  }
}

resetButton.addEventListener("click", () => {
  generatePossibleNumbers();
  for (let i = 1; i < numberCount; i++) {
    const unhighlightedNumber = document.getElementById(i);
    unhighlightedNumber.classList.remove("highlighted");
    numberDisplay.innerText = "-";
  }
});

generateTable();
