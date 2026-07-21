// ================================
// ECHOESᵗʰ Space
// script.js
// ================================

// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

// Navbar Shadow on Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,.96)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    } else {

        navbar.style.background = "rgba(255,255,255,.90)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// Back To Top Button

const backToTop = document.getElementById("backToTop");

backToTop.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

document.querySelectorAll(".gallery-item").forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
});

document.querySelectorAll(".review-card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

document.querySelectorAll(".about-image").forEach(img => {
    img.classList.add("hidden");
    observer.observe(img);
});

document.querySelectorAll(".about-text").forEach(text => {
    text.classList.add("hidden");
    observer.observe(text);
});

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});