document.getElementById("btnSaludar").addEventListener("click", function() {
    const nombre = document.getElementById("nombreUsuario").value;
    const display = document.getElementById("mensaje");
    
    if (nombre.trim() === "") {
        display.innerText = "Porfavor, escribe algo";
        display.style.color = "red";
    } else {
        display.innerText = `Hola, ${nombre} Éxito en tu practica de Git!`;
        display.style.color = "green";
    }
});