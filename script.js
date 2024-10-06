document.addEventListener('DOMContentLoaded', function() {
    const rsvpButton = document.getElementById('rsvpButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    rsvpButton.addEventListener('click', function() {
        // Ocultar el botón y mostrar el mensaje de agradecimiento
        rsvpButton.style.display = 'none';
        thankYouMessage.classList.remove('hidden');

        // Lanzar confeti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});