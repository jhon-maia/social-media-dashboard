const btnDark=document.querySelector(".dark-mode-btn");
let on=false;
btnDark.addEventListener("click", ()=> {

	document.body.classList.toggle('Dark');


});