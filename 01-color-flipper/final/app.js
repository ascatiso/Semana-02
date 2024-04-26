const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const textColorElement = document.getElementById("text-color"); // Selecciona el elemento de texto

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  // Modifica el color del texto en lugar del color de fondo
  textColorElement.style.color = colors[randomNumber]; // Cambia el color del texto
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
