// Toggle between dark and light mode
const modeToggle = document.getElementById('mode-toggle');
const icon = document.getElementById('icon');

// Check if the user has a saved theme preference and apply it
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.textContent = '🌙'; // Dark mode icon
} else {
    icon.textContent = '🌞'; // Light mode icon
}

// Event listener for the dark mode toggle button
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌙'; // Switch to dark mode icon
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        icon.textContent = '🌞'; // Switch to light mode icon
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

// Scroll effect on the homepage
document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".mode-sensitive-div");

    // Observer for triggering animations when elements are visible in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the div is visible
    });

    divs.forEach(div => observer.observe(div));
});


// Function to handle the scroll animation for tech icons
function handleScroll() {
    const iconsSection = document.getElementById('tech-icons-section');
    const icons = document.querySelectorAll('.icon-box');

    const sectionRect = iconsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        // Section is in view
        icons.forEach(icon => {
            icon.classList.add('visible'); // Ensure visibility class is applied
        });
    } else {
        // Section is out of view
        icons.forEach(icon => {
            icon.classList.remove('visible'); // Remove visibility class
        });
    }
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load to handle any icons already in view
});





const circles = document.querySelectorAll('.circle');
const centerCircle = document.getElementById('center-circle');
let combined = false;

function animateCircles() {
    if (!combined) {
        // Move the circles into the center
        circles.forEach(circle => {
            if (circle !== centerCircle) {
                circle.style.transform = 'translate(-50%, -50%) scale(0)';
            }
        });
        // Grow the center circle
        centerCircle.style.transform = 'translate(-50%, -50%) scale(2)';
        combined = true;
    } else {
        // Move the circles back to their original positions
        document.getElementById('circle1').style.transform = 'translateX(-50%)';
        document.getElementById('circle2').style.transform = 'translate(0, 0)';
        document.getElementById('circle3').style.transform = 'translateY(-50%)';
        document.getElementById('circle4').style.transform = 'translate(0, 0)';
        document.getElementById('circle5').style.transform = 'translateX(-50%)';
        document.getElementById('circle6').style.transform = 'translate(0, 0)';
        document.getElementById('circle7').style.transform = 'translateY(-50%)';
        document.getElementById('circle8').style.transform = 'translate(0, 0)';

        // Reset the center circle size
        centerCircle.style.transform = 'translate(-50%, -50%) scale(1)';
        combined = false;
    }
}

// Animate every 3 seconds
setInterval(animateCircles, 3000);










