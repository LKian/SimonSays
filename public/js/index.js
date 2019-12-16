console.log("Simon Says");

let colorArray = ["green", "red", "blue", "yellow"];
let computerGeneratedColors = [];
let userClickedColors = [];
let gameButtons = document.querySelectorAll(".game-button");
let startButton = document.querySelector(".start-game");
let count = 0;
let isItComputerTurn = true;

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
    return true;
  } else {
    return false;
  }
};

// player presses START GAME
const generateComputerColor = () => {
  const randomNumber = generateRandomNumber();
  computerGeneratedColors.push(colorArray[randomNumber]);
  const computerColor = getLastComputerColor();
  // console.log(`%c Computer Color: ${computerColor}`, "color:" + computerColor);
  let isItComputerTurn = false;
  console.log("computer turn: ", isItComputerTurn);
};

const addUserColor = event => {
  event.preventDefault();
  let clickedColor = event.currentTarget.dataset.color;
  userClickedColors.push(clickedColor);
  const userColor = getLastUserColor();
  console.log(`%c User Color: ${userColor}`, "color:" + userColor);
  let isItComputerTurn = true;
  console.log("User turn: ", isItComputerTurn);
};

gameButtons.forEach(gameButton => {
  gameButton.addEventListener("click", event => {
    generateComputerColor();
    addUserColor(event);
    const colorComparison = compareColors();
    // console.log("colorComparison ", colorComparison);
    // if colorComparison returns true,
    // count++;
    // generateComputerColor
    // else {
    //   Lose.  clear arrays.  disable user buttons.  print computerColors
    // }
    console.log("count ", count);
  });
});

// TODO

// X 1. Build array of colors
// X 2. Generate random color sequence from your color array - Math.random?
// 3. Push your color seq. to a new array
// 4. Match the user input with the color seq. array
// 5. Add a new color to your seq. array after each user input - If they get it correct clear user input for the next round
// 6. If the user fails end the sequence and print you're a loser! - Clear both arrays

// User input - Completed

// Delay each light up by 1s for the computer sequence
