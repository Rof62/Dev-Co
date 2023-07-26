const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar")


menu.addEventListener('click', (e) => {
    navbar.classList.toggle("active")
})


// Carrousel

let carousels = document.querySelectorAll('.carousel');

carousels.forEach(function(carousel) {
let figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('.carouselBtn'),
    numImages = figure.childElementCount,
    theta = 2 * Math.PI / numImages,
    currImage = 0;

nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();

    let t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
    return;

    if (t.classList.contains('suivant')) {
        currImage++;
    } else {
        currImage--;
    }
    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
});
