// Script para mostrar/ocultar el botón de scroll al inicio
$(document).ready(function () {
    // Mostrar u ocultar el botón de scroll al inicio
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    // Desplazamiento suave al hacer clic en el botón de scroll al inicio
    $('#scrollTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// script.js

var isMoved = false;

function moveDiv() {
    var divArrow = document.getElementById('language-arrow');
    var divCurrentLanguage = document.getElementById('current-language');
    var divOtherLanguages = document.getElementById('other-languages');
    var divLanguageArrow = document.getElementById('divlanguage-arrow');

    // Verificamos el estado actual y aplicamos el movimiento correspondiente
    if (!isMoved) {
        divArrow.style.transform = 'scaleX(-1)';
        divOtherLanguages.style.transform = 'scaleX(1)';
        divLanguageArrow.style.borderRadius = '0';
    } else {
        divArrow.style.transform = 'scaleX(1)';
        divLanguageArrow.style.borderRadius = '0 50% 50% 0';
        divOtherLanguages.style.transform = 'scaleX(0)';
    }

    isMoved = !isMoved; // Invertimos el estado para el próximo clic
}

function changeLanguage(languageToChange) {
    window.location.href = languageToChange;
}
