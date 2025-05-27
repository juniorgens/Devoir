// script.js

// Smooth scrolling pour la navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

// Gestion de l'affichage dynamique des images
const sections = document.querySelectorAll('#portfolio, #showcase');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const items = entry.target.querySelectorAll('.project-item');
        if (entry.isIntersecting) {
            items.forEach(item => item.classList.add('visible'));
        } else {
            items.forEach(item => item.classList.remove('visible'));
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
