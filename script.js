function abrirMensaje(titulo, mensaje){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("tituloMensaje").innerText = titulo;
    document.getElementById("textoMensaje").innerText = mensaje;
} 
function cerrarMensaje(){
    document.getElementById("popup").style.display = "none";
}