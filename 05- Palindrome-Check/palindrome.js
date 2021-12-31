const btn = document.querySelector(".palin_btn");
const result = document.querySelector(".result");
 btn.addEventListener("click", palindrome);
  function palindrome () {
      const word = document.querySelector(".input_text").value;
      let len = word.length;
      let start = word.substring(0, Math.floor(len/2)).toLowerCase();
      let end = word.substring(len- Math.floor(len/2)).toLowerCase();
      let flip = [...end].reverse().join("");
   
  
    if (start == flip) {
      result.innerHTML = `${word.toUpperCase()} is a Palindrome`;
   }
   else {
       result.innerHTML = `${word.toUpperCase()}  is not a Palindrome`;
  }  
  }
