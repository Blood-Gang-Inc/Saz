// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamically update the footer with the current year
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} Blood Gang™️, Inc. All rights reserved.`;
    }
});

// Confirm navigation for external links, excluding GitHub links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Check if the link is not a GitHub link
        if (!href.includes('github.com')) {
            // Show a confirmation dialog
            const confirmNavigation = confirm('You are about to visit an external site. Do you want to proceed?');
            if (!confirmNavigation) {
                e.preventDefault(); // Prevent navigation if user cancels
            }
        }
    });
});
