const button = document.getElementById('button')
const ucapan = document.getElementById('ucapan')
const card = document.getElementById('card')

function openMail() {
    ucapan.classList.toggle('ucapan-open')
    card.classList.toggle('card-open')
    button.classList.toggle('button-open')
    button.textContent = (button.textContent === "Click Di Sini") ? "Tutup" : "Click Di Sini"
}



