const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const destinationGrid = document.querySelector('.destination__grid');
const cards = document.querySelectorAll('.destination__card');

let currentCard = 0;

function updateHoveredCard() {
    cards.forEach((card, index) => {
        card.classList.remove('hovered');
        if (index === currentCard) {
            card.classList.add('hovered');
            const offset = card.offsetLeft - (destinationGrid.offsetWidth / 2) + (card.offsetWidth / 2);
            destinationGrid.scrollTo({ left: offset, behavior: 'smooth' });
        }
    });
}

nextButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    updateHoveredCard();
});

prevButton.addEventListener('click', () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateHoveredCard();
});

// Initialize by hovering the first card
updateHoveredCard();