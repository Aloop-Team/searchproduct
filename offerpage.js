///////////////////// Image selection ///////////////////////

// Seleciona as divs das imagens
const firstImg = document.querySelector('.offer_first_img');
const otherImgs = document.querySelectorAll('.offer_img_others');

// Adiciona event listener para o clique
firstImg.addEventListener('click', handleImgClick);
otherImgs.forEach(img => img.addEventListener('click', handleImgClick));

// Função que lida com o clique na imagem
function handleImgClick(event) {
  // Obtém a div da imagem clicada
  const imgDiv = event.target.closest('.offer_img');

  // Cria um input file para selecionar o arquivo
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/png, image/jpeg';

  // Adiciona event listener para quando o usuário selecionar um arquivo
  input.addEventListener('change', handleFileSelect);

  // Simula um clique no input para abrir a janela de seleção de arquivos
  input.click();

  // Função que lida com a seleção de um arquivo
  function handleFileSelect() {
    // Obtém o arquivo selecionado pelo usuário
    const file = input.files[0];

    // Cria um objeto URL para exibir a imagem na div correspondente
    const url = URL.createObjectURL(file);

    // Cria um elemento de imagem para exibir a imagem na div
    const img = document.createElement('img');
    img.src = url;
    img.style.maxHeight = '10%';
    img.style.maxWidth = '10%';

    // Limpa o conteúdo da div e adiciona a imagem selecionada
    imgDiv.innerHTML = '';
    imgDiv.appendChild(img);

    // Remove o event listener do input para liberar memória
    input.removeEventListener('change', handleFileSelect);
  }
}