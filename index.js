const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}



//////////////////////////// Product page - content table ////////////////////////////////////////////////////

const descriptionOption = document.querySelector('.description_option_selected');
const reviewsOption = document.querySelector('.reviews_option_selected');
const shippingOption = document.querySelector('.shipping_option_selected');

const descriptionContent = document.querySelector('#description_option_selected');
const reviewsContent = document.querySelector('#reviews_option_selected');
const shippingContent = document.querySelector('#shipping_option_selected');

reviewsContent.style.display = 'none';
shippingContent.style.display = 'none';

  descriptionOption.addEventListener('click', function() {
  descriptionContent.style.display = 'block';
  reviewsContent.style.display = 'none';
  shippingContent.style.display = 'none';

  descriptionOption.classList.add('description_option_selected');
  reviewsOption.classList.remove('reviews_option_selected');
  shippingOption.classList.remove('shipping_option_selected');
  });

  reviewsOption.addEventListener('click', function() {
  descriptionContent.style.display = 'none';
  reviewsContent.style.display = 'block';
  shippingContent.style.display = 'none';

  descriptionOption.classList.remove('description_option_selected');
  reviewsOption.classList.add('reviews_option_selected');
  shippingOption.classList.remove('shipping_option_selected');
  });

  shippingOption.addEventListener('click', function() {
  descriptionContent.style.display = 'none';
  reviewsContent.style.display = 'none';
  shippingContent.style.display = 'block';

  descriptionOption.classList.remove('description_option_selected');
  reviewsOption.classList.remove('reviews_option_selected');
  shippingOption.classList.add('shipping_option_selected');
  });


  /* Redirect to supplier public page */ 

  const sellerProfileButton = document.getElementById('sellerProfileButton');
  sellerProfileButton.addEventListener('click', () => {
  window.location.href = 'supplierpublicpage.html';
});
