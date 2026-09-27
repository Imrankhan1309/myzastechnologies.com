function toggleMenu() {
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu = document.getElementById("navMenu");

        navMenu.classList.remove("active");

    });

});
