//Get modal
var modal = document.getElementById('modal-id');
//Get open modal
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for click
modalBtn.addEventListener('click', openModal);
//Function to open modal
function openModal() {
    modal.style.display = 'block';
}

//Listen for click
closeBtn.addEventListener('click', closeModal);
//Function to open modal
function closeModal() {
    modal.style.display = 'block';
}

