const navSlide = () => {
    const barra3 = document.querySelector('.barra3');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav

    barra3.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
    });
}
navSlide();