

let cerrar= document.querySelectorAll(".close")[0];
let abrir= document.querySelectorAll(".cta")[0];
let modal= document.querySelectorAll(".contenido-close")[0];
let modalC= document.querySelectorAll(".cont")[0];


abrir.addEventListener("click",function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("contenido-close")
});
cerrar.addEventListener("click",function(){
    modal.classList.toggle("cont-close")
    modalC.style.opacity="0";
    modalC.style.visibility="hidden";
    setTimeout(function(){

    },1000)
});