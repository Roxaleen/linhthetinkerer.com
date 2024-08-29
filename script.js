// Navigation menu configuration
const navMenu = document.getElementById('navbar-links');
const navBtn = document.getElementById('nav-menu-button');
const navBackdrop = document.getElementById('nav-menu-backdrop');

function toggleNavMenu() {
    if(navMenu.getAttribute('aria-expanded') === 'true') {
        navMenu.setAttribute('aria-expanded','false');
        navBtn.setAttribute('aria-label','Open navigation menu');
        document.addEventListener('focusin', closeMenuOnOutsideFocus);
    } else {
        navMenu.setAttribute('aria-expanded','true');
        navBtn.setAttribute('aria-label','Close navigation menu');
        document.removeEventListener('focusin', closeMenuOnOutsideFocus);
    }
}

function closeMenuOnOutsideFocus(event) {
    if (!navMenu.contains(event.target)) {toggleNavMenu();}
}

navBtn.addEventListener('click', toggleNavMenu);
navBackdrop.addEventListener('click', toggleNavMenu);