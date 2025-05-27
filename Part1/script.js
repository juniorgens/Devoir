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

// Gestion des sliders
const sliders = {
    portfolio: { currentIndex: 0, slideCount: 3 },
    showcase: { currentIndex: 0, slideCount: 3 }
};

function moveSlide(sliderId, direction) {
    const slider = sliders[sliderId];
    const track = document.getElementById(`${sliderId}-track`);
    const slides = track.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;

    // Calculer le nombre de slides visibles
    const windowWidth = window.innerWidth;
    let visibleSlides = 3;
    if (windowWidth <= 480) {
        visibleSlides = 1;
    } else if (windowWidth <= 768) {
        visibleSlides = 2;
    }

    // Mettre à jour l'index
    slider.currentIndex += direction;

    // Limiter l'index
    const maxIndex = slider.slideCount - visibleSlides;
    if (slider.currentIndex < 0) {
        slider.currentIndex = 0;
    } else if (slider.currentIndex > maxIndex) {
        slider.currentIndex = maxIndex;
    }

    // Déplacer le track
    const offset = -slider.currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}

// Réinitialiser le slider lors du redimensionnement
window.addEventListener('resize', () => {
    moveSlide('portfolio', 0);
    moveSlide('showcase', 0);
});
