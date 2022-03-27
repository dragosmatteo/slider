const navSlide = function () {
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // !! Toggle Nav
burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // !! Animate Links
        navLinks.forEach((link, i) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 1.5}s`;
                console.log(i / 7);
        });

        // !! Burger animation 
        burger.classList.toggle('toggle');
    });

}

navSlide();