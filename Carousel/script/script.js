const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselMeter = document.querySelector(".carousel-meter");
const circles = [...carouselMeter.children];

// Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Button Listeners
function next(amount) {
    if (counter >= carouselImages.length - 1) return;
    circles[counter - 1].classList.remove('active');
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter += amount;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function prev(amount) {
    if (counter <= 0) return;
    circles[counter - 1].classList.remove('active');
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter -= amount;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {next(1)});

prevBtn.addEventListener('click', () => {prev(1)});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    circles[counter - 1].classList.add("active");
})

// Carousel Meter
circles.forEach(circle => {
    circle.addEventListener("click", () => {
        const amount = counter - circles.indexOf(circle);
        if (amount < 1) next(Math.abs(amount) + 1);
        else if (amount > 1) prev(amount - 1);
        else return;
    })
})

// Automatic Slide
let interval = setInterval(() => {
    next(1);
}, 7000);

carouselSlide.addEventListener('mouseover', () => {
    clearInterval(interval);
})

carouselSlide.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        next(1);
    }, 7000);
})

carouselMeter.addEventListener('mouseover', () => {
    clearInterval(interval);
})

carouselMeter.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        next(1);
    }, 7000);
})