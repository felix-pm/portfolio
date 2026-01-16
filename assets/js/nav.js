document.addEventListener('DOMContentLoaded', () => {
    let params = new URLSearchParams(window.location.search);
    let path = params.get("path");
    if (!path) {
        path = "home";
    }
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href').includes(`path=${path}`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});