function toggleMenu() {
const nav = document.getElementById("navMenu");

```
if (nav) {
    nav.classList.toggle("active");
}
```

}

// Close mobile menu when a navigation link is clicked

document.querySelectorAll("#navMenu a").forEach(function(link) {

```
link.addEventListener("click", function() {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.remove("active");
    }

});
```

});

// Close mobile menu when clicking outside the navigation

document.addEventListener("click", function(event) {

```
const nav = document.getElementById("navMenu");
const menuButton = document.querySelector(".menu-btn");

if (!nav || !menuButton) {
    return;
}

if (
    nav.classList.contains("active") &&
    !nav.contains(event.target) &&
    !menuButton.contains(event.target)
) {
    nav.classList.remove("active");
}
```

});

// Add a small shadow effect to the header while scrolling

window.addEventListener("scroll", function() {

```
const header = document.getElementById("header");

if (!header) {
    return;
}

if (window.scrollY > 20) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
```

});
