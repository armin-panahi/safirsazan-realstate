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

/* ==========================================================
   CONTACT FORM VALIDATION
========================================================== */

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        const fields = [name, phone, email, subject, message];

        let isValid = true;

        fields.forEach(field => {

            field.classList.remove("input-error");

            if (!field.value.trim()) {

                field.classList.add("input-error");

                isValid = false;

            }

        });

        if (!isValid) {

            alert("لطفاً تمامی فیلدها را تکمیل کنید.");

            return;

        }

        const phoneRegex = /^09\d{9}$/;

        if (!phoneRegex.test(phone.value.trim())) {

            phone.classList.add("input-error");

            alert("شماره موبایل معتبر نیست.");

            return;

        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {

            email.classList.add("input-error");

            alert("ایمیل معتبر نیست.");

            return;

        }

        alert("پیام شما با موفقیت ثبت شد.");

        contactForm.reset();

    });

}


/* ==========================================================
   REMOVE ERROR ON INPUT
========================================================== */

document.querySelectorAll(".input, .textarea").forEach(input => {

    input.addEventListener("input", () => {

        input.classList.remove("input-error");

    });

});

/* ==========================================================
   CLOSE MENU ON OUTSIDE CLICK
========================================================== */

document.addEventListener("click", (event) => {

    if (!nav || !menuBtn) return;

    const clickedInsideNav = nav.contains(event.target);
    const clickedMenuBtn = menuBtn.contains(event.target);

    if (
        nav.classList.contains("nav--open") &&
        !clickedInsideNav &&
        !clickedMenuBtn
    ) {

        nav.classList.remove("nav--open");
        menuBtn.classList.remove("is-active");

    }

});


/* ==========================================================
   FORM LOADING STATE
========================================================== */

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const submitBtn = contactForm.querySelector(
            'button[type="submit"]'
        );

        if (!submitBtn) return;

        submitBtn.classList.add("loading");

        submitBtn.disabled = true;

        setTimeout(() => {

            submitBtn.classList.remove("loading");

            submitBtn.disabled = false;

        }, 1200);

    });

}


/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        nav?.classList.remove("nav--open");

        menuBtn?.classList.remove("is-active");

    }

});


/* ==========================================================
   PASSIVE SCROLL EVENTS
========================================================== */

window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);

window.addEventListener(
    "scroll",
    handleScrollTopButton,
    { passive: true }
);


/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================================
   INITIALIZATION
========================================================== */

function init() {

    handleHeaderScroll();

    handleScrollTopButton();

}

init();


/* ==========================================================
   PREVENT EMPTY LINKS
========================================================== */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});


/* ==========================================================
   SAFE CONSOLE MESSAGE
========================================================== */

console.log(
    "%cDeveloped by :",
    "color:#white;font-size:15px;"
);

console.log(
    "%cARMIN PANAHI & AMIRREZA AREZOMAND",
    "color:#B68D40;font-size:16px;font-weight:bold;"
);



/* ==========================================================
   END OF FILE
========================================================== */