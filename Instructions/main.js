//Get modal
var modal = document.getElementById('simpleModal');
//Get open modal
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Function to open modal
function openModal() {
    modal.style.display = 'block';
}
//Function to close modal
function closeModal() {
    modal.style.display = 'none';
}


