// Smart Navbar: Hide on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px"; // Hide the navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show the navbar when scrolling up
    }
    lastScrollTop = scrollTop;
});

// Typing Animation: Trigger after a short delay
document.addEventListener("DOMContentLoaded", function () {
    if (typeof textArray !== 'undefined' && textArray.length) {
        setTimeout(type, newTextDelay + 250); // Assuming 'type' function is defined elsewhere
    }
});

// Certificate Slider: Pause and resume scroll effect
const certificateSlider = document.getElementById('slider');
let isPaused = false;

function pauseScroll() {
    certificateSlider.style.animationPlayState = 'paused';
    isPaused = true;
}

function resumeScroll() {
    certificateSlider.style.animationPlayState = 'running';
    isPaused = false;
}

// Contact Form: Prevent submission and show a success message
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the actual form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert("Message Sent Successfully!");
        this.reset(); // Reset the form after successful submission
    } else {
        alert("Please fill all the fields.");
    }
});

// Project Modal: Display project details in a modal on click
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalProjectTitle');
const modalDetails = document.getElementById('modalProjectDetails');
const closeModal = document.querySelector('.close');

// Loop through each project card and add a click event
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const details = card.querySelector('ul').innerHTML;

        modalTitle.textContent = title;
        modalDetails.innerHTML = details;

        modal.style.display = "block"; // Show the modal
    });
});

// Close modal when user clicks on <span> (x)
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Close modal if user clicks anywhere outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Education Card Hover Effect: Smooth scale animation on hover
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transition = "transform 0.3s ease"; // Smooth transition
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

//footer 
document.querySelectorAll('.footer-links ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
