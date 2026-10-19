// Nos aseguramos de que el código se ejecute cuando toda la página haya cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Mostramos un mensaje en la consola del navegador
    console.log("¡Sistema Frontend cargado correctamente!");

    // Seleccionamos la foto de perfil
    const fotoDePerfil = document.getElementById('miFoto');

    // Agregamos un evento de "clic" a la foto
    fotoDePerfil.addEventListener('click', () => {
        alert("¡Hola! Soy Emely. Gracias por revisar mi tarea de Diseño de sistemas en Internet.");
    });

});