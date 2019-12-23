let colorArray = ["green", "red", "blue", "yellow"];
let computerColorsArray = [];
let userColorsArray = [];
let gameButtons = document.querySelectorAll(".game-button");
let level = 1;
let initialAmountOfColors = 2;
let gameLevelText = document.querySelector(".game-level-text");
let computerArrayText = document.querySelector(
  ".game-computer-array-container-text"
);
let userArrayText = document.querySelector(".game-user-array-container-text");
let gameTurnText = document.querySelector(".game-turn-text");
let startGame = document.querySelector(".start-game");
let generateRandomNumber = () => {
  return Math.floor(Math.random() * colorArray.length);
};
const generateRandomColor = () => {
  let randomNumber = generateRandomNumber();
  let color = colorArray[randomNumber];
  console.log("Computer Random Color::", color);
  computerArrayText.innerHTML = color;
  return color;
};
const addComputerColor = () => {
  let randomColor = generateRandomColor();
  computerColorsArray.push(randomColor);
  console.log("computerColorsArray ", computerColorsArray);
};
const computerTurn = () => {
  gameLevelText.innerHTML = level;
  document.querySelector(".game-buttons").classList.add("button-disabled");
  let index = 0;
  let timeoutDuration = index === 0 ? 1000 : 1250;
  const setHighlight = setInterval(highlight, timeoutDuration);
  function highlight() {
    if (document.querySelector(".highlight")) {
      document.querySelector(".highlight").classList.remove("highlight");
    }
    if (index === computerColorsArray.length) {
      document
        .querySelector(".game-buttons")
        .classList.remove("button-disabled");
      return clearInterval(setHighlight);
    } else {
      if (index === 0) {
        document
          .querySelector(`[data-color=${computerColorsArray[index]}]`)
          .classList.add("highlight");
        index++;
      } else {
        setTimeout(() => {
          document
            .querySelector(`[data-color=${computerColorsArray[index]}]`)
            .classList.add("highlight");
          index++;
        }, 250);
      }
    }
  }
};
//   console.log(`%c Computer Color: ${computerColor}`, "color:" + computerColor);
// user turn
const resetGame = () => {
  level = 1;
  userColorsArray = [];
  computerColorsArray = [];
  gameLevelText.innerHTML = 0;
};
gameButtons.forEach(gameButton => {
  gameButton.addEventListener("click", event => {
    let clickedColor = event.currentTarget.dataset.color;
    userColorsArray.push(clickedColor);
    console.log(`%cUser Color: ${clickedColor}`, "color:" + clickedColor);
    let clickedColorIndex = userColorsArray.length - 1;
    if (
      userColorsArray[clickedColorIndex] ===
      computerColorsArray[clickedColorIndex]
    ) {
      console.log(`Line 68 colors match.  Level ${level}`);
    } else {
      console.log(
        `colors 70 don't match. You clicked ${clickedColor} instead of ${computerColorsArray[clickedColorIndex]}.  You lost at level ${level}`
      );
      resetGame();
      return alert("Loser");
    }
    if (userColorsArray.length === computerColorsArray.length) {
      console.log("lenghts match'", level);
      level++;
      userColorsArray = [];
      addComputerColor();
      computerTurn();
    } else {
      console.log("don't match lenghts yet 77");
    }
  });
  return userColorsArray;
});
/**
 * Initializes game
 * Keep adding colors as long as the count is less than the level.
 */
const init = () => {
  for (i = 1; i <= initialAmountOfColors; i++) {
    addComputerColor();
  }
  computerTurn();
};
startGame.addEventListener("click", init);
