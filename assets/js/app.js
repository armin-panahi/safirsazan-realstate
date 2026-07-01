/* ==========================================================
   APP
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const header = document.querySelector(".header");

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav");

const navLinks = document.querySelectorAll(".nav__link");

const scrollTopBtn = document.getElementById("scrollTop");

const accordionItems = document.querySelectorAll(".accordion__item");

const contactForm = document.querySelector(".form");

/* ==========================================================
   MOBILE MENU
========================================================== */

function toggleMenu() {

    nav.classList.toggle("nav--open");

    menuBtn.classList.toggle("is-active");

}

menuBtn?.addEventListener("click", toggleMenu);

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("nav--open");

        menuBtn.classList.remove("is-active");

    });

});

/* ==========================================================
   ESC CLOSE MENU
========================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        nav.classList.remove("nav--open");

        menuBtn.classList.remove("is-active");

    }

});

/* ==========================================================
   STICKY HEADER
========================================================== */

function handleHeaderScroll() {

    if (window.scrollY > 50) {

        header?.classList.add("scrolled");

    } else {

        header?.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeaderScroll);


/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

function handleScrollTopButton() {

    if (!scrollTopBtn) return;

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

}

window.addEventListener("scroll", handleScrollTopButton);


scrollTopBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* ==========================================================
   INITIAL STATE
========================================================== */

handleHeaderScroll();

handleScrollTopButton();

