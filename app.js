const adviceNumber = document.querySelector("#adviceNumber");
const adviceText = document.querySelector("h2");
const randomizer = document.querySelector(".button-dice");

async function randomize() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Unavailable to generate advice at the moment");
    }
    const adviceJson = await response.json();
    const data = await adviceJson.slip;
    const id = await data.id;
    const advice = await data.advice;
    adviceNumber.textContent = await id;
    adviceText.textContent = `“${advice}”`;
  } catch (error) {
    adviceText.textContent = `“${error.message}”`;
  }
}

randomizer.addEventListener("click", randomize);
