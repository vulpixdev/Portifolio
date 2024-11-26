// Navbar toggle
document.querySelector(".toggle-menu").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("open");
});

// Carousel
const carousel = document.querySelector('.carousel-inner');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('rotate');

        setTimeout(() => {
            const modal = document.getElementById('modal');
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalText = modal.querySelector('.modal-text');

            modalImage.src = card.getAttribute('data-image');
            modalTitle.textContent = card.getAttribute('data-title');
            modalText.textContent = card.getAttribute('data-text');

            modal.classList.add('active');
            card.classList.remove('rotate');
        }, 600);
    });
});

document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
});

document.getElementById('modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
    }
});

const themeToggleButton = document.querySelector('.theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggleButton.textContent = 
        document.body.classList.contains('light-mode') ? 'Modo Escuro' : 'Modo Claro';
});

