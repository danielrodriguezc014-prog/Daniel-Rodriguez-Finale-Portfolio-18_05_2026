// --- SCROLL REVEAL LOGIC ---

function reveal() {

    const reveals = document.querySelectorAll(".reveal");



    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;

        let elementTop = reveals[i].getBoundingClientRect().top;

        let elementVisible = 120; // Distance in px before the item appears



        if (elementTop < windowHeight - elementVisible) {

            reveals[i].classList.add("active");

        }

    }

}



// Trigger reveal on scroll

window.addEventListener("scroll", reveal);



// Trigger reveal on initial page load

window.addEventListener("DOMContentLoaded", reveal);



// --- HERO PARALLAX (Subtle Float) ---

window.addEventListener('scroll', function() {

    const heroImg = document.querySelector('.hero-image img');

    if (heroImg) {

        let scrollValue = window.scrollY;

        // Moves the image slightly based on scroll for a 3D feel

        heroImg.style.transform = `translateY(${scrollValue * 0.1}px)`;

    }

});



// --- SMOOTH SCROLLING FOR NAV LINKS ---

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});
