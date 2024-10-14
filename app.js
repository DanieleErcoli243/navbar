// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// recupero gli elementi dal DOM

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    //    stabilisco una condizione per aggiungere o togliere la classe che mostra i link
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }


});