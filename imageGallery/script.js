const images = [
    './images/img1.jfif',
    './images/img2.jfif',
    './images/img3.jfif',
    './images/img4.jfif',
    './images/img5.jfif',
    './images/img6.jfif',
];

const gallery = document.getElementById('gallery');

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('w-full', 'h-auto', 'object-cover', 'rounded-lg', 'shadow-lg', 'transition-transform', 'duration-500', 'hover:scale-105');
    gallery.appendChild(img);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightbox.classList.remove('hidden');
    }
});

lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});
