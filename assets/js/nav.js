// document.addEventListener('DOMContentLoaded', () => {
    
//     // On cible la section Expériences et le body
//     const experiencesSection = document.querySelector('#experiences');
//     const body = document.body;

//     // On configure l'observateur
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             // Si la section "Expériences" est visible à plus de 20%
//             if (entry.isIntersecting) {
//                 body.classList.add('blur-mode');
//             } else {
//                 body.classList.remove('blur-mode');
//             }
//         });
//     }, {
//         threshold: 0.2 // Se déclenche quand 20% de la section est visible
//     });

//     // On lance l'observation si la section existe
//     if (experiencesSection) {
//         observer.observe(experiencesSection);
//     }
// });