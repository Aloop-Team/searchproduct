const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// const downarrow = document.querySelector("#down");
// const filterbox = document.querySelector(".jokla__products__category");

// const icone = document.querySelector('#icone');
// const search = document.querySelector('.iconesearch');

// icone.onclick = function() {
//   search.classList.toggle('active')
// }