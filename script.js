// =========================================
// MOBILE MENU
// =========================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu when clicking a link

const navItems =
    document.querySelectorAll("#navLinks a");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// =========================================
// SCROLL REVEAL
// =========================================

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
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("#navLinks a");


const activeObserver =
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

    activeObserver.observe(section);

});


// =========================================
// FOOTER YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();
