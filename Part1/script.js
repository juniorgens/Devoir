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

// Options communes pour IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Gestion de l'apparition dynamique pour #home
const homeSection = document.querySelector('#home');
const homeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const h1 = entry.target.querySelector('h1');
        const bio = entry.target.querySelector('.bio-text');
        if (entry.isIntersecting) {
            h1.classList.add('visible');
            bio.classList.add('visible');
        }
    });
}, observerOptions);

homeObserver.observe(homeSection);

// Gestion de l'apparition dynamique pour #about
const aboutSection = document.querySelector('#about');
const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const h2 = entry.target.querySelector('h2');
        const text = entry.target.querySelector('.about-text');
        if (entry.isIntersecting) {
            h2.classList.add('visible');
            text.classList.add('visible');
        }
    });
}, observerOptions);

aboutObserver.observe(aboutSection);

// Gestion de l'affichage dynamique des images pour #portfolio et #showcase
const sections = document.querySelectorAll('#portfolio, #showcase');

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

// Gestion de l'apparition dynamique pour #quotes
const quotesSection = document.querySelector('#quotes');
const quotesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const h2 = entry.target.querySelector('h2');
        const quotes = entry.target.querySelectorAll('.quote-item, .more-quotes');
        if (entry.isIntersecting) {
            h2.classList.add('visible');
            quotes.forEach(quote => quote.classList.add('visible'));
        }
    });
}, observerOptions);

quotesObserver.observe(quotesSection);

// Gestion de l'apparition dynamique pour #contact
const contactSection = document.querySelector('#contact');
const contactObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const h2 = entry.target.querySelector('h2');
        const formItems = entry.target.querySelectorAll('.form-item, .submit-btn');
        if (entry.isIntersecting) {
            h2.classList.add('visible');
            formItems.forEach(item => item.classList.add('visible'));
        }
    });
}, observerOptions);

contactObserver.observe(contactSection);
