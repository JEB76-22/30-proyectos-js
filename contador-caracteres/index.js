const textarea = document.getElementById("textarea");

const totalContador = document.getElementById("total-contador");

const restante = document.getElementById("restante-contador");

textarea.addEventListener("keyup", ()=>{
    actualizarContador();
});

actualizarContador();

function actualizarContador(){
   totalContador.innerText = textarea.value.length;
   
   restante.innerText = textarea.getAttribute("maxLength") - textarea.value.length;
}