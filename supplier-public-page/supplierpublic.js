/* Reviews submit */

// var reviewButton = document.getElementById("review-button");
// var reviewForm = document.getElementById("review-form");

// reviewButton.addEventListener("click", function() {
//   if (reviewForm.style.display === "block") {
//     reviewForm.style.display = "none";
//   } else {
//     reviewForm.style.display = "block";
//   }
// });

/* submitting reviews */

var reviewButton = document.getElementById("review-button");
var reviewForm = document.getElementById("review-form");
const customerReviewSubmitted = document.querySelector(".customer-review-submitted");

let isReviewFormVisible = false; // add a variable to keep track of the form visibility

reviewButton.addEventListener("click", () => {
  if (!isReviewFormVisible) {
    reviewForm.style.display = "block";
  } else {
    reviewForm.style.display = "none";
  }
  isReviewFormVisible = !isReviewFormVisible; // toggle the visibility state
});

const formWriteReview = document.querySelector(".form-write-review");
formWriteReview.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;
  
  const customerReview = document.createElement("div");
  customerReview.classList.add("customer-review");
  
  const h4 = document.createElement("h4");
  h4.classList.add("customer-review-h4");
  h4.textContent = name ? name : "Anonymous";
  customerReview.appendChild(h4);
  
  const p1 = document.createElement("p");
  p1.classList.add("customer-review-p1");
  for (let i = 0; i < rating; i++) {
    const starSpan = document.createElement("span");
    starSpan.classList.add("fa", "fa-star", "checked");
    p1.appendChild(starSpan);
  }
  for (let i = rating; i < 5; i++) {
    const starSpan = document.createElement("span");
    starSpan.classList.add("fa", "fa-star");
    p1.appendChild(starSpan);
  }
  customerReview.appendChild(p1);
  
  const p2 = document.createElement("p");
  p2.classList.add("customer-review-p2");
  p2.textContent = review;
  customerReview.appendChild(p2);
  
  customerReviewSubmitted.insertBefore(customerReview, customerReviewSubmitted.firstChild);
  
  formWriteReview.reset();
  
  reviewForm.style.display = "none";

});
