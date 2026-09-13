// ============================================
// MOBILE MENU
// ============================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


// Open / close mobile menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a link

const navItems =
    document.querySelectorAll("#navLinks a");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


// Observe every section

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ============================================
// ACTIVE NAVIGATION
// ============================================

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll("#navLinks a");


const activeSectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(function (link) {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            '#navLinks a[href="#' +
                            entry.target.id +
                            '"]'
                        );


                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },

        {
            threshold: 0.55
        }

    );


sections.forEach(function (section) {

    activeSectionObserver.observe(section);

});


// ============================================
// FOOTER YEAR
// ============================================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();