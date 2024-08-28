// Navigation menu configuration
const navMenu = document.getElementById('navbar-links');
const navBtn = document.getElementById('nav-menu-button');

function toggleNavMenu() {
    if(navMenu.getAttribute('aria-expanded') === 'true') {
        navMenu.setAttribute('aria-expanded','false');
        document.removeEventListener('click',detectExternalClick);
    } else {
        navMenu.setAttribute('aria-expanded','true');
        document.addEventListener('click',detectExternalClick);
    }
}

function detectExternalClick (event) {
    if(!navMenu.contains(event.target) && !navBtn.contains(event.target)) {
        navMenu.setAttribute('aria-expanded','false');
        document.removeEventListener('click',detectExternalClick);
    }
}

navBtn.addEventListener('click', toggleNavMenu);