function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");

btn.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
});
