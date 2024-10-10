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

// Ajout des event listeners sur les flèches
arrowLeft.addEventListener('click', () => {
    console.log('Clic sur la flèche gauche');
    alert('Flèche gauche cliquée');
});

arrowRight.addEventListener('click', () => {
    console.log('Clic sur la flèche droite');
    alert('Flèche droite cliquée');
});
