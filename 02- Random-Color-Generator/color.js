const count = document.querySelector(".count");
const color_button = document.querySelector(".color_button");

const randomColorgenerator = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  count.innerHTML = "#" + randomColor;
};

color_button.addEventListener("click", randomColorgenerator);

