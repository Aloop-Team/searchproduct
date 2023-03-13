const addContributor = document.querySelector('.addcontributor');
const editPermission = document.querySelector('.edit-permission');
const popupOverlay = document.querySelector('.popup-overlay');
const popupAddContributor = document.querySelector('.popup-addcontributor');

addContributor.addEventListener('click', function(event) {
event.preventDefault();
popupOverlay.style.display = 'block';
popupAddContributor.style.display = 'block';
});

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