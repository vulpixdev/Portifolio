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
