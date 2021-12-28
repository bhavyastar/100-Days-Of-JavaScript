const count = document.querySelector(".count");
const number = document.querySelector(".number_button");
 const randomNumber = () => {
 const random = Math.floor(Math.random()*100+1);
 count.innerHTML = random;
 };
 number.addEventListener("click", randomNumber);