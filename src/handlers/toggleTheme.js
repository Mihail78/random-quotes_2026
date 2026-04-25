function toggleTheme(btn) {
    document.body.classList.toggle('dark-theme');
    document.body.style.backgroundColor = document.body.classList.contains(
        'dark-theme',
    )
        ? 'black'
        : 'white';
    document.body.style.color = document.body.classList.contains('dark-theme')
        ? 'white'
        : 'black';
    btn.textContent = document.body.classList.contains('dark-theme')
        ? 'Light Mode'
        : 'Dark Mode';
}

export default toggleTheme;
