// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// recupero gli elementi dal DOM

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // uso un metodo per mettere e togliere la classe alla lista di link

    links.classList.toggle('show-links');

});