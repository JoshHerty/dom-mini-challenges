"use strict";

// 1. Vending Machine

// selectors
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");

let total = 0;

// console.dir(totalParagraph);

colaButton.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
});

peanutsButton.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolateButton.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});

gummiesButton.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});
// 2. Make Money

// selectors
const makeMoneyForm = document.querySelector(".make-money-form");
const coinContainer = document.querySelector(".coin-container");
const numberOfCoins = document.querySelector("#number-of-coins");
const whichCoin = document.querySelector("#which-coin");

console.dir(makeMoneyForm);

makeMoneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // grab input data
  const formData = new FormData(makeMoneyForm);
  const inputAmount = formData.get("number-of-coins");
  const selectCoin = formData.get("which-coin");

  // double check for correct data:
  console.log(inputAmount);
  console.log(selectCoin);

  // create HTML elements so that I can add to HTML:
  for (let i = 0; i < inputAmount; i++) {
    // <div class="coin"><p>Dime</p></div>
    const newDiv = document.createElement("div");
    const newNameP = document.createElement("p");

    // modify these elements
    // give classes to style them:
    newDiv.classList.add("coin");
    newNameP.classList.add("coin-name");

    // use text contenet to represent user input:
    newNameP.textContent = selectCoin;

    // add elements to HTML (so we can see in browser)
    newDiv.append(newNameP);
    coinContainer.append(newDiv);
  }
});

// 3. Light Bulb

// selectors
const lightBulb = document.querySelector(".lightBulb");
const turnLightBulbOn = document.querySelector("#on");
const turnLightBulbOff = document.querySelector("#off");
const toggleLightBulb = document.querySelector("#toggle");
const endLightBulb = document.querySelector("#end");

console.dir(lightBulb);

turnLightBulbOn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "rgb(217, 217, 217)";
});

turnLightBulbOff.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "rgb(102, 102, 102)";
});

toggleLightBulb.addEventListener("click", () => {
  const onOrOff = lightBulb.style.backgroundColor;
  if (onOrOff === "rgb(217, 217, 217)") {
    lightBulb.style.backgroundColor = "rgb(102, 102, 102)";
  } else {
    lightBulb.style.backgroundColor = "rgb(217, 217, 217)";
  }
});

endLightBulb.addEventListener("click", () => {
  lightBulb.style.display = "none";
  turnLightBulbOn.disabled = true;
  turnLightBulbOff.disabled = true;
  toggleLightBulb.disabled = true;
  endLightBulb.disabled = true;

  turnLightBulbOn.classList.add("light-bulb-button");
});
