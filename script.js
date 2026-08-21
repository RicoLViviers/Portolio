// ========================================
// Current year
// ========================================

document.getElementById("year").textContent = new Date().getFullYear();


// ========================================
// Navigation background
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.background = "rgba(8, 11, 15, 0.92)";
        navbar.style.backdropFilter = "blur(12px)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
    }

});


// ========================================
// Reveal sections on scroll
// ========================================

const revealElements = document.querySelectorAll(
    ".project-card, .focus-card, .log-item, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});