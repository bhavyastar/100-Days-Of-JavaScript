const word = document.querySelector(".input_text");
const btn = document.querySelector(".palin_btn");
const result = document.querySelector(".result");

 btn.addEventListener("click", countVowel);
  function countVowel () {
     let vowelCount = 0;
     let wordVal = word.value.toLowerCase();
     for(let i=0 ; i<wordVal.length; i++) {
       let letter = wordVal[i];
       if(letter.match(/([a,e,i,o,u])/)) {
         vowelCount ++
       }
     } result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
  }
