document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  /**
   * Fonction qui gère l'observateur d'intersection
   * Elle détecte quand une section arrive au milieu de l'écran
   */
  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px", // Crée une ligne invisible au milieu de l'écran
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si la section coupe la ligne du milieu
      if (entry.isIntersecting) {
        // 1. On retire la classe active de tous les liens
        navLinks.forEach((link) => link.classList.remove("active"));

        // 2. On récupère l'ID de la section visible
        const id = entry.target.getAttribute("id");

        // 3. On trouve le lien correspondant à cet ID et on l'active
        const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  // On demande à l'observer de surveiller chaque section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
