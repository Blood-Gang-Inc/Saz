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

// Simple alert for external link navigation (optional feature)
document.querySelectorAll('.button-container a').forEach(link => {
    link.addEventListener('click', (e) => {
        const isExternal = link.getAttribute('target') === '_blank';
        if (isExternal) {
            alert('You are about to visit an external site!');
        }
    });
});
