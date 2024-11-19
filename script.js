// Image slider functionality
const imageSliders = document.querySelectorAll('.image-slider');

imageSliders.forEach((slider) => {
    const images = slider.querySelectorAll('img');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }, 5000); // 5-second interval
});

// News slider functionality
const newsSlider = document.querySelector('.news-slider');

setInterval(() => {
    const newsText = newsSlider.querySelector('p');
    const newsArray = [
        'Community News: Always follow us for the very Community News that Matter to You.',
        'Latest Update: What is happening where, who is doing what, alerts and Announcements',
        'News Flash: We bring you the Community Stories near and far as they happen',
    ];
    const randomIndex = Math.floor(Math.random() * newsArray.length);
    newsText.textContent = newsArray[randomIndex];
}, 5000); // 5-second interval

// Animations
const fadeIns = document.querySelectorAll('.fade-in');

fadeIns.forEach((element) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            element.classList.add('visible');
        }
    }, { threshold: 0.5 });

    observer.observe(element);
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

const images = document.querySelectorAll('.header-image-slider img');
let currentIndex = 0;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000);
