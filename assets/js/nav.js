document.addEventListener('DOMContentLoaded', () => {
    // 1. On récupère les paramètres de l'URL actuelle (ex: "?path=experiences")
    let params = new URLSearchParams(window.location.search);
    let path = params.get("path");

    // Si aucun path n'est défini (page d'accueil par défaut), on considère que c'est 'home'
    if (!path) {
        path = "home";
    }

    // 2. On sélectionne tous les liens de la navigation
    const links = document.querySelectorAll('nav ul li a');

    // 3. On compare chaque lien avec l'URL actuelle
    links.forEach(link => {
        // On vérifie si l'attribut href du lien contient le path actuel
        if (link.getAttribute('href').includes(`path=${path}`)) {
            // C'est la page active ! On ajoute la classe.
            link.classList.add('active');
        } else {
            // Sécurité : on retire la classe sur les autres
            link.classList.remove('active');
        }
    });
});