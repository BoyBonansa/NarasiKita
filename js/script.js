

// navbar aktif

// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to remove 'active' class from all nav links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' class based on section in view
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const offset = window.innerHeight / 3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop >= -offset && sectionTop <= offset) {
            removeActiveClasses();
            document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Automatically set #home as active when page is first loaded
function activateHomeOnLoad() {
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.classList.add('active');
}

// Event listener for scrolling
window.addEventListener('scroll', setActiveLink);

// Activate #home on page load
window.addEventListener('load', activateHomeOnLoad);

// navbar

const navbar = document.querySelector(".navbar-nav");
const menuCheck = document.querySelector("#menuCheck");

menuCheck.addEventListener("click", () => {
    navbar.classList.add ("nav-flex");
});
