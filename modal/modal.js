// Simple Modal 

function learnMore() {
    console.log("learn more is working");
    document.getElementById('simple-modal-card').style.display = "block";
}

function closeLearnMore() {
    console.log("close learn more modal is working");
    document.getElementById('simple-modal-card').style.display = "none";
}


// Two cards with simple modal (On click)

function cardOneLearnMore(){
    console.log("card one's button is working properly");
    document.getElementById('simple-modal-card-one-paragraph').style.display = "block";
}

function cardTwoLearnMore(){
    console.log("card two's button is working properly");
    document.getElementById('simple-modal-card-two-paragraph').style.display = "block";
}


// Modal JS Modal Tutorial (Matheus Battisti - Hora de Codar)

const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
});

