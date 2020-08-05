let navLinks = document.querySelector('.nav-links');
let burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click',()=>{
   navLinks.classList.toggle('open');
});

let time = new Date();
let span =  document.querySelector(".time");
span.textContent = time.getFullYear();