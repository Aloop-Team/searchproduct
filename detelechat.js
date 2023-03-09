const trashIcons = document.querySelectorAll('.bxs-trash');

trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener('click', () => {
    const isConfirmed = confirm('Are you sure you want to delete this post?');

    if (isConfirmed) {
      trashIcon.parentElement.remove();
    }
  });
});
