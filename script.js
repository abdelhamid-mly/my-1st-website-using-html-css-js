// 3. Désactiver le bouton d'envoi et changer son texte après clic
let submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function() {
    if (submitButton.disabled) return;  // Empêche le double clic si le bouton est déjà désactivé

    submitButton.disabled = true;  // Désactiver le bouton après clic
    submitButton.textContent = 'Envoi en cours...';  // Modifier le texte du bouton
    // 1. Effet de défilement fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});