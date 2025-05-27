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
    const slideWidth = track.querySelector('.slide').offsetWidth;

    // Mettre à jour l'index
    slider.currentIndex += direction;

    // Limiter l'index pour qu'il reste dans les bornes
    if (slider.currentIndex < 0) {
        slider.currentIndex = 0;
    } else if (slider.currentIndex > slider.slideCount - 3) {
        slider.currentIndex = slider.slideCount - 3;
    }

    // Déplacer le track
    const offset = -slider.currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}
