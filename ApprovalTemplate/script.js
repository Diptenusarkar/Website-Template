const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating') || e.target.classList.contains('rating')) {
        removeActive();
        e.target.closest('.rating').classList.add('active');
        selectedRating = e.target.closest('.rating').querySelector('small').innerText;
    }
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <div class="thank-you">
            <h2>Thank You!</h2>
            <p>Your Feedback: ${selectedRating}</p>
            <p>We appreciate your input and will use it to enhance our customer support services.</p>
        </div>
    `;
});

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active');
    });
}