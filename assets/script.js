const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments de flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Sélection des éléments de l'image et du texte
const bannerImage = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');

arrowLeft.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// Nombre total de diapositives
const totalSlides = slides.length;

// Sélection des éléments de flèches et de la zone des points
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0; // Index de la diapositive actuelle

// Ajout d'un event listener sur la flèche droite
arrowRight.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; // On passe à la diapositive suivante, et revient à 0 si on dépasse le total
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`; // Mise à jour de l'image
    bannerTagline.innerHTML = slides[currentSlide].tagLine; // Mise à jour de la tagLine
    console.log('Diapositive actuelle :', currentSlide);
	updateSlide();
});

// Fonction pour créer les bullet points
function createDots() {
	dotsContainer.innerHTML = ''; // On vide les anciens dots pour éviter les doublons
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        // Ajouter la classe 'dot_selected' au premier point
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}

function updateSlide() {
    // Mise à jour de l'image
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    
    // Mise à jour de la tagLine
    bannerTagline.innerHTML = slides[currentSlide].tagLine;

    // Mise à jour des dots
    createDots();
}


// Appel de la fonction pour créer les bullet points
createDots();
updateSlide();