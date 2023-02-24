const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  const review = document.createElement('div');
  review.className = 'review';

  const ratingStars = '&#9733;'.repeat(rating);
  const ratingHtml = `<span class="rating">${ratingStars}</span>`;

  review.innerHTML = `
    <p><span class="name">${name}</span> ${ratingHtml} <span class="comment">${comment}</span></p>
  `;

  reviewsList.appendChild(review);

  reviewForm.reset();
});
