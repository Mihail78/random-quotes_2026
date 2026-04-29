import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
favoriteBtn.addEventListener('click', () =>
    toggleFavorite(currentQuote, favoriteBtn, favoritesContainer),
);

hideBtn(favoriteBtn);
// showBtn(favoriteBtn);

function toggleFavorite(quote, btn, container) {
    quote.isFavorite = !quote.isFavorite;
    const { isFavorite, text, author } = quote;
    toggleFavoriteBtnIcon(isFavorite, btn);

    isFavorite
        ? showFavoriteCard(text, author, container)
        : hideFavoriteCard(text);
}

function handleFavorite(isFavorite, btn) {
    showBtn(btn);
    toggleFavoriteBtnIcon(isFavorite, btn);
}

function toggleFavoriteBtnIcon(isFavorite, el) {
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
    toggleFavoriteBtnIcon,
    showFavoriteCard,
    hideFavoriteCard,
    showBtn,
    hideBtn,
    favoriteBtn,
};
