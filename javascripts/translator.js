document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los elementos con la clase .english
    var englishElements = document.querySelectorAll('.english');

    // Agrega un evento de clic a cada elemento con la clase .english
    englishElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Redirecciona a la carpeta superior y luego a index-EN.html
            window.location.href = '/index.html';
        });
    });

    // Obtén todos los elementos con la clase .spanish
    var spanishElements = document.querySelectorAll('.spanish');

    // Agrega un evento de clic a cada elemento con la clase .spanish
    spanishElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Redirecciona a la carpeta superior y luego a index-ES.html
            window.location.href = '/ES.html';
        });
    });
});
