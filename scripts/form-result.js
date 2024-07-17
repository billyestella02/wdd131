window.addEventListener('DOMContentLoaded', () => {
    let reviewCounter = localStorage.getItem('numReview') || 0;
    reviewCounter++;
    localStorage.setItem('numReview', reviewCounter);
});

// Display the click counter in results page
const numberOfReviews = localStorage.getItem('numReview');
const reviewCounter = document.querySelector('#review-counter');

reviewCounter.innerHTML = numberOfReviews;