
//toggling the back and white button
const modeToggle = document.getElementById('mode-toggle');
const icon = document.getElementById('icon');

// Check if user has a saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.textContent = '🌙'; // Dark mode icon
} else {
    icon.textContent = '🌞'; // Light mode icon
}

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





//scroll effect on homepage
document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".mode-sensitive-div");

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










//the building blocks creating the webpage on the homepage


