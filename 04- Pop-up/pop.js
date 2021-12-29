const modal =  document.querySelector(".modall")
 const login=  document.querySelector(".login")
 const wrong =  document.querySelector(".wrong")
 login.addEventListener("click", openModal);
wrong.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
function openModal(e) {
    e.preventDefault();
    modal.style.display ="block";
}
function closeModal(e) {

    modal.style.display ="none";
}
