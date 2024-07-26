// slider animation
// slide though panels when slider arrows are clicked
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const sliderContainer = document.querySelector('.slider-container');

let moveRight = 0;
rightArrow.addEventListener('click', () => {
    if (moveRight > -200) {
        moveRight -= 100;
        sliderContainer.style.left = `${moveRight}vw`;
        leftArrow.style.visibility = 'visible';
    }

    if (moveRight === -200) {
        rightArrow.style.visibility = 'hidden';
    }
});

leftArrow.addEventListener('click', () => {
    if (moveRight < 0) {
        moveRight += 100;
        sliderContainer.style.left = `${moveRight}vw`;
        rightArrow.style.visibility = 'visible';
    }

    if (moveRight === 0) {
        leftArrow.style.visibility = 'hidden';
    }
});