////////////////////////////// Nav-list ////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const icons = document.querySelectorAll(".icon");
const navigation = document.querySelector(".navigation");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// fechar nav-list automaticamente ao clicar fora
document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target)) {
    navList.classList.remove("open");
  }
});

// adicionar event listener para cada ícone da barra de navegação
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    navList.classList.remove("open");
    if (icon.classList.contains("bx-message")) {
    } else if (icon.classList.contains("bx-heart")) {
    } else if (icon.classList.contains("bx-cart")) {
    } else if (icon.classList.contains("bx-user")) {
      window.location.href = "login.html";
    }
  });
});


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
