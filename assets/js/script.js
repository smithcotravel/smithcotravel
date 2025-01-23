// JavaScript for Smith & Co. Travel Website

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav ul li a");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Add dynamic functionality to forms (optional)
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Simulate a form submission
            alert("Thank you for reaching out! We will get back to you soon.");

            // Reset the form after submission
            contactForm.reset();
        });
    }
});
