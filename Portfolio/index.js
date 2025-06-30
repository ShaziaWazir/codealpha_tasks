const menuIcon = document.querySelector('menu-icon');
const navIcon = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
