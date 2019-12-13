console.log("Simon Says");

let colorArray = ["green", "red", "blue", "yellow"];
let computerGeneratedColors = [];
let userClickedColors = [];
let gameButtons = document.querySelectorAll(".game-button");
let count = 0;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * colorArray.length);
};

const getLastComputerColor = () => {
  return computerGeneratedColors[computerGeneratedColors.length - 1];
};

const getLastUserColor = () => {
  return userClickedColors, userClickedColors[userClickedColors.length - 1];
};

const compareColors = () => {
  if (getLastComputerColor() == getLastUserColor()) {
    return "MATCHYES";
  } else {
    return "NO";
  }
};

// player presses START GAME
const generateComputerColor = () => {
  const randomNumber = generateRandomNumber();
  computerGeneratedColors.push(colorArray[randomNumber]);
  const computerColor = getLastComputerColor();
  console.log("COMPUTER; ", computerColor);
};

const addUserColor = event => {
  event.preventDefault();
  let clickedColor = event.currentTarget.dataset.color;
  userClickedColors.push(clickedColor);
  const userColor = getLastUserColor();
  console.log("%c USER:  userColor", "color: " + userColor);
};

gameButtons.forEach(gameButton => {
  gameButton.addEventListener("click", event => {
    addUserColor(event);
    generateComputerColor();
    const colorComparison = compareColors();
    console.log("colorComparison ", colorComparison);
    count++;
    console.log("count ", count);
  });
});

// [green, blue, yellow, red]
// pattern [green, blue, red]
// input   [green, blue, red]
//            0     1     2

// TODO

// X 1. Build array of colors
// X 2. Generate random color sequence from your color array - Math.random?
// 3. Push your color seq. to a new array
// 4. Match the user input with the color seq. array
// 5. Add a new color to your seq. array after each user input - If they get it correct clear user input for the next round
// 6. If the user fails end the sequence and print you're a loser! - Clear both arrays

// User input - Completed

// Delay each light up by 1s for the computer sequence
