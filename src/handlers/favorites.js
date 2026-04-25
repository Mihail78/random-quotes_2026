import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');
const toogleBtn = document.getElementById('toggle-favorite-btn');
toogleBtn.addEventListener('click', toggleFavorite);

hideBtn(toogleBtn);

function toggleFavorite() {
    currentQuote.isFavorite = !currentQuote.isFavorite;
    toggleFavoriteIcon(currentQuote.isFavorite, toogleBtn);

    currentQuote.isFavorite
        ? showFavoriteCard(
              currentQuote.text,
              currentQuote.author,
              favoritesContainer,
          )
        : hideFavoriteCard(currentQuote.text);
}

function handleFavorite(isFavorite) {
    showBtn(toogleBtn);
    toggleFavoriteIcon(isFavorite, toogleBtn);
}

function toggleFavoriteIcon(isFavorite, el) {
    el.classList.toggle('fa', isFavorite);
    el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
    btn.style.display = 'inline-block';
}

function hideBtn(btn) {
    btn.style.display = 'none';
}

function showFavoriteCard(text, author, container) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
            <p>${text}</p>
            <p class="author"><em>${author}</em></p>
        `;
    container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
        if (card.textContent.includes(text)) {
            card.remove();
        }
    });
}

export {
    handleFavorite,
    toggleFavoriteIcon,
    showFavoriteCard,
    hideFavoriteCard,
    showBtn,
    hideBtn,
};
