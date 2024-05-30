const images = [
    {
        src: 'moped1.jpg',
        title: 'moped 1',
        description: 'MOPEEEED',
        price: '$100',
        discount: '10% OFF'
    },
    {
        src: 'moped2.jpg',
        title: 'moped 2',
        description: 'moped for saaale sale',
        price: '$200',
        discount: '15% OFF'
    },
    {
        src: 'moped3.jpg',
        title: 'moped 3',
        description: 'yes moped moped',
        price: '$300',
        discount: '20% OFF'
    }
];

let currentIndex = 0;

function updateGallery() {
    const imageElement = document.getElementById('gallery-image');
    const titleElement = document.getElementById('image-title');
    const descriptionElement = document.getElementById('image-description');
    const priceElement = document.getElementById('image-price');
    const discountBadge = document.querySelector('.discount-badge');

    imageElement.src = images[currentIndex].src;
    titleElement.textContent = images[currentIndex].title;
    descriptionElement.textContent = images[currentIndex].description;
    priceElement.textContent = images[currentIndex].price;
    discountBadge.textContent = images[currentIndex].discount;
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
}

// Initialize the gallery
updateGallery();
