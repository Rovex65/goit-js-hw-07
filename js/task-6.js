function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  amountInput.value = "";
}

function createBoxes(amount) {
  function createBox(size) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }

  if (amount <= 100 && amount >= 1) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
      createBox(30 + 10 * i);
    }
  }
}

const amountInput = document.querySelector("#controls > input");
const create = document.querySelector("#controls > button[data-create]");
const destroy = document.querySelector("#controls > button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  createBoxes(amountInput.value);
});

destroy.addEventListener("click", destroyBoxes);
