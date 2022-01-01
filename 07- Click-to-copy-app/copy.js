const btn= document.querySelector(".btn");
const para = document.querySelector(".para")
 const copyText = (e) => {
     e.preventDefault();
     para.select();
     para.setSelectionRange(0, 999999);
     document.execCommand("copy");
     btn.textContent="copied!";
     setTimeout(() => {
         btn.textContent="copy";
     }, 3000);
 };
  btn.addEventListener("click", copyText);