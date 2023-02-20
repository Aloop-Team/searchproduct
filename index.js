const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// ------------------------------------------------------

// Product page - content table

// Seleciona os elementos com a classe "description_option_selected", "reviews_option_selected" e "shipping_option_selected"
const descriptionOption = document.querySelector('.description_option_selected');
const reviewsOption = document.querySelector('.reviews_option_selected');
const shippingOption = document.querySelector('.shipping_option_selected');

// Seleciona os elementos que contêm o conteúdo correspondente
const descriptionContent = document.querySelector('#description_option_selected');
const reviewsContent = document.querySelector('#reviews_option_selected');
const shippingContent = document.querySelector('#shipping_option_selected');

// Adiciona o evento de clique para o elemento "descriptionOption"
descriptionOption.addEventListener('click', function() {
  // Mostra o conteúdo correspondente e oculta os outros
  descriptionContent.style.display = 'block';
  reviewsContent.style.display = 'none';
  shippingContent.style.display = 'none';

  // Adiciona a classe "description_option_selected" para o elemento atual e remove a classe dos outros
  descriptionOption.classList.add('description_option_selected');
  reviewsOption.classList.remove('reviews_option_selected');
  shippingOption.classList.remove('shipping_option_selected');
});

// Adiciona o evento de clique para o elemento "reviewsOption"
reviewsOption.addEventListener('click', function() {
  // Mostra o conteúdo correspondente e oculta os outros
  descriptionContent.style.display = 'none';
  reviewsContent.style.display = 'block';
  shippingContent.style.display = 'none';

  // Adiciona a classe "reviews_option_selected" para o elemento atual e remove a classe dos outros
  descriptionOption.classList.remove('description_option_selected');
  reviewsOption.classList.add('reviews_option_selected');
  shippingOption.classList.remove('shipping_option_selected');
});

// Adiciona o evento de clique para o elemento "shippingOption"
shippingOption.addEventListener('click', function() {
  // Mostra o conteúdo correspondente e oculta os outros
  descriptionContent.style.display = 'none';
  reviewsContent.style.display = 'none';
  shippingContent.style.display = 'block';

  // Adiciona a classe "shipping_option_selected" para o elemento atual e remove a classe dos outros
  descriptionOption.classList.remove('description_option_selected');
  reviewsOption.classList.remove('reviews_option_selected');
  shippingOption.classList.add('shipping_option_selected');
});
