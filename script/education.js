const mapImage = document.querySelector('.map-image');
mapImage.addEventListener('click', () => {
    mapImage.classList.toggle('zoomed');
});

const rulesImages = document.querySelectorAll('.rules-img');
rulesImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});