// ================= MOBILE MENU =================

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".menu-btn");

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    }
}


// ================= CLOSE MENU ON LINK CLICK =================

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        const navMenu = document.getElementById("navMenu");
        const menuButton = document.querySelector(".menu-btn");

        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// ================= CLOSE MENU WHEN CLICKING OUTSIDE =================

document.addEventListener("click", function (event) {
    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (
        navMenu &&
        menuButton &&
        navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    }
});


// ================= HEADER SCROLL EFFECT =================

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

function updateActiveNavigation() {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation);

document.addEventListener("DOMContentLoaded", updateActiveNavigation);


// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .technology-grid div, .mission-grid div, .testimonial, .about-grid, .healthcare-content, .contact-grid"
);

const revealObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ================= CURRENT YEAR =================

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= CONTACT EMAIL PROTECTION =================

document.querySelectorAll('a[href^="mailto:"]').forEach(function (emailLink) {
    emailLink.addEventListener("click", function () {
        const email = emailLink.getAttribute("href");

        if (email) {
            window.location.href = email;
        }
    });
});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
