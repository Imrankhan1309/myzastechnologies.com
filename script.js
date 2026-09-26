// =====================================================
// MOBILE NAVIGATION
// =====================================================

function toggleMenu() {
const nav = document.getElementById("navMenu");

```
if (nav) {
    nav.classList.toggle("active");
}
```

}

// =====================================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// =====================================================

document.querySelectorAll("#navMenu a").forEach(function (link) {

```
link.addEventListener("click", function () {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.remove("active");
    }

});
```

});

// =====================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener("click", function (event) {

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

// =====================================================
// HEADER SCROLL EFFECT
// =====================================================

window.addEventListener("scroll", function () {

```
const header = document.querySelector(".header");

if (!header) {
    return;
}

if (window.scrollY > 30) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
```

});

// =====================================================
// SMOOTH SCROLL
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
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
```

});

// =====================================================
// CURRENT YEAR
// =====================================================

const yearElement = document.querySelector(".copyright-year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}
