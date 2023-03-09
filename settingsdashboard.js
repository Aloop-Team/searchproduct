/* Expandir setting options*/

const supplierInfobox2 = document.querySelector('.supplier_infobox-2');
const infobox2Expand = document.querySelector('.infobox-2-expand');
		
supplierInfobox2.addEventListener('click', () => {
	infobox2Expand.classList.toggle('show');
});

const supplierInfobox3 = document.querySelector('.supplier_infobox-3');
const infobox3Expand = document.querySelector('.infobox-3-expand');
		
supplierInfobox3.addEventListener('click', () => {
	infobox3Expand.classList.toggle('show');
});

const supplierInfobox4 = document.querySelector('.supplier_infobox-4');
const infobox4Expand = document.querySelector('.infobox-4-expand');
		
supplierInfobox4.addEventListener('click', () => {
	infobox4Expand.classList.toggle('show');
});

const supplierInfobox5 = document.querySelector('.supplier_infobox-5');
const infobox5Expand = document.querySelector('.infobox-5-expand');
		
supplierInfobox5.addEventListener('click', () => {
	infobox5Expand.classList.toggle('show');
});



/* aparecer asteriscos nas letras da senha */

const password = document.getElementById("password").textContent;
const asteriscos = "*".repeat(password.length);
document.getElementById("password").textContent = asteriscos;


/* Mensagem de confirmação para excluir a conta */

function confirmDelete() {
    var confirmed = confirm("Are you sure you want to delete your account?");
    if (confirmed) {
        // Ação a ser executada após a confirmação, como enviar uma solicitação de exclusão para o servidor
    }
}