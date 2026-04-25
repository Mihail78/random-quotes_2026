import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import toggleTheme from './src/handlers/toggleTheme.js';
let currentQuote = null;

function setCurrentQuote(quote) {
    currentQuote = quote;
}

const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => toggleTheme(themeToggleBtn));
generateBtn.addEventListener('click', () =>
    handleQuote(quotes, setCurrentQuote),
);

export { currentQuote };
