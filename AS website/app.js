const toggleButton = document.getElementsByClassName('toggle-button')[0];
const pages = document.getElementsByClassName('pages')[0];
const header = document.getElementsByClassName('header')[0];

toggleButton.addEventListener('click', () => {
    pages.classList.toggle('active');
    header.classList.toggle('active');
})