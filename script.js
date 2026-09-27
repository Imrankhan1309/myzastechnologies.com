document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            navMenu.classList.toggle("active");

        });

    }


    /* =====================================================
       MOBILE DROPDOWN HANDLING
    ===================================================== */

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {

        const toggle = dropdown.querySelector(":scope > .dropdown-toggle");

        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", function (event) {

            /*
             * On desktop, CSS hover controls the dropdown.
             * On mobile, JavaScript controls it.
             */

            if (window.innerWidth <= 900) {

                event.preventDefault();
                event.stopPropagation();

                dropdown.classList.toggle("mobile-open");

                const menu =
                    dropdown.querySelector(":scope > .dropdown-menu");

                if (menu) {

                    if (dropdown.classList.contains("mobile-open")) {
                        menu.style.display = "block";
                    } else {
                        menu.style.display = "none";
                    }

                }

            }

        });

    });


    /* =====================================================
       HEALTHCARE SUB DROPDOWNS
    ===================================================== */

    const subDropdowns =
        document.querySelectorAll(".sub-dropdown");

    subDropdowns.forEach(function (subDropdown) {

        const subToggle =
            subDropdown.querySelector(":scope > a");

        if (!subToggle) {
            return;
        }

        subToggle.addEventListener("click", function (event) {

            if (window.innerWidth <= 900) {

                event.preventDefault();
                event.stopPropagation();

                subDropdown.classList.toggle("mobile-open");

                const subMenu =
                    subDropdown.querySelector(
                        ":scope > .sub-dropdown-menu"
                    );

                if (subMenu) {

                    if (
                        subDropdown.classList.contains(
                            "mobile-open"
                        )
                    ) {

                        subMenu.style.display = "block";

                    } else {

                        subMenu.style.display = "none";

                    }

                }

            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING A NORMAL LINK
    ===================================================== */

    const navLinks =
        navMenu.querySelectorAll(
            "a:not(.dropdown-toggle)"
        );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 900) {

                navMenu.classList.remove("active");

            }

        });

    });


    /* =====================================================
       CLICK OUTSIDE MENU
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (!navMenu || !mobileMenuBtn) {
            return;
        }

        if (
            window.innerWidth <= 900 &&
            !navMenu.contains(event.target) &&
            !mobileMenuBtn.contains(event.target)
        ) {

            navMenu.classList.remove("active");

        }

    });


    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    let currentSlide = 0;

    if (heroSlides.length > 1) {

        function showHeroSlide(index) {

            heroSlides.forEach(function (slide, i) {

                if (i === index) {

                    slide.style.display = "flex";

                    slide.style.opacity = "1";

                } else {

                    slide.style.display = "none";

                    slide.style.opacity = "0";

                }

            });

        }


        showHeroSlide(currentSlide);


        setInterval(function () {

            currentSlide++;

            if (currentSlide >= heroSlides.length) {
                currentSlide = 0;
            }

            showHeroSlide(currentSlide);

        }, 6000);

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       RESET MOBILE MENUS WHEN RESIZING TO DESKTOP
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            navMenu.classList.remove("active");

            document
                .querySelectorAll(".dropdown")
                .forEach(function (dropdown) {

                    dropdown.classList.remove(
                        "mobile-open"
                    );

                    const menu =
                        dropdown.querySelector(
                            ":scope > .dropdown-menu"
                        );

                    if (menu) {
                        menu.style.display = "";
                    }

                });


            document
                .querySelectorAll(".sub-dropdown")
                .forEach(function (subDropdown) {

                    subDropdown.classList.remove(
                        "mobile-open"
                    );

                    const menu =
                        subDropdown.querySelector(
                            ":scope > .sub-dropdown-menu"
                        );

                    if (menu) {
                        menu.style.display = "";
                    }

                });

        }

    });

});
