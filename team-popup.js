const addContributor = document.querySelector('.addcontributor');
const popupOverlay = document.querySelector('.popup-overlay');
const popupAddContributor = document.querySelector('.popup-addcontributor');
const editPermission = document.querySelector('.edit-permission');

/* add contributor */

addContributor.addEventListener('click', function(event) {
event.preventDefault();
popupOverlay.style.display = 'block';
popupAddContributor.style.display = 'block';
});

/* edit contributor */

editPermission.addEventListener('click', function(event) {
event.preventDefault();
popupOverlay.style.display = 'block';
popupAddContributor.style.display = 'block';
});

popupAddContributor.querySelector('.addcontributor-title .bx-x').addEventListener('click', function(event) {
event.preventDefault();
popupOverlay.style.display = 'none';
popupAddContributor.style.display = 'none';
});