const slider = document.querySelector('.image-slider')
const arrLeft = document.querySelector('.arrow-Left')
const arrRight = document.querySelector('.arrow-Right')
const heading = document.querySelector('.caption h1')
const decription = document.querySelector('.caption p')


const images = [ "delhi", "rome", "ny", "tokyo" ];

const headings = [ "New Delhi, India", "Rome, Italy", "New York, USA", "Tokyo, Japan"]

const decriptions = [
    "historic landmarks, vibrant culture, bustling streets.",
    "ancient ruins, grand architecture, rich culture",
    "iconic skyline, diverse culture, vibrant energy.",
    "futuristic city, ancient traditions, culinary delights."
]

let id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(img/${images[id]}.jpg)`
    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550 )
    heading.innerText = headings[id];
    decription.innerText = decriptions[id];
}

arrLeft.addEventListener('click', () => {
    id--;

    if (id < 0) {
        id = images.length - 1;
    }

    slide(id);
});

arrRight.addEventListener('click', () => {
    id++;

    if (id > images.length - 1) {
        id = 0;
    }

    slide(id);
});
